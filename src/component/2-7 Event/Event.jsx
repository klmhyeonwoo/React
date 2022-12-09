import React from 'react'

export default function Event() {

    const handleButtonClick = () => {
        console.log("handleButtonClick");
    }

    const handleClickCapture = () => {
        console.log("handleClickCapture");
    }

    const handleClickCapture2 = () => {
        console.log("handleClickCapture2");
    }

    const handleClickBubble = () => {
        console.log("handleClickBubble");
    }

    const handleClickBubble2 = () => {
        console.log("handleClickBubble2");
    }
  return (
    // 캡쳐링 먼저 하고 눌린 버튼, 그리고 다시 올라감
    <div onClickCapture={handleClickCapture} onClick={handleClickBubble}>
        <div onClickCapture={handleClickCapture2} onClick={handleClickBubble2}>
            <button onClick={handleButtonClick}>hi, there!</button>
        </div>
    </div>
  )
}
