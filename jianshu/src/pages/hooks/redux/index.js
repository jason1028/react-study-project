import React from "react";
import { Color } from './Color';
import ShowArea from "./ShowArea";
import Buttons from "./Buttons";

function Colors() {
    return (
        <Color>
            <ShowArea/>
            <Buttons/>
        </Color>
    );
}

export default Colors;