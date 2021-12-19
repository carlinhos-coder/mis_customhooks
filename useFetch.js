
import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    const ismounted = useRef(true)
    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            ismounted.current = false;
        }
    }, [])

    useEffect(() => {
        setstate({ data: null, loading: true, error: null })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setTimeout(() => {

                    if (ismounted.current) {
                        setstate({
                            loading: false,
                            error: null,
                            data
                        })
                    } else {
                        console.log('se dispara')
                    }

                }, 4000)

            });
    }, [url])
    return state
}
