import React, { useState } from 'react'
import Formulaik from '@yelounak/formulaik'
import ButtonInFormulaic from '../button'

import * as Yup from 'yup'

import entry from './entry'
import _ from 'underscore'

export default (props) => {
  const {
    values,
    onValueChanged,
    errors,

    item: { id, label, props: itemProps }
  } = props

  const items = values[id] ? values[id] : []

  const [error, setError] = useState(null)


  const validationSchema = Yup.object().shape({
    ..._.object(
      items.map((_item, i) => `entry-${i}`),
      items.map(() => Yup.object()))
  })

  const inputs = [
    ...(items.map((item, i) => ({
      type: 'entry',
      id: `entry-${i}`,
      props: itemProps
    }))),
    ...((itemProps.canAddItems && items.length < itemProps.maxItems) ? [
      {
        type: 'button',
        id: 'addItem',
        label: itemProps.addItemLabel ? itemProps.addItemLabel : 'Add item',
        props: {
          onClick: () => {
            const newItem = itemProps.newStruct
            items.push(newItem)
            onValueChanged && onValueChanged(items)
          }
        }
      },
    ] : [])
  ]

  const initialValues = () => {
    const list = {}
    items.forEach((item, i) => {
      list[`entry-${i}`] = item
    })
    return list
  }

  const onValuesChanged = (__values) => {
    if (_.isEmpty(__values)) {
      return
    }
    const _i = []
    Object.keys(__values).forEach(e => {
      if (__values[e].isRemoved) {
        return
      }
      _i.push(__values[e])
    })
    onValueChanged && onValueChanged(_i)
    //forceUpdate()
  }

  const componentsLibrary = ({ type }) => {
    switch (type) {
      case 'entry':
        return entry
      case 'button':
        return ButtonInFormulaic
      default:
        return null
    }
  }

  return <div className="mt-6">
    <Formulaik
      componentsLibraries={[...itemProps.componentsLibraries, componentsLibrary]}
      initialValues={initialValues}
      validationSchema={validationSchema}
      inputs={inputs}
      onValuesChanged={onValuesChanged}
      error={error} />
  </div>

}
