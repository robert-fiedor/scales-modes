import {generateProgression} from "../utils";

function Progression() {

    let u = generateProgression('C#', [2, 5, 1],
        'minor')

    return (
        <div className='Progression'>Progression</div>
    );
}

export default Progression;