import {scaleNotes} from "../const";

function Buttons({onNoteSelected}) {
    const scaleButtons = scaleNotes.map((note) => (
        <button key={note} onClick={() => onNoteSelected(note)}>
            {note}
        </button>
    ));

    return (
        <div className='buttons'>{scaleButtons}</div>
    );
}

export default Buttons;