import React from 'react'
import { createPortal } from 'react-dom'
import ThankyouDialog from './ThankyouDialog'

export default function Example() {

    const Portal = (props) => {
        return createPortal(props.children, document.getElementById('portal'));
    }

    return (
        <div onClick={() => console.log(`div`)}>
            <Portal>
                <ThankyouDialog />
            </Portal>
            <div style={{ position: "absolute" }}>
                <button>HAHAHA!</button>
            </div>
        </div>
    )
}
