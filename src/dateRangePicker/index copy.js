import React from 'react'
import dateAdapter from '@mui/lab/AdapterDateFns'
import TextField from '@mui/material/TextField'
import DateRangePicker from '@mui/lab/DateRangePicker'

import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'


export default (props) => {
  const { onValueChanged, values, errors, item: { label, id, params } } = props
  return <LocalizationProvider dateAdapter={dateAdapter}>
    <DateRangePicker
      disabled={props.disabled}
      readOnly={props.readOnly}
      // startText={params.startLabel}
      // endText={params.endLabel}
      value={(values[id] && Array.isArray(values[id])) ? values[id] : [null, null]}
      onChange={onValueChanged}
      renderInput={(startProps, endProps) => (
        <React.Fragment>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </React.Fragment>
      )}
      {...params}
    />
  </LocalizationProvider>
}
