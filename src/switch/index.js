import React from 'react'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default (props) => {
  const { onValueChanged,
    value,
    disabled,
    readOnly,
    item: {
      label,
      id,
      params
    } } = props
  return <FormGroup>
    <FormControlLabel control={<Switch
      disabled={disabled}
      readOnly={readOnly}
      color="default"
      checked={value}
      onChange={({ target: { checked } }) => {
        onValueChanged(checked)
      }} />}
      {...params} />
  </FormGroup>
}
