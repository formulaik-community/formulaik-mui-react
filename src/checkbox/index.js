import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default (props) => {
  const { onValueChanged, value, item: { label, id, params } } = props


  return <div className="">
    <FormControlLabel control={
      <Checkbox
        color="default"
        disabled={props.disabled}
        readOnly={props.readOnly}
        {...params}
        checked={value}
        onChange={({ target: { checked } }) => {
          onValueChanged(checked)
        }}
      />}
      label={params.label ? params.label : label} />
    {(params && params.subLabel) && <small className="">{params.subLabel}</small>}
  </div>
}
