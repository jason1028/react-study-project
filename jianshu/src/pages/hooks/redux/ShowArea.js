import React, { useContext } from "react";
import { ColorContext } from './Color';

function ShowArea() {
    // 使用上下文
    const { color } = useContext(ColorContext);

    return (
        <div style={{padding: "20px"}}>
            <h1 style={{color}}>字体颜色为{ color }</h1>
        </div>
    );
}

export default ShowArea;