let W = 'W'
let H = 'H'
let WH = 'WH'

const scaleNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

let chords = {
    Maj7: {name: 'Maj7'},
    m7: {name: 'm7'},
    Dominant: {name: '7'},
    m7b5: {name: 'm7b5'},
    minMaj7: {name: 'minMaj7'},
    Maj7H5: {name: 'Maj7#5'},
    dim7: {name: 'dim7'},
    unknown : {name : 'xxx'}
}

let family1 = {
    name: 'MAJOR MODES',
    sysNames: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
    chords: [
        chords.Maj7, chords.m7, chords.m7, chords.Maj7, chords.Dominant, chords.m7, chords.m7b5],
    scaleFormula: [W, W, H, W, W, W, H]
}

let family2 = {
    name: 'NATURAL MINOR MODES',
    sysNames: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
    chords: [chords.unknown, chords.unknown, chords.unknown, chords.unknown, chords.unknown, chords.unknown, chords.unknown],
    scaleFormula: [W, H, W, W, H, W, W]
}

let family3 = {
    name: 'HARMONIC MINOR MODES',
    sysNames: ['Ionian #5', 'Dorian #4', 'Phrygian #3', 'Lydian #2', 'Mixolydian #1', 'Aeolian #7', 'Locrian #6'],
    chords: [chords.Maj7H5, chords.m7, chords.Dominant, chords.Maj7, chords.dim7, chords.minMaj7, chords.m7b5],
    scaleFormula: [W, H, W, W, H, WH, H]
}

let family4 = {
    name: 'MELODIC MINOR MODES',
    sysNames: ['Ionian #1', 'Dorian #7', 'Phrygian #6', 'Lydian #5', 'Mixolydian #4', 'Aeolian #3', 'Locrian #2'],
    chords: [chords.m7b5, chords.minMaj7, chords.m7, chords.Maj7H5, chords.Dominant, chords.Dominant, chords.m7b5],
    scaleFormula: [W, H, W, W, W, W, H]
}


//TODO check last chord
let family5 = {
    name: 'HARMONIC MAJOR MODES',
    sysNames: ['Ionian b6', 'Dorian b5', 'Phrygian b4', 'Lydian b3', 'Mixolydian b2', 'Aeolian b1', 'Locrian b7'],
    chords: [chords.Maj7, chords.m7b5, chords.m7, chords.minMaj7, chords.Dominant, chords.Maj7H5, chords.dim7],
    scaleFormula: [W, W, H, W, H, WH, H]
}

let families = [family1, family2, family3, family4].map((item) => {

    function combineArrays(array1, array2) {
        const combinedArray = [];
        const maxLength = Math.max(array1.length, array2.length);
        for (let i = 0; i < maxLength; i++) {
            combinedArray.push({sysName: array1[i], chord: array2[i]});
        }
        return combinedArray;
    }

    return {
        name: item.name,
        scaleFormula: item.scaleFormula,
        sysNamesAndChords: combineArrays(item.sysNames, item.chords)
    }
})


const notesAndMidi = [
    {key: 'C1', note: 24, velocity: 127},
    {key: 'C#1', note: 25, velocity: 127},
    {key: 'D1', note: 26, velocity: 127},
    {key: 'D#1', note: 27, velocity: 127},
    {key: 'E1', note: 28, velocity: 127},
    {key: 'F1', note: 29, velocity: 127},
    {key: 'F#1', note: 30, velocity: 127},
    {key: 'G1', note: 31, velocity: 127},
    {key: 'G#1', note: 32, velocity: 127},
    {key: 'A1', note: 33, velocity: 127},
    {key: 'A#1', note: 34, velocity: 127},
    {key: 'B1', note: 35, velocity: 127},
    {key: 'C2', note: 36, velocity: 127},
    {key: 'C#2', note: 37, velocity: 127},
    {key: 'D2', note: 38, velocity: 127},
    {key: 'D#2', note: 39, velocity: 127},
    {key: 'E2', note: 40, velocity: 127},
    {key: 'F2', note: 41, velocity: 127},
    {key: 'F#2', note: 42, velocity: 127},
    {key: 'G2', note: 43, velocity: 127},
    {key: 'G#2', note: 44, velocity: 127},
    {key: 'A2', note: 45, velocity: 127},
    {key: 'A#2', note: 46, velocity: 127},
    {key: 'B2', note: 47, velocity: 127},
];



export {chords, families, notesAndMidi, scaleNotes}