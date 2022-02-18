import React from 'react'
import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/en'

export default (props) => {
  const {
    value,
    onValueChanged,
    error,
    item: { id, props: itemProps }
  } = props

  return <JSONInput
    id='a_unique_id'
    disabled={props.disabled}
    readOnly={props.readOnly}
    placeholder={value}
    onChange={(val) => {
      const { json } = val
      onValueChanged(json)
    }}
    locale={locale}
    // colors={darktheme}
    height='550px'
    className={` ${error ? 'bg-red-100 border-red-600' : ''}`}
    {...itemProps}
  />


}
