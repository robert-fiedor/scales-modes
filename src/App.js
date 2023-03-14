import React, {useState} from 'react';
import {families, notesAndMidi} from "./const";
import Family from "./components/Family";
import 'react-piano/dist/styles.css';
import 'react-piano/dist/styles.css';
import './customPianoStyles.css';
import Buttons from "./components/Buttons";

function App() {

    function combineArrays(array1, array2) {
        const combinedArray = [];
        const maxLength = Math.max(array1.length, array2.length);
        for (let i = 0; i < maxLength; i++) {
            combinedArray.push({sysName: array1[i], chord: array2[i]});
        }
        return combinedArray;
    }

    let familiesConverted = families.map((item) => {
        return {
            name: item.name,
            scaleFormula: item.scaleFormula,
            sysNamesAndChords: combineArrays(item.sysNames, item.chords)
        }
    })

    const [data] = useState(familiesConverted);
    const [note, setNote] = useState('C');

    return (
        <div>
            <Buttons onNoteSelected={(note) => setNote(note)}
            ></Buttons>

            {data.map((item) => (
                <Family note={note} key={item.name} family={item}/>
            ))}
        </div>
    );
}

export default App;
