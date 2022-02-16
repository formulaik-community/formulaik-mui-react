import React from 'react'
import ReactFlagsSelect from 'react-flags-select'

export default (props) => {
  const { customOnValueChanged, value, error, item: { label, id, props: itemProps } } = props

  return <ReactFlagsSelect
    disabled={props.disabled}
    selected={value}
    onSelect={customOnValueChanged}
    {...itemProps}
    className={`  w-full focus:ring-primary  ${error ? 'bg-red-100 select-error' : ''}`}
  />
}
