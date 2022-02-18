import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default (props) => {
  const { onValueChanged, initialValues, values, field, errors, item: { label, id, props: itemProps } } = props


  return <div className="px-4 py-2 card rounded-lg border-2 border-warmGray-400 ">
    <FormControlLabel control={
      <Checkbox
        color="default"
        disabled={props.disabled}
        readOnly={props.readOnly}
        {...itemProps}
        checked={(() => {
          const _value = values[id] // ? values[id] : initialValues[id]
          return _value
        })()}
        onChange={({ target: { checked } }) => {
          onValueChanged(checked)
        }}
      />} label={label} />
    {(itemProps && itemProps.subLabel) ? <small className="">{itemProps.subLabel}</small> : null}
  </div>
}
