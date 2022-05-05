import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

export default (props) => {
  const { value, onValueChanged, error, item: { label, id, params } } = props

  const { options, } = params
  return <FormControl className={'w-full'}>
    <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
    <Select
      disabled={props.disabled}
      readOnly={props.readOnly}
      labelId="demo-simple-select-autowidth-label"
      id={id}
      className={` ${error ? 'bg-red-100 select-error' : ''}`}
      value={value}
      label={label}
      {...params}
      onChange={({ target: { value } }) => onValueChanged(value)}>
      {options.map((option) =>
        <MenuItem value={option.value}>{option.label}</MenuItem>
      )}
    </Select>
  </FormControl>
}
