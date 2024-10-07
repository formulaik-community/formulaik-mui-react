import { useCallback, useEffect, useState, } from 'react'
import TextField from '@mui/material/TextField'
import { useDebouncedCallback } from 'use-debounce'

export default (props) => {
  const {
    value,
    error,
    disabled,
    onValueChanged,
    item: {
      // subType = 'password',
      layoutMode = 'form',
      label,
      params = {},
      id }
  } = props

  const {
    placeholder,
    inputDelay = 1000,
    className = '',
    multiline = false,
    inputPropsStyle = {},
    inputLabelPropsStyle = {},
    variant = "outlined" } = params

  const [innerValue, setInnerValue] = useState(value ? value : '')

  useEffect(() => {
    setInnerValue(value ? value : '')
  }, [value])

  const debouncedHandleOnChange = useDebouncedCallback(
    (event) => {
      const value = event.target.value
      onValueChanged(value)
      //+console.log('textArea debouncedHandleOnChange', value)
    },
    inputDelay
  )

  const handleOnChange = useCallback((event) => {
    event.persist()
    const newValue = event.target.value
    setInnerValue(newValue)
    debouncedHandleOnChange(event)
    //+console.log('textArea handleOnChange', value)
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
          `
      }
      case 'inline': {
        return `
            `
      }
    }
  }

  const onBlur = () => {
    //+console.log('onblur')
  }

  return <TextField
    variant={variant}
    fullWidth
    disabled={props.disabled}
    InputProps={{
      style: {
        ...inputPropsStyle,
      }
    }}
    InputLabelProps={{ style: inputLabelPropsStyle }}
    value={innerValue}
    multiline={multiline}
    className={`transition-all
      ease-in-out
      duration-1000
      ${error ? 'bg-red-50' : ''}
    ${className}
    ${layoutModeClassName()}`}
    onBlur={onBlur}
    onChange={handleOnChange}
    {...layoutModeProps()}
    {...params}
  />
}
