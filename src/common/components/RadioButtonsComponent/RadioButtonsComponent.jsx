import React from 'react';
import PropTypes from 'prop-types';

function RadioButtonsComponent({
  values,
  selectedValue,
  name,
  onRadioButtonsChange,
  customClass,
}) {
  const radioButtons = values.map((rb, index) => {
    return (
      <>
        <li>
          <label htmlFor={`rb-${index}`}>{rb.option}</label>
          <input
            id={`rb-${index}`}
            defaultChecked={rb.value === selectedValue}
            key={index}
            type="radio"
            value={rb.value}
            name={name}
          />
        </li>
      </>
    );
  });

  const handleRadioButtonsChange = (event) => {
    onRadioButtonsChange(event.target.value);
  };
  return (
    <div className={customClass} onChange={handleRadioButtonsChange}>
      <ul>{radioButtons}</ul>
    </div>
  );
}

RadioButtonsComponent.propTypes = {
  values: PropTypes.array,
  selectedValue: PropTypes.string,
  name: PropTypes.string,
  onRadioButtonsChange: PropTypes.func,
  customClass: PropTypes.string,
};

RadioButtonsComponent.defaultProps = {
  values: [],
  selectedValue: '',
  name: '',
  onRadioButtonsChange: () => {},
  customClass: '',
};

export default RadioButtonsComponent;
