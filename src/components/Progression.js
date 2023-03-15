import {generateProgression} from "../utils";
import {MidiNumbers, Piano} from "react-piano";
import {useEffect, useState} from "react";

function Progression({note, families}) {
    const firstNote = MidiNumbers.fromNote('c1');
    const lastNote = MidiNumbers.fromNote('b1');

    const [progression, setProgression] = useState({roots: [], sevenths: []});

    const progressionArr = [2, 5, 1]
    const scaleType = 'minor'


    useEffect(() => {

        setProgression(generateProgression(
            note,
            progressionArr,
            scaleType
        ))

    }, [note, setProgression])


    return (
        <div className='Progression'>

            <div>
                <h4>{note} {scaleType} {progressionArr}</h4>
                {progression.roots.join(',')} and it's sevenths are {progression.sevenths.join(',')}</div>
            <Piano
                noteRange={{first: firstNote, last: lastNote}}
                playNote={(midiNumber) => {
                    // Play a given note - see notes below
                }}
                stopNote={(midiNumber) => {
                    // Stop playing a given note - see notes below
                }}
                width={170}
                activeNotes={progression.roots.map((note) => MidiNumbers.fromNote(note + '1'))}
            ></Piano>


        </div>
    );
}

export default Progression;