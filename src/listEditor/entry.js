import React, { useState } from 'react'
import Formulaik from '@yelounak/formulaik'
import ButtonInFormulaic from '../button'
import * as Yup from 'yup'

export default (props) => {
  const {
    values,
    customOnValueChanged,
    errors,

    item: { id, label, props: itemProps }
  } = props

  const item = values[id]
  const [error, setError] = useState(null)

  const validationSchema = Yup.object().shape({
    className: Yup.string()
      .min(1, 'Must contain at least 8 characters')
      .max(100, 'Must contain at most 18 characters'),
    value: Yup.object()
  })

  const formItemsProvider = [
    ...((itemProps.canRemove && itemProps.showRemove) ? [
      {
        isMulti: true,
        className: 'flex ',
        items: [
          ...itemProps.formItems,
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
      }] : itemProps.formItems)
  ]


  const initialValues = {
    className: item ? item.className : null,
    value: item ? item.value : null,
  }

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
    initialValues={initialValues}
    validationSchema={validationSchema}
    formItemsProvider={formItemsProvider}
    onValuesChanged={onValuesChanged}
    error={error} />
}
