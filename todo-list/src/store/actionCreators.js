import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_TODO_LIST } from "./actionTypes";

import axios from "axios";

export const initListAction = (data) => ({
    type: INIT_TODO_LIST,
    value: data
});

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const addTodoItem = () => ({
    type: ADD_TODO_ITEM
});

export const deleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    value: index
});

export const getTodoList = () => {
    return (dispatch)=> {
        axios.get('/api/list.json').then((res) => {
            const data = res.data.data;
            const action = initListAction(data);
            dispatch(action);
        });
    }
}