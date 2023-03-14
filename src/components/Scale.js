import React from 'react';
import {colors} from "../const";
import Mode from "./Mode";
import {MidiNumbers, Piano} from "react-piano";

const scaleStyle = {
    backgroundColor: 'white',
    padding: '5px',
    display: 'block',

}

const pianoStyle = {
    marginTop: '10px',
    display: 'block',

    marginBottom: '20px',
    pointerEvents: 'none'
}

function Scale({sysNamesAndChords, scaleFormula, index}) {

    scaleFormula = scaleFormula.concat(scaleFormula);

    const firstNote = MidiNumbers.fromNote('c1');
    const lastNote = MidiNumbers.fromNote('b2');

    let activeNotes = scaleFormula.reduce((acc, curr) => {

        if (curr === "H") {
            acc = [...acc, acc[acc.length - 1] + 1]
        } else if (curr === "W") {
            acc = [...acc, acc[acc.length - 1] + 2]
        } else if (curr === "OC") {
            acc = [...acc, acc[acc.length - 1] + 3]
        }

        return acc

    }, [24])

    function doMe(activeNotes, index) {
        let first = activeNotes.slice(index)

        return first.slice(0, 7);

    }

    console.log('rob: ', activeNotes)

    return (
        <div key={sysNamesAndChords} style={scaleStyle}>

            <div>
                <span>{sysNamesAndChords.sysName}</span>
                <span>_______________</span>
                <span>{sysNamesAndChords.chord.name}</span>
            </div>

            <div><Mode mode={scaleFormula} index={index}></Mode></div>

            <div style={pianoStyle}>
                <Piano
                    noteRange={{first: firstNote, last: lastNote}}
                    playNote={(midiNumber) => {
                        // Play a given note - see notes below
                    }}
                    stopNote={(midiNumber) => {
                        // Stop playing a given note - see notes below
                    }}
                    width={280}

                    activeNotes={doMe(activeNotes, index)}

                />
            </div>
        </div>
    );
}

export default Scale;