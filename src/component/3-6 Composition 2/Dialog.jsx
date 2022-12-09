import { React, useState } from 'react'

export default function Dialog(props) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)}>click button!</button>
            {isOpen && <div
                style={{
                    position: "absolute",
                    zIndex: 99,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid black",
                    backgroundColor: "white",
                    padding: 20,
                }}>
                {typeof props.title === "string" ? <h1>{props.title}</h1> : null}
                {typeof props.description === "string" ? <h5>{props.description}</h5> : null}
                {typeof (props.button) === "string" ? <button style={{
                    borderRadius: 50,
                    border: "solid",
                }} onClick={() => setOpen(!isOpen)}>{props.button}</button> :
                    <div onClick={() => setOpen(!isOpen)}>
                        {props.button}
                    </div>}
                {/* props로 태그 객체를 받을 때는 이벤트를 적용하기 어려우니, 버블링을 이용하면된다. => div 태그로 감싸주며 div에 이벤트 적용 */}
            </div>}
            {isOpen && <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: "lightgray",
            }}>
            </div>}
        </>
    )
}
