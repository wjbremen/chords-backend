const mongoose = require('mongoose');
const MusicalKey = require("./MusicalKeyModel"); 
const allChords = require("../allChords"); 
const chordConstants = require("../chordConstants"); 
const chordLogic = require("./chordLogic");

mongoose.set('strictQuery', false);


//root = 48
//type = "major"
//sharpsOrFlats = "#"
function createMusicalKeyDocument(root, type, sharpsOrFlats){
  //validate inputs here 
  root = root.toString(); 
  //get root letter representation 
  //rootLetter = "C", "C#", "Cb", etc
  let rootLetter = ""; 
  if (chordConstants.MIDI_NOTES[root].natural) {
    rootLetter = chordConstants.MIDI_NOTES[root].noteLetter; 
  } else {
    if(sharpsOrFlats == "#"){
      rootLetter = chordConstants.MIDI_NOTES[root].sharpLetter + "#";
    } 
    else {
      rootLetter = chordConstants.MIDI_NOTES[root].flatLetter + "b";
    }
  }

  //get all Chords in all ocataves 
  const chordsData = allChords.allChordsAllOctaves(root, type, sharpsOrFlats);
  
  //define object to add data to in proper format for model
  //eg {key: ["C#", "minor"]}
  let musicalKeyObject = 
  {
    key: [rootLetter, type], 
    sharpsOrFlats : sharpsOrFlats,
    chords: []
  }; 

  //set initial octave to 1
  let currentOctave = 1; 

  //iterate over data
  chordsData.forEach( octaveObject => {
    let octaveObj = {octave : currentOctave, scaleDegree: []}; 
    for (const [currentScaleDegree, arrayOfChordArrays] of Object.entries(octaveObject)) {
      let scaleDegreeObj = {scaleDegree: currentScaleDegree, chords: []}
      if(arrayOfChordArrays){
        arrayOfChordArrays.forEach( chordArray => {
          let chordObject = {type: chordArray[chordArray.length - 1], root: chordArray[chordArray.length - 2], notes: [] };
          let notesArray = [];
          chordArray.forEach( note => {
            if((typeof note) == "number"){
              notesArray.push(note);
            }
          });
          chordObject.notes = notesArray;
          scaleDegreeObj.chords.push(chordObject); 
        });
      } 
      octaveObj.scaleDegree.push(scaleDegreeObj); 
    }
    musicalKeyObject.chords.push(octaveObj); 
    currentOctave = currentOctave + 1; 
  });

  return musicalKeyObject; 
}


function createMusicalKeyCollection(){
  //will be an array of musical key documents of type object 
  const returnedCollection = []; 

  const modes = ["major", "dorian", "phrygian", "lydian", "mixolydian", "minor", "locrian"]; 

  //iterate over each midi note from C4 to B4
  for (let root = 60; root <= 71; root++ ){
    for( const mode of modes) { 
      let parentMajor = chordLogic.getParentScale(root, mode); 

      //returns object with 2 keys {sharps: true, flats: false}
      let {sharps, flats} = chordLogic.doesThisMajorKeyContainSharpsOrFlats(parentMajor);

      //enharmonic keys will have a key that contains flats and a key that
      //contains sharps. The notes will be equivalent, but the names of the keys
      //will not 
      if (sharps && flats) {
        returnedCollection.push( createMusicalKeyDocument(root, mode, "#"));
        returnedCollection.push( createMusicalKeyDocument(root, mode, "b"));
      } 
      else {
        if(flats){
          returnedCollection.push( createMusicalKeyDocument(root, mode, "b"));
        } 
        else {
          returnedCollection.push( createMusicalKeyDocument(root, mode, "#"));
        }
      }
       
    }
  }
  return returnedCollection; 
}

main().catch(err => console.log(err));

async function main() {
  //console.log(typeof allChords.allChordsAllOctaves ); 
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  const collection = createMusicalKeyCollection();  

  for (const doc of collection){
    let exists = await MusicalKey.exists({key: doc.key}); 
    if (exists){
      //find one and replace
      await MusicalKey.findOneAndReplace({key: doc.key}, doc); 
    }
    else {
      //save
      if("key" in doc){
         let newDoc = new MusicalKey(doc); 
         newDoc.save(); 
      }
    }
  }


  let foundDocs =  await MusicalKey.find({}); 
  foundDocs.forEach( doc => {
    console.log("key : " + doc.key); 
  });
  console.log("Found " + foundDocs.length + " documents"); 
  
  let dPhrygian = await MusicalKey.find({key: ["D", "phrygian"]}); 
  console.log(JSON.stringify(dPhrygian, null, 2)) ; 

}

/*
  let doc = new MusicalKey(chords);
  doc.save()
  .then(savedDoc => {
    MusicalKey.find({})
    .then(foundDocs => {
      foundDocs.forEach( doc => {
        console.log(doc.chords);
      });
    });
  });

  */
  //console.log(JSON.stringify(chords, undefined, 2));  
  /*let Cmajor = new Chord({notes: [1,2,3], type: "major", root: "G"});
  //console.log(Cmajor); 
  Cmajor.save()
  .then( savedDoc => {
    Chord.find({})
    .then(foundDocs => {
        console.log(foundDocs); 
            foundDocs.forEach( doc => {
                //console.log("notes :" + doc.notes); 
            })

    });
  
  });
  */
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
