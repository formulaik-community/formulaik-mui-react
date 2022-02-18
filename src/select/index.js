import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export default (props) => {
  const { value, onValueChanged, error, item: { label, id, props: itemProps } } = props

  const { options, } = itemProps
  return <Select
    disabled={props.disabled}
    readOnly={props.readOnly}
    labelId={id}
    id={id}
    className={` ${error ? 'bg-red-100 select-error' : ''}`}
    value={value}
    label={label}
    onChange={({ target: { value } }) => onValueChanged(value)}>
    {options.map((option) =>
      <MenuItem value={option.value}>{option.label}</MenuItem>
    )}
  </Select>

}
