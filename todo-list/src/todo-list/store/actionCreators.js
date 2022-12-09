import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_TODO_LIST } from "./actionTypes"

export const initList = (data) => {
    return {
        type: INIT_TODO_LIST,
        list: data
    }
}

export const addTodoItem = () => {
    return {
        type: ADD_TODO_ITEM
    }
}

export const deleteTodoItem = (index) => {
    return {
        type: DELETE_TODO_ITEM,
        index
    }
}

export const changeInputValue = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
}