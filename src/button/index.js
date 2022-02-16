import React from 'react'
import Button from '@mui/material/Button'

export default (props) => {
  const { item: { id, label, props: itemProps } } = props
  const { onClick } = itemProps

  return <div className={`flex justify-center my-2`}>
    <Button
      variant="text"
      disabled={props.disabled}
      readOnly={props.readOnly}
      onClick={onClick}>
      {label}
    </Button>
  </div>
}
