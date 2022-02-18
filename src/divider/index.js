import React from 'react'

export default (props) => {
  const { item: { label, id, params } } = props
  return <div className={`divider ${params.vertical ? 'divider-vertical' : ''} `}>{params.content}</div>
}
