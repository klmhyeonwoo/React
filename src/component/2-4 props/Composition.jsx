import React from 'react'

function Welcome(props) {
    return <h1>Hello, {props.name} </h1>
}

export const Composition = () => {
  return (
    <div>
        <Welcome name="Bill"/>
        <Welcome name="Steve Jobx"/>
        <Welcome name="Stark"/>
    </div>
  )
}

