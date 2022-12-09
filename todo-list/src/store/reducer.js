import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from "./actionTypes";

const defaultState = {
    inputValue: '',
    list: []
};

// reducer 就像一个笔记本, 它能接受state，但绝对不能直接改变state
export default (state = defaultState, action) => {
    // 当行动为改变内容的时候，执行处理；
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1);
        return newState;
    }

    if(action.type === INIT_TODO_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }
    return state;
}