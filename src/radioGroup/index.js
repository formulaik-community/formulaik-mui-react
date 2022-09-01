import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default (props) => {
  const { value, error, onValueChanged, field, item: { subType, id, label, params } } = props
  return <RadioGroup
    disabled={props.disabled}
    readOnly={props.readOnly}
    aria-label="gender"
    defaultValue="female"
    name="radio-buttons-group"
    value={value}
    {...field}
    className={`${error ? 'bg-red-100' : ''}`}
    {...params}
    onChange={({ target: { value } }) => onValueChanged(value)}>
    {params.options.map(({ value, label }) => {
      return <FormControlLabel value={value} control={<Radio />} //label={label}
      />
    })}
  </RadioGroup>
}
