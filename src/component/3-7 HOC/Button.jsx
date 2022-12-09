import React, { useEffect, useState } from 'react'
import withLoading from './withLoading'

function Button() {
    return <button>Button</button>
}

export default withLoading(Button);
