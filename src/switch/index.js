import React from 'react'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default (props) => {
  const { onValueChanged, value, item: { label, id, props: itemProps } } = props
  return <FormGroup>
    <FormControlLabel control={<Switch
      disabled={props.disabled}
      readOnly={props.readOnly}
      color="default"
      checked={value}
      onChange={({ target: { checked } }) => {
        onValueChanged(checked)
      }} />}
      label={label}
      {...itemProps} />
  </FormGroup>
}
