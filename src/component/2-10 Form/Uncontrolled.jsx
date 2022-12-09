import React from 'react'
import { useRef } from 'react';

export default function Uncontrolled() {

    const inputRef = useRef(null);
    const fileRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${inputRef.current.value}, ${fileRef.current.files[0].name}`);

    }

    return (
    <form onSubmit={handleSubmit}>
    <label>
        Name:
        <input type="text" ref={inputRef} />
    </label>
    <label>
        File:
        <input type="file" ref={fileRef}/>
    </label>
    <input type="submit" value="Submit" />
    </form>
    )
}
