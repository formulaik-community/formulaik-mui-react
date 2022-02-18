import React from 'react'
import Rating from '@mui/material/Rating'

export default (props) => {
  const { value, onValueChanged,
    item: { id, label, props: itemProps } } = props

  return <Rating
    disabled={props.disabled}
    readOnly={props.readOnly}
    name="simple-controlled"
    value={value}
    size="large"
    onChange={(event, newValue) => {
      onValueChanged(newValue)
    }}
    {...itemProps}
  />
}
