import React, { useCallback, useEffect, useState, lazy, Suspense } from 'react'
const TextField = lazy(() => import('@mui/material/TextField'))
import { useDebouncedCallback } from 'use-debounce'

export default (props) => {
  const { value, error, disabled, onValueChanged, field, item: { subType, label, params = {}, id } } = props
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

  return <Suspense fallback={<div></div>}>
    <div className={`w-full ${className}`}>
      <TextField
        //label={label}
        variant="outlined"
        disabled={props.disabled}
        value={innerValue}
        placeholder={placeholder}
        className={` ${error ? 'bg-red-50' : ''}`}
        type={subType}
        onChange={handleOnChange}
        style={{
          width: "100%",
        }}
        {...params} />
    </div>
  </Suspense>
}
