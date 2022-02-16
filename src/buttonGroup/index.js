import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

export default (props) => {
  const { item: { id, label, props: itemProps } } = props
  const { onClick } = itemProps

  const { options, } = itemProps
  return <ButtonGroup
    disabled={props.disabled}
    className={` ${errors[id] ? 'bg-red-100 select-error' : ''}`}
    value={values[id] ? values[id] : initialValues[id]}
    variant="contained" aria-label="outlined primary button group"
    onChange={({ target: { value } }) => customOnValueChanged(value)}>
    {options.map((option) =>
      <Button>{option.value}</Button>
    )}

  </ButtonGroup>
}
