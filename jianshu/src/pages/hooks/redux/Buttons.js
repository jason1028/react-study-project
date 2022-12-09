import React, { useContext } from "react";
import { ColorContext, UPDATE_COLOR } from "./Color";

function Buttons() {
    const { dispatch } = useContext(ColorContext);

    function updateColor(colorValue) {
        const action = {
            type: UPDATE_COLOR,
            value: colorValue
        }
        dispatch(action);
    }

    return (
        <div style={{marginTop: "10px"}}>
            <button style={{marginRight: "10px"}} onClick={ () => { updateColor('red') }}>红色</button>
            <button onClick={ () => { updateColor('green') }}>绿色</button>
        </div>
    );
}

export default Buttons;