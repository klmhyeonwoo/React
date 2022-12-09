import React from 'react'

function UserGreeting(props) {
    return <h1>{props.name && `Welcome, ${props.name}`} {Boolean(props.count) && `It's ${props.count} times.`}</h1>
}

function GuestGreeting(props) {
    return <h1> Please Sign Up.</h1>
}

function Greeting(props) {
    // if (props.isLoggedIn) {
    //     return <UserGreeting name="jimmy" count={0}/>
    // }
    // return <GuestGreeting/>

    // 이걸 삼항 연산자로 변경을 해보면,
    return props.isLoggedIn ? <UserGreeting name="jimmy" count={0}/> : <GuestGreeting/>
}

export default function Condition() {
    const isLoggedIn = true;
  return (
    <div>
        <Greeting isLoggedIn={isLoggedIn} />
    </div>
  )
}
