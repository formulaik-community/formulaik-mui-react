import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'

export default (props) => {
  const {
    initialValues,
    customOnValueChanged,
    field,
    values,
    errors,
    item: { label, id, props: itemProps } } = props

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //     let active = true

  //     if (!loading) {
  //         return undefined
  //     }

  //     (async () => {
  //         const { fetcher } = itemProps
  //         const items = await fetcher() // For demo purposes.

  //         if (active) {
  //             setOptions(items)
  //         }
  //     })()

  //     return () => {
  //         active = false
  //     }
  // }, [loading])

  // useEffect(() => {
  //     if (!open) {
  //         setOptions([])
  //     }
  // }, [open])

  useEffect(() => {
    var value = ''
    if (initialValues[id]) {
      //return
    }
    updateOptions({ value: '' })
  }, [])

  const updateOptions = async ({ value }) => {
    setIsLoading(true)
    const { fetcher } = itemProps
    const items = await fetcher({ value }) // For demo purposes.
    setOptions(items)
    setIsLoading(false)
  }

  return <Autocomplete
    id="asynchronous-demo"

    open={open}
    onOpen={() => {
      setOpen(true)
    }}
    onClose={() => {
      setOpen(false)
    }}
    {...itemProps}
    options={options}
    loading={isLoading}
    onChange={(event, newValue) => {
      const value = newValue ? newValue : null
      customOnValueChanged(value)
    }}
    defaultValue={(values && values[id]) ? values[id] : initialValues[id]}
    renderInput={(params) => (
      <TextField
        {...params}
        {...field}
        label={label}

        onChange={async ({ target: { value } }) => {
          updateOptions({ value })
        }}
        InputProps={{
          ...params.InputProps,
          endAdornment: (
            <React.Fragment>
              {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
              {params.InputProps.endAdornment}
            </React.Fragment>
          ),
        }}
      />
    )}
  />
}

