import React from 'react'
import dateAdapter from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@mui/material/TextField'

export default (props) => {
  const { onValueChanged, value, item: { label, props: itemProps } } = props
  return <LocalizationProvider dateAdapter={dateAdapter}>
    <DatePicker
      disabled={props.disabled}
      readOnly={props.readOnly}
      label={label}
      value={value}
      onChange={onValueChanged}
      {...itemProps}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
}
