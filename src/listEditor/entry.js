import React, { useState } from 'react'
import Formulaik from '@yelounak/formulaik'
import ButtonInFormulaic from '../button'

export default (props) => {
  const {
    values,
    onValueChanged,
    errors,

    item: { id, label, params }
  } = props

  const item = values[id]
  const [error, setError] = useState(null)

  const inputs = [
    ...((params.canRemove && params.showRemove) ? [
      {
        isMulti: true,
        className: 'flex ',
        items: [
          ...params.inputs({ item }),
          {
            type: 'button',
            id: 'removeItem',
            label: 'Remove',
            className: 'ml-2 ',
            params: {
              onClick: () => {
                onValueChanged && onValueChanged({ isRemoved: true })
              }
            }
          }
        ]
      }] : params.inputs({ item }))
  ]


  const onValuesChanged = (values) => {
    const data = params.onEntryValuesChangedHook({ values, data: item })
    onValueChanged && onValueChanged(data)
  }

  const componentsLibrary = ({ type }) => {
    switch (type) {
      case 'button':
        return ButtonInFormulaic
      default:
        return null
    }
  }

  return <Formulaik
    componentsLibraries={[...params.componentsLibraries, componentsLibrary]}
    initialValues={params.initialValues({ item })}
    validationSchema={params.validationSchema({ item })}
    inputs={inputs}
    onValuesChanged={onValuesChanged}
    error={error} />
}
