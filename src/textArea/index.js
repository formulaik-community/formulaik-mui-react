import React, { useCallback, useEffect, useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { useDebouncedCallback } from 'use-debounce'

const INPUT_DELAY = 1000

export default (props) => {
  const { value, customOnValueChanged, field, errors, item: { props: itemProps = {}, id } } = props
  const { maxRows = 1000, minRows = 3, placeholder } = itemProps

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

  return <div className='my-2'><TextareaAutosize
    aria-label="minimum height"
    minRows={maxRows}
    minRows={minRows}
    onChange={handleOnChange}
    value={innerValue}
    placeholder={placeholder}
    className={`textarea h-64 rounded-md border-warmGray-100 text-base w-full ${errors[id] ? 'bg-red-100 border-red-600' : 'border-warmGray-400'}`}
  /></div>
}
