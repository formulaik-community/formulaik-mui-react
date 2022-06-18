//import React from 'react'
import loadable from '@loadable/component'

export default (props) => {
  const { type } = props
  return loadable(_ => import(`./${type}`), {
    cacheKey: _ => type,
  })
}
