import React, {useState} from 'react';
import {colors, families} from "../const";
import Scale from "./Scale";

const styleFamily = {
    backgroundColor: 'white',
    padding: '5px',
    display: 'inline-block',
    width: '30%'
};

const styleSysNames = {
    width: '100%',
    backgroundColor: colors.white,
    fontSize: '18px',
    display: 'inline-block',
};

const nameStyle = {
    backgroundColor: 'lightGray',
    padding: '10px'
}

function Family({family, note}) {

    return (
        <div key={family.name} style={styleFamily}>

            <div style={nameStyle}>
                {family.name}
            </div>

            <div style={styleSysNames}>

                *{note}*

                {family.sysNamesAndChords.map((sysNamesAndChords, index) => (
                    <Scale key={index}
                           index={index}
                           note={note}
                           sysNamesAndChords={sysNamesAndChords}
                           scaleFormula={family.scaleFormula}>
                    </Scale>
                ))}
            </div>
        </div>
    );
}

export default Family;