import React, {useState} from 'react';
import {families, notesAndMidi} from "./const";
import Family from "./components/Family";
import 'react-piano/dist/styles.css';
import 'react-piano/dist/styles.css';
import Buttons from "./components/Buttons";
import './App.css';
import Progression from "./components/Progression";

function App() {

    const [data] = useState(families);
    const [note, setNote] = useState('C');

    return (
        <div>

            <header>
                <Buttons className='centered-div' onNoteSelected={(note) => setNote(note)}></Buttons>
            </header>

            {/*<Progression note={note} families={data}/>*/}

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
