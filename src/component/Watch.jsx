import React from 'react'
import { useParams } from 'react-router-dom'

function Watch() {
    const name = useParams().name
  return (
    <h2>Watch {name}</h2>
  )
}

export default Watch