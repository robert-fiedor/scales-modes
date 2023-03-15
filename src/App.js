import React, {useState} from 'react';
import {families, notesAndMidi} from "./const";
import Family from "./components/Family";
import 'react-piano/dist/styles.css';
import 'react-piano/dist/styles.css';
import Buttons from "./components/Buttons";
import './App.css';
import Progression from "./components/Progression";

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

            <header>
                <Buttons className='centered-div' onNoteSelected={(note) => setNote(note)}></Buttons>
            </header>

            <Progression />

            <div className="app">
                <div className='wrapper'>
                    {data.map((item) => (
                        <Family className='box' note={note} key={item.name} family={item}/>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default App;
