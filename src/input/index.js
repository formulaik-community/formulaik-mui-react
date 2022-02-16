import React, { useCallback, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useDebouncedCallback } from 'use-debounce'

export default (props) => {
  const { value, error, customOnValueChanged, item: { subType, label, props: itemProps = {}, id } } = props
  const { placeholder, inputDelay = 1000, className = '' } = itemProps

  const [innerValue, setInnerValue] = useState(value ? value : '')

  useEffect(() => {
    setInnerValue(value ? value : '')
  }, [value])

  const debouncedHandleOnChange = useDebouncedCallback(
    (event) => {
      const value = event.target.value
      customOnValueChanged(value)
      console.log('textArea debouncedHandleOnChange', value)
    },
    inputDelay
  )

  const handleOnChange = useCallback((event) => {
    event.persist()
    const newValue = event.target.value
    setInnerValue(newValue)
    debouncedHandleOnChange(event)
    console.log('textArea handleOnChange', value)
  }, [])

  return <div className={`w-full ${className}`}><TextField
    label={label}
    variant="outlined"
    disabled={props.disabled}
    readOnly={props.readOnly}
    value={innerValue}
    placeholder={placeholder}
    className={`w-full ${error ? 'bg-red-100' : ''}`}
    type={subType}
    onChange={handleOnChange}
    {...itemProps} />
  </div>
}
