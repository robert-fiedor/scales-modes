import React, {useState} from 'react';
import {scaleNotes} from "../const";
function Buttons({isActive}) {
    const [selectedNote, setSelectedNote] = useState('');

    const handleClick = (noteName) => {
        setSelectedNote(noteName);
    };

    const scaleButtons = scaleNotes.map((note) => (
        <button key={note} onClick={() => handleClick(note)}>
            {note}
        </button>
    ));

    return (
        <div>
            <div>{scaleButtons}</div>
            <p>Selected note: {selectedNote}</p>
        </div>
    );
}

export default Buttons;