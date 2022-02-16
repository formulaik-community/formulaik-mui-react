import React from 'react'
import dateAdapter from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@mui/material/TextField'


export default (props) => {
  const { customOnValueChanged, values, errors, item: { label, id, props: itemProps } } = props
  return <LocalizationProvider dateAdapter={dateAdapter}>
    <DatePicker
      disabled={props.disabled}
      label={label}
      value={values[id]}
      onChange={customOnValueChanged}
      {...itemProps}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
}
