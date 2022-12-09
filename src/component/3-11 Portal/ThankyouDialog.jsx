import React from 'react'
import Dialog from './Dialog'

export default function ThankyouDialog() {
    return (
        <Dialog title="Thanks" description="It is honor to meet you!" button={<button>Close here!</button>} />
    )
}
