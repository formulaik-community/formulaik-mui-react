import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

export default (props) => {
  const { item: { id, label, params } } = props
  const { onClick } = params

  const { options, } = params
  return <ButtonGroup
    disabled={props.disabled}
    readOnly={props.readOnly}
    className={` ${errors[id] ? 'bg-red-100 select-error' : ''}`}
    value={values[id] ? values[id] : initialValues[id]}
    variant="contained" aria-label="outlined primary button group"
    onChange={({ target: { value } }) => onValueChanged(value)}>
    {options.map((option) =>
      <Button>{option.value}</Button>
    )}

  </ButtonGroup>
}
