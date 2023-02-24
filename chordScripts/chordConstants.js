const MIDI_NOTES = {
    21: {noteLetter: "A", octave: "0", natural: true }, 
    22: {sharpLetter: "A", flatLetter: "B", octave: "0", natural: false },
    23: {noteLetter: "B", octave: "0", natural: true }, 

    24: {noteLetter: "C", octave: "1", natural: true }, 
    25: {sharpLetter: "C", flatLetter: "D", octave: "1", natural: false }, 
    26: {noteLetter: "D", octave: "1", natural: true },
    27: {sharpLetter: "D", flatLetter: "E", octave: "1", natural: false }, 
    28: {noteLetter: "E", octave: "1", natural: true },
    29: {noteLetter: "F", octave: "1", natural: true }, 
    30: {sharpLetter: "F", flatLetter: "G", octave: "1", natural: false }, 
    31: {noteLetter: "G", octave: "1", natural: true }, 
    32: {sharpLetter: "G", flatLetter: "A", octave: "1", natural: false },
    33: {noteLetter: "A", octave: "1", natural: true }, 
    34: {sharpLetter: "A", flatLetter: "B", octave: "1", natural: false },
    35: {noteLetter: "B", octave: "1", natural: true },

    36: {noteLetter: "C", octave: "2", natural: true }, 
    37: {sharpLetter: "C", flatLetter: "D", octave: "2", natural: false }, 
    38: {noteLetter: "D", octave: "2", natural: true },
    39: {sharpLetter: "D", flatLetter: "E", octave: "2", natural: false }, 
    40: {noteLetter: "E", octave: "2", natural: true },
    41: {noteLetter: "F", octave: "2", natural: true }, 
    42: {sharpLetter: "F", flatLetter: "G", octave: "2", natural: false }, 
    43: {noteLetter: "G", octave: "2", natural: true }, 
    44: {sharpLetter: "G", flatLetter: "A", octave: "2", natural: false },
    45: {noteLetter: "A", octave: "2", natural: true }, 
    46: {sharpLetter: "A", flatLetter: "B", octave: "2", natural: false },
    47: {noteLetter: "B", octave: "2", natural: true },

    48: {noteLetter: "C", octave: "3", natural: true }, 
    49: {sharpLetter: "C", flatLetter: "D", octave: "3", natural: false }, 
    50: {noteLetter: "D", octave: "3", natural: true },
    51: {sharpLetter: "D", flatLetter: "E", octave: "3", natural: false }, 
    52: {noteLetter: "E", octave: "3", natural: true },
    53: {noteLetter: "F", octave: "3", natural: true }, 
    54: {sharpLetter: "F", flatLetter: "G", octave: "3", natural: false }, 
    55: {noteLetter: "G", octave: "3", natural: true }, 
    56: {sharpLetter: "G", flatLetter: "A", octave: "3", natural: false },
    57: {noteLetter: "A", octave: "3", natural: true }, 
    58: {sharpLetter: "A", flatLetter: "B", octave: "3", natural: false },
    59: {noteLetter: "B", octave: "3", natural: true },

    60: {noteLetter: "C", octave: "4", natural: true }, 
    61: {sharpLetter: "C", flatLetter: "D", octave: "4", natural: false }, 
    62: {noteLetter: "D", octave: "4", natural: true },
    63: {sharpLetter: "D", flatLetter: "E", octave: "4", natural: false }, 
    64: {noteLetter: "E", octave: "4", natural: true },
    65: {noteLetter: "F", octave: "4", natural: true }, 
    66: {sharpLetter: "F", flatLetter: "G", octave: "4", natural: false }, 
    67: {noteLetter: "G", octave: "4", natural: true }, 
    68: {sharpLetter: "G", flatLetter: "A", octave: "4", natural: false },
    69: {noteLetter: "A", octave: "4", natural: true }, 
    70: {sharpLetter: "A", flatLetter: "B", octave: "4", natural: false },
    71: {noteLetter: "B", octave: "4", natural: true },

    72: {noteLetter: "C", octave: "5", natural: true }, 
    73: {sharpLetter: "C", flatLetter: "D", octave: "5", natural: false }, 
    74: {noteLetter: "D", octave: "5", natural: true },
    75: {sharpLetter: "D", flatLetter: "E", octave: "5", natural: false }, 
    76: {noteLetter: "E", octave: "5", natural: true },
    77: {noteLetter: "F", octave: "5", natural: true }, 
    78: {sharpLetter: "F", flatLetter: "G", octave: "5", natural: false }, 
    79: {noteLetter: "G", octave: "5", natural: true }, 
    80: {sharpLetter: "G", flatLetter: "A", octave: "5", natural: false },
    81: {noteLetter: "A", octave: "5", natural: true }, 
    82: {sharpLetter: "A", flatLetter: "B", octave: "5", natural: false },
    83: {noteLetter: "B", octave: "5", natural: true },

    84: {noteLetter: "C", octave: "6", natural: true }, 
    85: {sharpLetter: "C", flatLetter: "D", octave: "6", natural: false }, 
    86: {noteLetter: "D", octave: "6", natural: true },
    87: {sharpLetter: "D", flatLetter: "E", octave: "6", natural: false }, 
    88: {noteLetter: "E", octave: "6", natural: true },
    89: {noteLetter: "F", octave: "6", natural: true }, 
    90: {sharpLetter: "F", flatLetter: "G", octave: "6", natural: false }, 
    91: {noteLetter: "G", octave: "6", natural: true }, 
    92: {sharpLetter: "G", flatLetter: "A", octave: "6", natural: false },
    93: {noteLetter: "A", octave: "6", natural: true }, 
    94: {sharpLetter: "A", flatLetter: "B", octave: "6", natural: false },
    95: {noteLetter: "B", octave: "6", natural: true },

    96: {noteLetter: "C", octave: "7", natural: true }, 
    97: {sharpLetter: "C", flatLetter: "D", octave: "7", natural: false }, 
    98: {noteLetter: "D", octave: "7", natural: true },
    99: {sharpLetter: "D", flatLetter: "E", octave: "7", natural: false }, 
    100: {noteLetter: "E", octave: "7", natural: true },
    101: {noteLetter: "F", octave: "7", natural: true }, 
    102: {sharpLetter: "F", flatLetter: "G", octave: "7", natural: false }, 
    103: {noteLetter: "G", octave: "7", natural: true }, 
    104: {sharpLetter: "G", flatLetter: "A", octave: "7", natural: false },
    105: {noteLetter: "A", octave: "7", natural: true }, 
    106: {sharpLetter: "A", flatLetter: "B", octave: "7", natural: false },
    107: {noteLetter: "B", octave: "7", natural: true },

    108: {noteLetter: "C", octave: "8", natural: true }
}; 


const VALID_NOTE_LETTER = [
    "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "a", "A", "b", "B"
]; 






module.exports = {MIDI_NOTES, VALID_NOTE_LETTER}; 