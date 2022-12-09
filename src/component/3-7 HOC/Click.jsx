import React from 'react'
import Button from './Button'
import withAlert from './withAlert'

function Click() {
    return <button>Click me!</button>
}

export default withAlert(Click);
