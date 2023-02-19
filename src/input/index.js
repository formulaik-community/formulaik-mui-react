import React, { useCallback, useEffect, useState, } from 'react'
import TextField from '@mui/material/TextField'
import { useDebouncedCallback } from 'use-debounce'

export default (props) => {
  const {
    value,
    error,
    disabled,
    onValueChanged,
    field,
    item: {
      subType,
      layoutMode = 'form',
      label,
      params = {},
      id } } = props

  const {
    placeholder,
    inputDelay = 1000,
    className = '',
    multiline = true,
    inputPropsStyle = {},
    inputLabelPropsStyle = {},
    variant = "outlined" } = params

  //const [innerValue, setInnerValue] = useState(value ? value : '')
  const [innerValue, setInnerValue] = useState(value ? value : '')
  const [isFocused, setIsFocused] = useState(false)

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


  const modeProps = () => {
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

  const onBlur = () => {
    console.log('onblur')
  }

  return <TextField
    //label={label}
    variant={variant}
    fullWidth
    disabled={props.disabled}
    inputProps={{ style: inputPropsStyle }}
    InputLabelProps={{ style: inputLabelPropsStyle }}
    value={innerValue}
    multiline={multiline}
    placeholder={placeholder}
    className={`${error ? 'bg-red-50' : ''}`}
    type={subType}
    onBlur={onBlur}
    // onFocus={() => setIsFocused(true)}
    onChange={handleOnChange}
    {...modeProps()}
    {...params}
  />
}
