import React, { useState, useReducer } from "react";

// 创建reducer
// function countReducer(state, action) {
//     switch(action.type) {
//         case 'add':
//             return state + 1;
//         case 'sub': 
//             return state - 1;
//         default:
//             return state;
//     }
// }

function ReducerDemo() {
    const [user, dispatch] = useReducer((state, action)=> {
        const currentUser = {...state};
        switch(action.type) {
            case 'add':
                return currentUser
            case 'modifyAge': 
                currentUser.age += action.value;
                return currentUser;
            default:
                return currentUser;
        }
    }, {
        name: 'jason',
        age: 18,
        sex: 'boy'
    });

    const [count, setCount] = useState(0);

    function testFn() {
        console.log('点击开始');
        dispatch({ type: 'modifyAge', value: 1 })
    }

    return (
        <div>
            <p>You clicked { count } times</p>
            <button onClick={ testFn }>点我试试，试试就试试。</button>
            <br/>
            <ul>
                <li>name: { user.name }</li>
                <li>age: { user.age }</li>
                <li>sex: { user.sex }</li>
            </ul>
        </div>
    );
}

export default ReducerDemo;