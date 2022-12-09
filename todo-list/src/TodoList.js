import './todolist.css';

import React, { Component, Fragment } from "react";
import { Input, Button, List, Typography } from 'antd';
// 获取store
import store from './store';
import { getTodoList, addTodoItem, deleteTodoItem, getInputChangeAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    // 渲染周期函数
    render() {
        const {inputValue, list} = this.state;

        return (
            <TodoListUI 
                inputValue={inputValue}
                list={list}
                handleButtonClick={this.handleButtonClick}
                handleInputChange={this.handleInputChange}
                handleItemDelete={this.handleItemDelete}
            />
        );
    }

    componentDidMount() {
        const action = getTodoList();
        console.log('action', action);
        store.dispatch(action);
    }

    /**
     * 函数区
     **/
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        // 触发action
        store.dispatch(action);
    }

    // 
    handleButtonClick() {
        const action = addTodoItem();
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(() => (store.getState()));
    }

    handleItemDelete(index) {
        const action = deleteTodoItem(index);
        store.dispatch(action);
    }
}

export default TodoList;