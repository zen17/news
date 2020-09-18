import React from "react";

function RadioButtonsComponent(props) {
    const radioButtons = props.values?.map((rb, index) => {
        return (
            <div>
                <label>{rb.option}</label>
                <input checked={rb.value === props.selectedValue}
                       key={index}
                       type="radio"
                       value={rb.value}
                       name={props.name}/>
            </div>
        )
    })

    const handleRadioButtonsChange = (event) => {
        props.onRadioButtonsChange(event.target.value);
    }
    return (
        <div onChange={handleRadioButtonsChange}>
            {radioButtons}
        </div>
    )
}

export default RadioButtonsComponent;
