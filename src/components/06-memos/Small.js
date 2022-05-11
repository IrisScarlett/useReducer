import React, { memo } from 'react'

export const Small = memo(({value}) => {
    console.log('aqui estoy')
  return (
    <small>{value}</small>
  )
})
