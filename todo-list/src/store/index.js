import { applyMiddleware, createStore, compose } from "redux";
// 管理员的笔记本
import reducer from "./reducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__() : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

// 创建公共存储仓库
const store = createStore(
    reducer,
    enhancer
)

export default store;