import React, { useRef, useState, useEffect } from "react";

export default function UseRef() {
    
    const inputTag01 = useRef(null);
    const textRef = useRef();

    const [text, setText] = useState('哈哈哈');

    function clickHandler() {
        console.log('当前元素:', inputTag01);
        inputTag01.current.value = "Hello jason!";
        inputTag01.current.style.color = "blue";
    }

    function changeHandler(e) {
        var currentElement = e.target;
        setText(currentElement.value);
    }

    useEffect(()=> {
        textRef.current = text;
        console.log('textRef.current:', textRef.current);
    });
    
    return (
        <>
            <input ref={ inputTag01 } type="text"/>
            <button onClick={ clickHandler }>在input上展示文字</button>
            <br/><br/>
            <input type="text" value={text} onChange={changeHandler}/>
        </>
    );
}