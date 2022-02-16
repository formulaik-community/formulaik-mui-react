import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default (props) => {
  const { value, error, customOnValueChanged, field, item: { subType, id, label, props: itemProps } } = props
  return <RadioGroup
    disabled={props.disabled}
    readOnly={props.readOnly}
    aria-label="gender"
    defaultValue="female"
    name="radio-buttons-group"
    value={value}
    {...field}
    className={`${error ? 'bg-red-100' : ''}`}
    {...itemProps}
    onChange={({ target: { value } }) => customOnValueChanged(value)}>
    {itemProps.options.map(({ value, label }) => {
      return <FormControlLabel value={value} control={<Radio />} label={label} />
    })}
  </RadioGroup>
}
