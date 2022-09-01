import React, { lazy, Suspense } from 'react'
const Select = lazy(() => import('@mui/material/Select'))
const MenuItem = lazy(() => import('@mui/material/MenuItem'))
const FormControl = lazy(() => import('@mui/material/FormControl'))

export default (props) => {
  const { value, onValueChanged, error, item: { label, id, params } } = props

  const { options, } = params
  return <Suspense fallback={<div></div>}><FormControl className={'w-full'}><Select
    disabled={props.disabled}
    readOnly={props.readOnly}
    id={id}
    className={` ${error ? 'bg-pink-50 select-error' : ''}`}
    value={value}
    ////label={label}
    {...params}
    onChange={({ target: { value } }) => onValueChanged(value)}>
    {options.map((option) =>
      <MenuItem value={option.value}>{option.label}</MenuItem>
    )}
  </Select>
  </FormControl>
  </Suspense>
}
