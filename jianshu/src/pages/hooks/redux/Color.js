import React, { createContext, useReducer } from "react";

export const ColorContext = createContext();

export const UPDATE_COLOR = 'UPDATE_COLOR';

const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_COLOR: 
            return action.value;
        default:
            return state;
    }
}

export const Color = ({children}) => {
    const [color, dispatch] = useReducer(reducer, 'blue');

    return (
        <ColorContext.Provider value={{color, dispatch}}>
            {
                children
            }
        </ColorContext.Provider>
    );
}