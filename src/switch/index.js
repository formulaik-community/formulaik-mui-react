import React from 'react'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default (props) => {
  const { customOnValueChanged, value, item: { label, id, props: itemProps } } = props
  return <FormGroup>
    <FormControlLabel control={<Switch
      disabled={props.disabled}
      color="default"
      checked={value}
      onChange={({ target: { checked } }) => {
        customOnValueChanged(checked)
      }} />}
      label={label}
      {...itemProps} />
  </FormGroup>
}
