import React, { useState } from 'react'
import Formulaik from '@yelounak/formulaik'
import ButtonInFormulaic from '../button'

export default (props) => {
  const {
    values,
    onValueChanged,
    errors,

    item: { id, label, props: itemProps }
  } = props

  const item = values[id]
  const [error, setError] = useState(null)

  const inputs = [
    ...((itemProps.canRemove && itemProps.showRemove) ? [
      {
        isMulti: true,
        className: 'flex ',
        items: [
          ...itemProps.inputs({ item }),
          {
            type: 'button',
            id: 'removeItem',
            label: 'Remove',
            className: 'ml-2 ',
            props: {
              onClick: () => {
                onValueChanged && onValueChanged({ isRemoved: true })
              }
            }
          }
        ]
      }] : itemProps.inputs({ item }))
  ]


  const onValuesChanged = (values) => {
    const data = itemProps.onEntryValuesChangedHook({ values, data: item })
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
    componentsLibraries={[...itemProps.componentsLibraries, componentsLibrary]}
    initialValues={itemProps.initialValues({ item })}
    validationSchema={itemProps.validationSchema({ item })}
    inputs={inputs}
    onValuesChanged={onValuesChanged}
    error={error} />
}
