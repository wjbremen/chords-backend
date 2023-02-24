
const chordConstants = require("../chordConstants"); 

const halfDimSymbol = "HalfDimSymbolHere"; 


const chordTypes = [
/////////////////////////////////////////////
////////////Triads ///////////////////////
//////////////////////////////////////////
{
    notations: {
        description: "Major triad",
        short: "M",
        long: "maj",
        shortHasSuperScript: false,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: ""
    },
    offsets: [0,4,7]
},
{
    notations: {
        description: "Minor triad",
        short: "m",
        long: "min",
        shortHasSuperScript: false,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: ""
    },
    offsets: [0,3,7]
},
{
    notations: {
        description: "Augmented triad",
        short: "+",
        long: "aug",
        shortHasSuperScript: false,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: ""
    },
    offsets: [0,4,8]
},
{
    notations: {
        description: "Diminished triad",
        short: "o",
        long: "dim",
        shortHasSuperScript: true,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: "<sup>o</sup>"
    },
    offsets: [0,3,6]
},
///////////////////////////////////////////
//////////Seventh chords ////////////////
/////////////////////////////////////////
{
    notations: {
        description: "Dominant seventh",
        short: "7",
        long: "",
        shortHasSuperScript: true,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: "<sup>7</sup>"
    },
    offsets: [0,4,7,10]
},
{
    notations: {
        description: "Major seventh",
        short: "M7",
        long: "maj7",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "maj<sup>7</sup>",
        shortHtml: "M<sup>7</sup>"
    },
    offsets: [0,4,7,11]
},
{
    notations: {
        //harmonic minor scale 
        description: "Minor-major seventh",
        short: "mM7",
        long: "minmaj7",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>maj7</sup>",
        shortHtml: "m<sup>M7</sup>"
    },
    offsets: [0,3,7,11]
},
{
    notations: {
        description: "Minor seventh",
        short: "m7",
        long: "min7",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>7</sup>",
        shortHtml: "m<sup>7</sup>"
    },
    offsets: [0,4,7,10]
},
{
    notations: {
        description: "Augmented-major seventh",
        short: "+M7",
        long: "augmaj7",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "aug<sup>maj7</sup>",
        shortHtml: "+<sup>M7</sup>"
    },
    offsets: [0,4,8,11]
},
{
    notations: {
        description: "Augmented seventh",
        other: "Dominant seventh sharp five",
        short: "+7",
        long: "aug7",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "aug<sup>7</sup>",
        shortHtml: "+<sup>7</sup>"
    },
    offsets: [0,4,8,10]
},
{
    notations: {
        //same as Augmented seventh 
        description: "Dominant seventh sharp five",
        short: "7#5",
        long: "7#5",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>7#5</sup>",
        shortHtml: "<sup>7#5</sup>"
    },
    offsets: [0,4,8,10]
},
{
    notations: {
        description: "Half-diminished seventh",
        other: "minor seventh flat five",
        short: halfDimSymbol,
        long: "min7dim5",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>7dim5</sup>",
        shortHtml: "<sup>" + halfDimSymbol + "7</sup>"
    },
    offsets: [0,3,6,10]
},
{
    notations: {
        //same as half diminished seventh 
        description: "minor seventh flat five",
        short: "m7b5",
        long: "min7b5",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>7b5</sup>",
        shortHtml: "m<sup>7b5</sup>"
    },
    offsets: [0,3,6,10]
},
{
    notations: {
        description: "Diminished seventh",
        short: "o7",
        long: "dim7",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "dim<sup>7</sup>",
        shortHtml: "<sup>o7</sup>"
    },
    offsets: [0,3,6,9]
},
{
    notations: {
        description: "Dominant seventh flat five",
        short: "7b5",
        long: "7dim5",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>7dim5</sup>",
        shortHtml: "<sup>7b5</sup>"
    },
    offsets: [0,4,6,10]
},
////////////////////////////////////////////////////
///////Extended chords - ninths, elevenths, thirteenths
////////////////////////////////////////////////////
{
    notations: {
        description: "Major ninth",
        short: "M9",
        long: "maj9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "maj<sup>9</sup>",
        shortHtml: "M<sup>9</sup>"
    },
    offsets: [0,4,7,11,14]
},
{
    notations: {
        description: "Dominant ninth",
        short: "C9",
        long: "",
        shortHasSuperScript: true,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: "<sup>9</sup>"
    },
    offsets: [0,4,7,10,14]
},
{
    notations: {
        //harmonic minor 
        description: "Dominant minor ninth",
        short: "7b9",
        long: "7b9",
        shortHasSuperScript: true,
        longHasSuperScript: false,
        longHtml: "<sup>7b9</sup>",
        shortHtml: "<sup>7b9</sup>"
    },
    offsets: [0,4,7,10,13]
},
{
    notations: {
        //harmonic minor
        //same as dominant minor ninth 
        description: "Dominant seven flat nine",
        short: "7b9",
        long: "7b9",
        shortHasSuperScript: true,
        longHasSuperScript: false,
        longHtml: "<sup>7b9</sup>",
        shortHtml: "<sup>7b9</sup>"
    },
    offsets: [0,4,7,10,13]
},
{
    notations: {
        description: "Minor-major ninth",
        short: "mM9",
        long: "minmaj9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>maj9</sup>",
        shortHtml: "m<sup>M9</sup>"
    },
    offsets: [0,3,7,11,14]
},
{
    notations: {
        description: "Minor ninth",
        short: "m9",
        long: "min9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>9</sup>",
        shortHtml: "m<sup>9</sup>"
    },
    offsets: [0,3,7,10,14]
},
{
    notations: {
        description: "Augmented major ninth",
        short: "+M9",
        long: "augmaj9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "aug<sup>maj9</sup>",
        shortHtml: "+<sup>M9</sup>"
    },
    offsets: [0,4,8,11,14]
},
{
    notations: {
        description: "Augmented dominant ninth",
        short: "+9",
        long: "aug9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "aug<sup>9</sup>",
        shortHtml: "+<sup>9</sup>"
    },
    offsets: [0,4,8,10,14]
},
{
    notations: {
        description: "Half-diminished ninth",
        short: halfDimSymbol + "9",
        long: "m9b5",
        shortHasSuperScript: true,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: "<sup>" + halfDimSymbol + "9</sup>"
    },
    offsets: [0,3,6,10,14]
},
/*
{
    notations: {
        description: "Half-diminished minor ninth",
        short: "",
        long: "",
    },
    
},
*/
{
    notations: {
        description: "Diminished ninth",
        short: "o9",
        long: "dim9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "dim<sup>9</sup>",
        shortHtml: "<sup>o9</sup>"
    },
    offsets: [0,3,6,9,14]
},
{
    notations: {
        description: "Diminished minor ninth",
        short: "ob9",
        long: "dimb9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "dim<sup>b9</sup>",
        shortHtml: "<sup>ob9</sup>"
    },
    offsets: [0,3,6,9,13]
},
{
    notations: {
        description: "Eleventh",
        short: "11",
        long: "",
        shortHasSuperScript: true,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: "<sup>11</sup>"
    },
    offsets: [0,4,7,10,14,17]
},
{
    notations: {
        description: "Major eleventh",
        short: "M11",
        long: "maj11",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "maj<sup>11</sup>",
        shortHtml: "M<sup>11</sup>"
    },
    offsets: [0,4,7,11,14,17]
},
{
    notations: {
        description: "Minor major eleventh",
        short: "mM11",
        long: "minmaj11",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>maj11</sup>",
        shortHtml: "m<sup>M11</sup>"
    },
    offsets: [0,3,7,11,14,17]
},
{
    notations: {
        description: "Minor eleventh",
        short: "m11",
        long: "min11",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>11</sup>",
        shortHtml: "m<sup>11</sup>"
    },
    offsets: [0,3,7,10,14,17]
},
{
    notations: {
        description: "Augmented major eleventh",
        short: "+M11",
        long: "augmaj11",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "aug<sup>maj11</sup>",
        shortHtml: "+<sup>M11</sup>"
    },
    offsets: [0,4,8,11,14,17]
},
{
    notations: {
        description: "Augmented eleventh",
        short: "+11",
        long: "aug11",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "aug<sup>11</sup>",
        shortHtml: "+<sup>11</sup>"
    },
    offsets: [0,4,8,10,14,17]
},
{
    notations: {
        description: "Half-diminished eleventh",
        short: halfDimSymbol + "11",
        long: "",
        shortHasSuperScript: true,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: "<sup>" + halfDimSymbol + "M11</sup>"
    },
    offsets: [0,3,6,10,14,17]
},
{
    notations: {
        description: "Diminished eleventh",
        short: "o11",
        long: "dim11",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>o11</sup>",
        shortHtml: "dim<sup>11</sup>"
    },
    offsets: [0,3,6,9,14,17]
},
{
    notations: {
        description: "Major thirteenth",
        short: "M13",
        long: "maj13",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "maj<sup>13</sup>",
        shortHtml: "maj<sup>13</sup>"
    },
    offsets: [0,4,7,11,14,17,21]
},
{
    notations: {
        description: "Thirteenth",
        short: "13",
        long: "",
        shortHasSuperScript: true,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: "<sup>13</sup>"
    },
    offsets: [0,4,7,10,14,17,21]
},
{
    notations: {
        description: "Minor major thirteenth",
        short: "mM13",
        long: "minmaj13",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>maj13</sup>",
        shortHtml: "m<sup>M13</sup>"
    },
    offsets: [0,3,7,11,14,17,21]
},
{
    notations: {
        description: "Minor thirteenth",
        short: "m13",
        long: "min13",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>13</sup>",
        shortHtml: "m<sup>13</sup>"
    },
    offsets: [0,3,7,10,14,17,21]
},
{
    notations: {
        description: "Augmented major thirteenth",
        short: "+M13",
        long: "augmaj13",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "aug<sup>maj13</sup>",
        shortHtml: "+<sup>M13</sup>"
    },
    offsets: [0,4,8,11,14,17,21]
},
{
    notations: {
        description: "Augmented thirteenth",
        short: "+13",
        long: "aug13",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "aug<sup>13</sup>",
        shortHtml: "+<sup>13</sup>"
    },
    offsets: [0,4,8,10,14,17,21]
},
{
    notations: {
        description: "Half-diminished thirteenth",
        short: halfDimSymbol + "13",
        long: "",
        shortHasSuperScript: true,
        longHasSuperScript: false,
        longHtml: "",
        shortHtml: "<sup>" + halfDimSymbol + "13</sup>"
    },
    offsets: [0,3,6,10,14,17,21]
},



/////////////////////////////////////////////////////
/////// "sus" chords ///////////////////////////////
////////////////////////////////////////////////////

{
    notations: {
        description: "Suspended fourth",
        short: "sus4",
        long: "sus4",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>sus4</sup>",
        shortHtml: "<sup>sus4</sup>"
    },
    offsets: [0,5,7]
}, 
{
    notations: {
        description: "Suspended second",
        short: "sus2",
        long: "sus2",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>sus2</sup>",
        shortHtml: "<sup>sus2</sup>"
    },
    offsets: [0,2,7]
},
{
    notations: {
        description: "Dominant ninth suspended fourth",
        short: "9sus4",
        long: "9sus4",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>9sus4</sup>",
        shortHtml: "<sup>9sus4</sup>"
    },
    offsets: [0,5,7,10,14]
},

/////////////////////////////////////////////////////////
//////////// "add" chords ///////////////////////////////
/////////////////////////////////////////////////////////

{
    notations: {
        description: "Add 2",
        short: "add2",
        long: "add2",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>add2</sup>",
        shortHtml: "<sup>add2</sup>"
    },
    offsets: [0,4,7,14]
},
{
    notations: {
        description: "Add 9",
        short: "add9",
        long: "add9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>add9</sup>",
        shortHtml: "<sup>add9</sup>"
    },
    offsets: [0,4,7,14]
},
{
    notations: {
        description: "Add 4",
        short: "add4",
        long: "add4",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>add4</sup>",
        shortHtml: "<sup>add4</sup>"
    },
    offsets: [0,4,7,17]
},
{
    notations: {
        description: "Add 11",
        short: "add11",
        long: "add11",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>add11</sup>",
        shortHtml: "<sup>add11</sup>"
    },
    offsets: [0,4,7,17]
},

{
    notations: {
        description: "Add 6",
        short: "add6",
        long: "add6",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>add6</sup>",
        shortHtml: "<sup>add6</sup>"
    },
    offsets: [0,4,7,9]
},

{
    notations: {
        description: "minor add 2",
        short: "m-add2",
        long: "min-add2",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>add2</sup>",
        shortHtml: "m<sup>add2</sup>"
    },
    offsets: [0,3,7,14]
},

{
    notations: {
        description: "minor add 4",
        short: "m-add4",
        long: "min-add4",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>add4</sup>",
        shortHtml: "m<sup>add4</sup>"
    },
    offsets: [0,3,7,17]
},

{
    notations: {
        description: "minor add 6",
        short: "m-add6",
        long: "min-add6",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>add6</sup>",
        shortHtml: "m<sup>add6</sup>"
    },
    offsets: [0,3,7,9]
},

{
    notations: {
        description: "minor add flat 2",
        short: "m-addb2",
        long: "min-addb2",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>addb2</sup>",
        shortHtml: "m<sup>addb2</sup>"
    },
    offsets: [0,3,7,13]
},

{
    notations: {
        description: "minor add flat 6",
        short: "m-add6",
        long: "min-addb6",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>add2b6</sup>",
        shortHtml: "m<sup>addb6</sup>"
    },
    offsets: [0,3,7,20]
},
{
    notations: {
        description: "Add sharp 4",
        short: "add#4",
        long: "add#4",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>add#4</sup>",
        shortHtml: "<sup>add#4</sup>"
    },
    offsets: [0,4,7,18]
},


/////////////////////////////////////////////////////////
////// Alterations to above /////////////////////////////
////////////////////////////////////////////////////////

{
    notations: {
        description: "Minor seven flat nine",
        short: "m7b9",
        long: "min7b9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>7b9</sup>",
        shortHtml: "m<sup>7b9</sup>"
    },
    offsets: [0,3,7,10,13]
},

{
    notations: {
        description: "Minor eleven flat nine",
        short: "m11b9",
        long: "min11b9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>11b9</sup>",
        shortHtml: "m<sup>11b9</sup>"
    },
    offsets: [0,3,7,10,13,17]
},

{
    notations: {
        description: "Minor eleven flat nine flat thirteen",
        short: "m11b9b13",
        long: "min11b9b13",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>11b9b13</sup>",
        shortHtml: "m<sup>11b9b13</sup>"
    },
    offsets: [0,3,7,10,13,17,20]
},

{
    notations: {
        description: "Major nine sharp eleven",
        short: "M9#11",
        long: "maj9#11",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "maj<sup>9#11</sup>",
        shortHtml: "M<sup>9#11</sup>"
    },
    offsets: [0,4,7,11,14,18]
},
{
    notations: {
        description: "Major thirteen sharp eleven",
        short: "M13#11",
        long: "maj13#11",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "maj<sup>13#11</sup>",
        shortHtml: "M<sup>13#11</sup>"
    },
    offsets: [0,4,7,11,14,18,21]
},

{
    notations: {
        description: "Minor eleven flat thirteen",
        short: "m11b13",
        long: "min11b13",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>11b13</sup>",
        shortHtml: "m<sup>11b13</sup>"
    },
    offsets: [0,3,7,10,14,17,20]
},
{
    notations: {
        description: "Half-diminished seven flat nine",
        short: halfDimSymbol + "7b9",
        long: halfDimSymbol + "7b9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>" + halfDimSymbol + "7b9</sup>",
        shortHtml: "<sup>" + halfDimSymbol + "7b9</sup>"
    },
    offsets: [0,3,6,10,13]
},

{
    notations: {
        description: "Half-diminished eleven flat nine",
        short: halfDimSymbol + "b911",
        long: halfDimSymbol + "b911",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>" + halfDimSymbol + "b911</sup>",
        shortHtml: "<sup>" + halfDimSymbol + "b911</sup>"
    },
    offsets: [0,3,6,10,13,17]
},

{
    notations: {
        description: "Diminished add 4",
        short: halfDimSymbol + "o-add4",
        long: halfDimSymbol + "dim-add4",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "dim<sup>add4</sup>",
        shortHtml: "<sup>o-add4</sup>"
    },
    offsets: [0,3,6,17]
},
{
    notations: {
        description: "Half-diminished seven flat nine eleven flat thirteen",
        short: halfDimSymbol + "b911b13",
        long: halfDimSymbol + "b911b13",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>" + halfDimSymbol + "b911b13</sup>",
        shortHtml: "<sup>" + halfDimSymbol + "b911b13</sup>"
    },
    offsets: [0,3,6,10,13,17,20]
},

{
    notations: {
        description: "Diminished add flat six",
        short: "o-addb6",
        long: "dim-addb6",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "dim<sup>addb6</sup>",
        shortHtml: "<sup>o-addb6</sup>"
    },
    offsets: [0,3,6,20]
},
{
    notations: {
        description: "Diminished suspended fourth",
        short: "o-sus4",
        long: "dim-sus4",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "dim<sup>sus4</sup>",
        shortHtml: "<sup>o-sus4</sup>"
    },
    offsets: [0,5,6]
},

////////////////////////////////////////////////////
// Additions from left handed chord encyclopedia //
///////////////////////////////////////////////////
{
    notations: {
        description: "Major seventh sharp eleven",
        short: "M7#11",
        long: "maj7#11",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "maj<sup>7#11</sup>",
        shortHtml: "M<sup>7#11</sup>"
    },
    offsets: [0,4,7,11,18]
},
{
    notations: {
        description: "Major add 6/9",
        short: "M-add6/9",
        long: "maj-add6/9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "maj<sup>add6/9</sup>",
        shortHtml: "M<sup>add6/9</sup>"
    },
    offsets: [0,4,7,9,14]
},
{
    notations: {
        description: "Minor add 6/9",
        short: "m-add6/9",
        long: "min-add6/9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>add6/9</sup>",
        shortHtml: "m<sup>add6/9</sup>"
    },
    offsets: [0,3,7,9,14]
},
{
    notations: {
        description: "Minor add flat six flat nine",
        short: "m-addb6/b9",
        long: "min-addb6/b9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>addb6/b9</sup>",
        shortHtml: "m<sup>addb6/b9</sup>"
    },
    offsets: [0,3,7,8,13]
},
{
    notations: {
        description: "Minor add flat six nine",
        short: "m-addb6/9",
        long: "min-addb6/9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "min<sup>addb6/9</sup>",
        shortHtml: "m<sup>addb6/9</sup>"
    },
    offsets: [0,3,8,14]
},
{
    notations: {
        //Hendrix chord 
        //does not naturally exist on any scale degree
        description: "Domiant seventh sharp nine",
        short: "7#9",
        long: "7#9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>7#9</sup>",
        shortHtml: "<sup>7#9</sup>"
    },
    offsets: [0,4,7,10,15]
},

/////////////////////////////////////////////////////
//// Fifths, fifths with sus, and with additions  ///
///// from Left Handed Chord Encyclopedia //////////
////////////////////////////////////////////////////
{
    notations: {
        description: "Five",
        short: "5",
        long: "5",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>5</sup>",
        shortHtml: "<sup>5</sup>"
    },
    offsets: [0,7]
},

{
    notations: {
        description: "Five add 9",
        short: "5add9",
        long: "5-add9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>5-add9</sup>",
        shortHtml: "<sup>5add9</sup>"
    },
    offsets: [0,7,14]
},
{
    notations: {
        description: "Five add flat nine",
        short: "5addb9",
        long: "5-addb9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>5-addb9</sup>",
        shortHtml: "<sup>5addb9</sup>"
    },
    offsets: [0,7,13]
},
{
    notations: {
        description: "Five add six",
        short: "5add6",
        long: "5-add6",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>5-add6</sup>",
        shortHtml: "<sup>5add6</sup>"
    },
    offsets: [0,7,9]
},
{
    notations: {
        description: "Five add flat 6",
        short: "5addb6",
        long: "5-addb6",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>5-addb6</sup>",
        shortHtml: "<sup>5add6</sup>"
    },
    offsets: [0,7,8]
},
{
    notations: {
        description: "Five add six nine",
        short: "5add6/9",
        long: "5-add6/9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>5-add6/9</sup>",
        shortHtml: "<sup>5-add6/9</sup>"
    },
    offsets: [0,7,9,14]
},
{
    notations: {
        description: "Five add flat six, nine",
        short: "5addb6/9",
        long: "5-addb6/9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>5-addb6/9</sup>",
        shortHtml: "<sup>5addb6/9</sup>"
    },
    offsets: [0,7,8,14]
},
{
    notations: {
        description: "Five add flat six,flat nine",
        short: "5addb6/b9",
        long: "5-addb6/b9",
        shortHasSuperScript: true,
        longHasSuperScript: true,
        longHtml: "<sup>5-addb6/b9</sup>",
        shortHtml: "<sup>5addb6/b9</sup>"
    },
    offsets: [0,7,8,13]
},


];

//inputs 
//root : midi note (number between 21 and 108)
//sharpsOrFlats : string, either "#" or "b"- should chords
//use sharps or flats
//returns all chords formed on that root note  
function chordsByRoot(root, sharpsOrFlats){
    if(root > 108 || root < 21 ){
        throw new Error("chordsByRoot: root note invalid");
    }
    if(!(sharpsOrFlats == "b" || sharpsOrFlats == "#")){
        throw new Error("chordsByRoot: sharpsOrFlats argument must be # or b"); 
    }

    let chords = {};

    //{ rootLetter: ["C", "natural"] }
    if(chordConstants.MIDI_NOTES[root.toString()].natural){
        chords["rootLetter"] = 
        [ chordConstants.MIDI_NOTES[root.toString()].noteLetter, "natural"];
        chords["usingSharps"] = sharpsOrFlats == "#" ? true : false ;  
        chords["usingFlats"] = sharpsOrFlats == "b" ? true : false ;
    } else {
        if(sharpsOrFlats == "#"){
            chords["rootLetter"] = 
            [ chordConstants.MIDI_NOTES[root.toString()].sharpLetter, "#"];
            chords["usingSharps"] = true; 
            chords["usingFlats"] = false; 
        }
        else {
            chords["rootLetter"] = 
            [ chordConstants.MIDI_NOTES[root.toString()].flatLetter, "b"];
            chords["usingSharps"] = false; 
            chords["usingFlats"] = true;
        }
    }

    //{ rootLetter: ["C", "natural"] , rootMidi: 45, chords: []  }
    chords["rootMidi"] = root;
    
    chords["chords"] = []; 

    chordTypes.forEach( chordInfo => {
        let chordObject = {};
        chordObject["notations"] = chordInfo["notations"];
        
        let midiNotes = [];
        chordInfo.offsets.forEach( offset => {
            midiNotes.push(offset + root);
        });
        chordObject["midiNotes"] = midiNotes;
        let letterNotes = []; 
        midiNotes.forEach( midiNote=> {
            //console.log(midiNote); 
            //console.log(chordConstants.MIDI_NOTES[midiNote.toString()]); 
            if(midiNote >= 21 && midiNote <=108){
                if(chordConstants.MIDI_NOTES[midiNote.toString()].natural){
                    letterNotes.push(chordConstants.MIDI_NOTES[midiNote.toString()].noteLetter);
                }
                else {
                    if(sharpsOrFlats == "#"){
                        letterNotes.push(chordConstants.MIDI_NOTES[midiNote.toString()].sharpLetter + "#");
                    }
                    else {
                        letterNotes.push(chordConstants.MIDI_NOTES[midiNote.toString()].flatLetter + "b");
                    }
                }
            }
            
        });
        chordObject["letterNotes"] = letterNotes; 
        chords["chords"].push(chordObject); 
    });

    return chords;
}

module.exports = {chordsByRoot}; 