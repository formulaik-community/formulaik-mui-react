import React from 'react'
import ReactFlagsSelect from 'react-flags-select'

export default (props) => {
  const { onValueChanged, value, error, item: { label, id, props: itemProps } } = props

  return <ReactFlagsSelect
    disabled={props.disabled}
    readOnly={props.readOnly}
    selected={value}
    onSelect={onValueChanged}
    {...itemProps}
    className={`  w-full focus:ring-primary  ${error ? 'bg-red-100 select-error' : ''}`}
  />
}
