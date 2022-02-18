import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default (props) => {
  const { onValueChanged, initialValues, values, field, errors, item: { label, id, params } } = props


  return <div className="px-4 py-2 card rounded-lg border-2 border-warmGray-400 ">
    <FormControlLabel control={
      <Checkbox
        color="default"
        disabled={props.disabled}
        readOnly={props.readOnly}
        {...params}
        checked={(() => {
          const _value = values[id] // ? values[id] : initialValues[id]
          return _value
        })()}
        onChange={({ target: { checked } }) => {
          onValueChanged(checked)
        }}
      />} label={label} />
    {(params && params.subLabel) ? <small className="">{params.subLabel}</small> : null}
  </div>
}
