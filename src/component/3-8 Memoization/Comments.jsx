import React, { useCallback } from 'react'
import CommentItem from './CommentItem'

export default function Comments({ commentList }) {
    // 함수를 메모이제이션할 때, useCallBack을 사용한다.
    // 특정한 함수를 메모이제이션할 때는 useCallBack을 사용한다.

    // const handleClick = () => {
    //     console.log("눌림");
    // };

    const handleClick = useCallback(() => {
        console.log("눌림!");
    }, []);

    return (
        commentList.map((comment) => {
            return (
                <CommentItem
                    key={comment.title}
                    title={comment.title}
                    content={comment.content}
                    likes={comment.likes}
                    onClick={handleClick}
                />
            )
        })
    )
}
