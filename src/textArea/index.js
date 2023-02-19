import React, { useCallback, useEffect, useState } from 'react'
import loadable from '@loadable/component'
const TextareaAutosize = loadable(() => import('@mui/material/TextareaAutosize'))

import { useDebouncedCallback } from 'use-debounce'

export default (props) => {
  const { value, error, disabled, onValueChanged, field,
    item: { layoutMode = 'form', params = {}, id } } = props
  const {
    maxRows = 1000,
    minRows = 3,
    placeholder,
    className = '',
    inputDelay = 1000 } = params

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

  const layoutModeProps = () => {
    switch (layoutMode) {
      default:
      case 'form': {
        return {

        }
      }
      case 'inline': {
        return {
          variant: "standard",
        }
      }
    }
  }

  const layoutModeClassName = () => {
    switch (layoutMode) {
      default:
      case 'form': {
        return `
          h-64
          rounded-md
          border-warmGray-200
          border
          px-4
          py-4
          pb-12
          text-base`
      }
      case 'inline': {
        return `
            border-none
            border
            px-0
            py-0
            pb-0
            `
      }
    }
  }

  return <TextareaAutosize
    sx={{
    }}
    aria-label="minimum height"
    disabled={props.disabled}
    maxRows={maxRows}
    minRows={minRows}
    fullWidth
    onChange={handleOnChange}
    value={innerValue}
    placeholder={placeholder}
    className={`textarea
    h-64
    rounded-md
    border-warmGray-200
    border
    w-full
    focus:ring-pink-600
    ${error ? 'bg-red-100 border-red-600' : 'border-warmGray-400'}
    ${className}
    ${layoutModeClassName()}`}
    {...layoutModeProps()}
  />
}
