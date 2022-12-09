import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function FunctionalComponent() {
    const [data, setData] = useState(new Date());

    const tick = () => {
        setData(new Date());
    }
    

    useEffect(() => {
        const interval = setInterval(() => tick());
        return () => {
            clearInterval(interval);
        }
    }, [])
  return (
    <h2>It is Functional Component, {data.toLocaleTimeString()}</h2>
  )
}
