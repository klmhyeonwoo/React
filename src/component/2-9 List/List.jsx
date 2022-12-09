import React from 'react'
import { useState, useEffect } from 'react';

const todos = [
    {id: 1, value: "wash dishes"},
    {id: 2, value: "take a shower"},
];

export default function List() {
    const [todo, setTodo] = useState(todos);

    const handleButtonDelete = (element) => {
        console.log(element);
        console.log(todo);
        setTodo((todo) => todo.filter((item) => item !== element))
    };

  return (
    <ul>
        {todo.map((data) => {
            return (
                <div key={data.id} className="btn" style={{display:"flex"}}>
                    <li>{data.value}</li>
                    <button onClick={()=>handleButtonDelete(data)}>{data.id}번 삭제</button>
                </div>
            )
        })}
    </ul>
  )
}
