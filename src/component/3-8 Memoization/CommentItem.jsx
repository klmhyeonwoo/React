import React, { Profiler, memo, useState, useMemo } from 'react';
import './CommentItem.css';

function CommentItem({ title, content, likes, onClick }) {

    const [clickCount, setClickCount] = useState(0);

    function onRenderCallback(
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
    ) {
        // Aggregate or log render timings...
        console.log(`actualDuration ${title} : ${actualDuration}`);
    }

    const handleClick = () => {
        onClick();
        setClickCount((prev) => prev + 1)
        alert(`${title} 눌림`);
    }

    // 다른 이벤트에 의해 상태가 변경되어 자기 자신이 다시 호출 되는 것을 막을 때, useMemo를 사용한다.
    // clickCount는 바뀌었는데, rate는 바뀌지 않았다. 다른 이벤트에 의해 애꿏은 얘가 변경된다면 useMemo
    // 어떤 계산을 통해 나오는 특정한 값을 메모이제이션하는 것을 useMemo를 사용
    const rate = useMemo(() => {
        console.log(`${title} rate check`)
        return likes > 10 ? 'Good' : 'Bad';
    }, [likes]);

    return (
        <Profiler id="CommentItem" onRender={onRenderCallback}>
            <div className="CommentItem" onClick={handleClick}>
                <span>{title} </span>
                <span>{content} </span>
                <span>{likes} </span>
                <span>{rate}</span>
                <span>{clickCount}</span>
            </div>
        </Profiler>
    )
}
export default memo(CommentItem);

// export default CommentItem;

// 내용이 변하지 않는 얘들은 그대로 냅두고, 메모지에이션 효과를 준다.
// 반면 memo를 사용하지 않으면, 컴포넌트를 하나 추가할 때마다 남은 요소의 컴포넌트도 같이 새롭게 추가되어 재설정 되는 것을 볼 수 있다. (비효율)