import React, {useState, useEffect} from 'react';
import Mode from "./Mode";
import {MidiNumbers, Piano} from "react-piano";
import PianoLine from "./pianoLine";

const scaleStyle = {
    padding: '5px',
    marginBottom: '20px',
    display: 'block',
}

const pianoStyle = {
    marginTop: '10px',
    display: 'block',
    pointerEvents: 'none'
}

function Scale({sysNamesAndChords, scaleFormula, index, note}) {

    scaleFormula = scaleFormula.concat(scaleFormula);

    const firstNote = MidiNumbers.fromNote('c1');
    const lastNote = MidiNumbers.fromNote('b3');



    const [activeNotes, setActiveNotes] = useState([24]);
    useEffect(() => {
        let activeNotes = scaleFormula.reduce((acc, curr) => {
            if (curr === "H") {
                acc = [...acc, acc[acc.length - 1] + 1]
            } else if (curr === "W") {
                acc = [...acc, acc[acc.length - 1] + 2]
            } else if (curr === "WH") {
                acc = [...acc, acc[acc.length - 1] + 3]
            }
            return acc
        }, [MidiNumbers.fromNote(note+'1')])

        function trimNotes(activeNotes, index) {
            let first = activeNotes.slice(index)
            return first.slice(0, 8);

        }
        setActiveNotes(trimNotes(activeNotes,index))

    }, [setActiveNotes, note, index]);


    return (
        <div key={sysNamesAndChords} style={scaleStyle}>

            <div>
                <span>{note} {sysNamesAndChords.sysName}</span>
                <span> - </span>
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
                    width={450}

                    activeNotes={activeNotes}

                />
                <PianoLine></PianoLine>
            </div>
        </div>
    );
}

export default Scale;