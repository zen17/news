import React, {Fragment} from "react";

function RadioButtonsComponent(props) {
    const radioButtons = props.values?.map((rb, index) => {
        return (
            <Fragment>
                <li>
                    <label for={`rb-${index}`}>{rb.option}</label>
                    <input id={`rb-${index}`} checked={rb.value === props.selectedValue}
                           key={index}
                           type="radio"
                           value={rb.value}
                           name={props.name}/>

                </li>
            </Fragment>
        )
    })

    const handleRadioButtonsChange = (event) => {
        props.onRadioButtonsChange(event.target.value);
    }
    return (
        <div className={props.className} onChange={handleRadioButtonsChange}>
            <ul>{radioButtons}</ul>
        </div>
    )
}

export default RadioButtonsComponent;
