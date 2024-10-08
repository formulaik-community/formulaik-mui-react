import React, { useCallback, useEffect, useState, } from 'react'
import TextField from '@mui/material/TextField'
import { useDebouncedCallback } from 'use-debounce'
import Visibility from '@mui/icons-material/VisibilityOutlined'
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'


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

    inputPropsStyle = {},
    inputLabelPropsStyle = {},
    variant = "outlined" } = params

  const [innerValue, setInnerValue] = useState(value ? value : '')

  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }



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
      },
      // startAdornment: <InputAdornment position="start">kg</InputAdornment>,
      endAdornment:
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
    }}
    InputLabelProps={{ style: inputLabelPropsStyle }}
    value={innerValue}
    multiline={false}
    className={`
      transition-all
      ease-in-out
      duration-1000
      ${error ? 'bg-red-50' : ''}
      ${className}
      ${layoutModeClassName()}
    `}
    onBlur={onBlur}
    onChange={handleOnChange}
    {...layoutModeProps()}
    {...params}
    type={showPassword ? 'text' : 'password'}

  />
}
