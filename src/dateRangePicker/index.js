import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
import { AdapterMoment as dateAdapter } from '@mui/x-date-pickers/AdapterMoment'

export default (props) => {
  const { onValueChanged, value, item: { params } } = props
  return <div className='grid md:grid-flow-col'>
    <LocalizationProvider dateAdapter={dateAdapter}>
      <DatePicker
        disabled={props.disabled}
        readOnly={props.readOnly}
        label={'From'}
        value={(value && value.length) ? value[0] : null}
        onChange={(_v) => {
          onValueChanged([_v._d, (value && value.length) ? value[0] : null])
        }}
        {...params}
        renderInput={(_params) => <TextField {..._params} />}
      />
    </LocalizationProvider>
    <p className='flex items-center justify-center md:px-2'>
      →
    </p>
    <LocalizationProvider dateAdapter={dateAdapter}>
      <DatePicker
        disabled={props.disabled}
        readOnly={props.readOnly}
        label={'To'}
        value={(value && value.length > 0) ? value[1] : null}
        onChange={(_v) => {
          onValueChanged([(value && value.length > 0) ? value[0] : null, _v._d,])
        }}
        {...params}
        renderInput={(_params) => <TextField {..._params} />}
      />
    </LocalizationProvider>
  </div>
}
