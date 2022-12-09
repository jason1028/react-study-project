import { useEffect, useState } from "react";

export default function UseState() {
    const [count, setCount] = useState(-1);

    useEffect(()=> {
        setCount(0);
    });

    console.log('渲染哈哈..', count);

    const clickHandler = () => {
        setCount(count + 1);
    }
    
    return (
        <>
            <h1>当前点击的次数为：{count}</h1>
            <button onClick={ clickHandler }>点我+1</button>
        </>
    );
}