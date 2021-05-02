import React from 'react';
import DropDown from '../dropdown/DropDown';

import "./dropdownBar.css"
const DropdownBar = () => {
    return (
        <div className="dropdownBar">
            <DropDown title="Dog" item={[{text:'food'},{text:'bed'}]}/>
            <DropDown title="Cat"/>
            <DropDown title="Birds"/>
            <DropDown title="Reptile"/>
            <DropDown title="Fish"/>
            
        </div>
    );
};

export default DropdownBar;