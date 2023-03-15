import {chords, scaleNotes} from "./const";

const getMinorChordProgression = (key, degrees) => {
    const keyIndex = scaleNotes.findIndex((note) => note === key);
    const minorScaleIntervals = [0, 2, 3, 5, 7, 8, 10];

    return degrees.map((degree) => {
        const scaleIndex = (keyIndex + minorScaleIntervals[degree - 1]) % 12;
        return scaleNotes[scaleIndex];
    });
};

const getMajorChordProgression = (key, degrees) => {
    const keyIndex = scaleNotes.findIndex((note) => note === key);
    const majorScaleIntervals = [0, 2, 4, 5, 7, 9, 11];

    return degrees.map((degree) => {
        const scaleIndex = (keyIndex + majorScaleIntervals[degree - 1]) % 12;
        return scaleNotes[scaleIndex];
    });
};

let generateProgression = (root, degrees, scaleType) => {
    let result = {}

    if (scaleType === 'minor') {
        result.roots = getMinorChordProgression(root, degrees);
        result.sevenths = getMinorChordProgression(root, degrees)
        result.sevenths[0] += chords.m7b5.name
        result.sevenths[1] += chords.Dominant.name
        result.sevenths[2] += chords.m7.name

    } else if (scaleType === 'major') {
        result.roots = getMajorChordProgression(root, degrees);
        result.sevenths = getMajorChordProgression(root, degrees)
        result.sevenths[0] += chords.m7.name
        result.sevenths[1] += chords.Dominant.name
        result.sevenths[2] += chords.Maj7.name
    }

    return result;
}

let fromActualChordToTypeOfChord = (chord) => chord.indexOf('#' !== -1) ? chord.split('#')[1] : chord.slice(1)


export {generateProgression}

