import React from 'react';
import {colors} from "../const";
import Scale from "./Scale";

function Mode({mode, index}) {

    const styleBold = {
        backgroundColor: '#39FF14',
    };

    const styleRegular = {
        backgroundColor: 'white',
    }

    return (
        <span>
            {mode.map((interval, intervalIndex) => {
                    let doBold = false;
                    if (intervalIndex < index + 7 && intervalIndex >=index) {
                        doBold = true
                    }

                    return (<span key={intervalIndex} style={doBold ? styleBold : styleRegular}>{interval} </span>)
                }
            )}
        </span>)
}

export default Mode;