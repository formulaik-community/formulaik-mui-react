import React, { useCallback, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useDebouncedCallback } from 'use-debounce'

const INPUT_DELAY = 1000

export default (props) => {
  const { value, customOnValueChanged, field, errors, item: { subType, label, props: itemProps = {}, id } } = props
  const { placeholder } = itemProps

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
    INPUT_DELAY
  )

  const handleOnChange = useCallback((event) => {
    event.persist()
    const newValue = event.target.value
    setInnerValue(newValue)
    debouncedHandleOnChange(event)
    console.log('textArea handleOnChange', value)
  }, [])

  return <TextField
    label={label}
    variant="outlined"
    value={innerValue}
    placeholder={placeholder}
    className={`${errors[id] ? 'bg-red-100' : ''}`}
    type={subType}
    onChange={handleOnChange}
    {...itemProps} />

}
