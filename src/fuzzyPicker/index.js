import React from 'react'
import FuzzyPicker from 'react-fuzzy-picker'
import "react-fuzzy-picker/styles/index.css"

export default (props) => {
    const { setFieldTouched, setFieldValue, field, errors, item: { label, id, params } } = props

    return <FuzzyPicker
        isOpen={true}
        autoCloseOnEnter={true}
        onClose={() => console.log('You closed the fuzzy-picker')}
        onChange={(value) => {
            setFieldValue(id, value)
            setFieldTouched(id, true, false)
        }}
        items={["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]}
        {...params}
    />
}
