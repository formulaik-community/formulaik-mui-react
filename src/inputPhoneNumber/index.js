import React from 'react'
import PhoneInput from 'react-phone-number-input'
//import 'react-phone-number-input/style.css'

export default (props) => {
  const { onValueChanged, value, error, item: { props: itemProps } } = props
  return <div className="border-2 border-warmGray-300 rounded-md px-4 py-4">
    <PhoneInput
      disabled={props.disabled}
      readOnly={props.readOnly}
      placeholder="Enter phone number"
      value={value}
      onChange={onValueChanged}
      {...itemProps}
      //inputComponent={(args) => <CustomInput {...props} />}
      className={`w-full focus:ring-primary  ${error ? 'bg-red-100 select-error' : ''}`}
    />
  </div>
}
