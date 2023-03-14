import React, {useState} from 'react';
import {colors, families} from "../const";
import Scale from "./Scale";

const styleFamily = {
    padding: '0px',
    marginRight: '15px',
};

const styleSysNames = {
    width: '100%',
    backgroundColor: colors.white,
    fontSize: '18px',
    display: 'inline-block',
    padding: '20px',
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