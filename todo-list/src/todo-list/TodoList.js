import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import { addTodoItem, deleteTodoItem, changeInputValue } from './store/actionCreators';

// 无状态组件（纯函数）
const TodoList = (props) => {
    const { inputValue, list, changeInputValue, handleDelete, handleClick } = props;
    return (
        <Fragment>
            <div>
                <input value={inputValue} onChange={changeInputValue}></input>
                <button onClick={handleClick}>提 交</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index} onClick={() => handleDelete(index)}>{item}</li>;
                        })
                    }
                </ul>
            </div>
        </Fragment>
    );
}

// 将store映射至props
const mapStateToProps = (state) => {
    const { inputValue, list } = state;
    return {
        inputValue,
        list
    }
}

// 改变store的方法集合
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = changeInputValue(e.target.value);
            dispatch(action);
        },
        handleClick() {
            const action = addTodoItem();
            dispatch(action);
        },
        handleDelete(index) {
            const action = deleteTodoItem(index);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);