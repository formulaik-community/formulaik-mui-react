import React from 'react'
import loadable from '@loadable/component'

export default (props) => {
  const { type } = props
  if (!keys.includes(type)) {
    return null
  }
  try {
    const Component = loadable(_ => import(`./${type}`), {
      cacheKey: _ => type,
    })
    return Component
  } catch (e) {
    console.error("Could not load component", e)
  }
  return null
}

const keys = [
  'input',
  'submit',
  'checkbox',
  'select',
  'textArea',
  'selectCountry',
  'inputPhoneNumber',
  'datePicker',
  'aceEditor',
  'cronGenerator',
  'jsonEditor',
  'cronEditor',
  'autocomplete',
  'radioGroup',
  'html',
  'divider',
  'button',
  'buttonGroup',
  'switch',
  'rating',
  'dateRangePicker',
  'h1',
  'h2',
  'h3',
  'h4',
  'visualSelect',
  'avatar',
  'fileUpload',
  //'inputCurrency',
  'numericStepper',
  'submitInline',
  '_containerVertical',
  '_containerHorizontal',
  '_buttonAdd'
]
