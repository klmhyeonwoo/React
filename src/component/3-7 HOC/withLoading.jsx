import React, { useEffect, useState } from 'react'

export default function withLoading(Component) {

    // 함수를 만들어줘서 해당 Component의 props를 받아온다.
    const WithLoadingComponent = (props) => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 3000);

            return () => clearTimeout(timer)
        }, [])

        return loading ? <p>Loading...</p> : <Component {...props} />

    };

    return WithLoadingComponent;
}
