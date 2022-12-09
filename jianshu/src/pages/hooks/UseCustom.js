import React, { useState, useEffect, useCallback } from "react";

export default function useWindowSize() {
    const [ size, setSize ] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        });
    }, []);

    // 更新
    useEffect(()=> {
        window.addEventListener('resize', onResize);

        // 销毁的时候执行
        return ()=> {
            window.removeEventListener('resize', onResize);
        }
    });

    return size;
}