import React, { useCallback, useEffect, useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { useDebouncedCallback } from 'use-debounce'

export default (props) => {
  const { value, error, onValueChanged, item: { props: itemProps = {} } } = props
  const { maxRows = 1000, minRows = 3, placeholder, inputDelay = 1000 } = itemProps

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

  return <TextareaAutosize
    sx={{
      // bgcolor: 'background.paper',
      // boxShadow: 1,
      //borderRadius: 1,
      // paddingTop: 0,
      // paddingBottom: 0
    }}
    aria-label="minimum height"
    disabled={props.disabled}
    readOnly={props.readOnly}
    minRows={maxRows}
    minRows={minRows}
    onChange={handleOnChange}
    value={innerValue}
    placeholder={placeholder}
    className={`textarea h-64 py-4 pb-8 rounded-md border-warmGray-100 text-base w-full ${error ? 'bg-red-100 border-red-600' : 'border-warmGray-400'}`}
  />
}
