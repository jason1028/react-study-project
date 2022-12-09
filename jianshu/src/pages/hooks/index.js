import React, { Component } from "react";
import { HooksWrapper } from "./style";

import ReducerDemo from "./ReducerDemo";
import UseContext from "./UseContext";
import Colors from "./redux/index";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";
import UseCustom from "./UseCustom";
import UseState from "./UseState";


// class组件不能使用hooks
function Hooks() {
    // const { width, height } = UseCustom();
    return (
        <HooksWrapper>
            {/* <h1>Size: width: { width } *  height: { height }</h1> */}
            <UseState/>
        </HooksWrapper>
    );
}

export default Hooks;