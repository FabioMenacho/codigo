import React from 'react'

const options = [
    'one', 'two', 'three'
];
const defaultOption = options[0];

const Dropdown = () => {
    return (
          <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
    )
}

export default Dropdown
