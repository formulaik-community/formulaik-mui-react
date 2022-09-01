import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'

export default (props) => {
  const {
    initialValues,
    onValueChanged,
    field,
    values,
    item: { label, id, params } } = props

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    updateOptions({ value: '' })
  }, [])

  const updateOptions = async ({ value }) => {
    setIsLoading(true)
    const { fetcher } = params
    const items = await fetcher({ value }) // For demo purposes.
    setOptions(items)
    setIsLoading(false)
  }

  return <Autocomplete
    id="asynchronous-demo"
    open={open}
    disabled={props.disabled}
    readOnly={props.readOnly}
    sx={{
      // bgcolor: 'background.paper',
      // boxShadow: 1,
      // borderRadius: 1,
      // paddingTop: 0,
      // paddingBottom: 0
    }}
    fullWidth
    onOpen={() => {
      setOpen(true)
    }}
    onClose={() => {
      setOpen(false)
    }}
    {...params}
    options={options}
    loading={isLoading}
    onChange={(event, newValue) => {
      const value = newValue ? newValue : null
      onValueChanged(value)
    }}
    defaultValue={(values && values[id]) ? values[id] : initialValues[id]}
    renderInput={(params) =>
      <TextField
        {...params}
        {...field}
        //label={label}
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
    }
  />
}
