//https://unicef.github.io/material-ui-currency-textfield/
import React, { useCallback, useEffect, useState } from 'react'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import { useDebouncedCallback } from 'use-debounce'

export default (props) => {
  const { value, error, onValueChanged, item: { subType, label, params = {}, id } } = props
  const { placeholder, inputDelay = 1000, className = '' } = params

  const [innerValue, setInnerValue] = useState(value ? value : '')

  useEffect(() => {
    setInnerValue(value ? value : '')
  }, [value])

  const debouncedHandleOnChange = useDebouncedCallback(
    (event) => {
      const value = event.target.value
      onValueChanged(value)
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

  return <div className={`w-full ${className}`}>
    <CurrencyTextField
      //label={label}
      variant="outlined"
      disabled={props.disabled}
      readOnly={props.readOnly ? props.readOnly : false}
      value={innerValue}
      placeholder={placeholder}
      currencySymbol="$"
      outputFormat="number"
      className={`w-full ${error ? 'bg-red-100' : ''}`}
      type={subType}
      onChange={handleOnChange}
      {...params} />
  </div>
}
