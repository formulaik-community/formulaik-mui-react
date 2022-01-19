import React, { useState } from 'react'
import Formulaik from '@yelounak/formulaik'
import ButtonInFormulaic from '../button'

export default (props) => {
  const {
    values,
    customOnValueChanged,
    errors,

    item: { id, label, props: itemProps }
  } = props

  const item = values[id]
  const [error, setError] = useState(null)

  const formItemsProvider = [
    ...((itemProps.canRemove && itemProps.showRemove) ? [
      {
        isMulti: true,
        className: 'flex ',
        items: [
          ...itemProps.formItemsProvider({ item }),
          {
            type: 'button',
            id: 'removeItem',
            label: 'Remove',
            className: 'ml-2 ',
            props: {
              onClick: () => {
                customOnValueChanged && customOnValueChanged({ isRemoved: true })
              }
            }
          }
        ]
      }] : itemProps.formItemsProvider({ item }))
  ]


  const onValuesChanged = (values) => {
    const data = itemProps.onEntryValuesChangedHook({ values, data: item })
    customOnValueChanged && customOnValueChanged(data)
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
    formItemsProvider={formItemsProvider}
    onValuesChanged={onValuesChanged}
    error={error} />
}
