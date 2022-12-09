import { createStore, compose, applyMiddleware } from "redux";
/****
 *  引入redux-thunk，使action拥有异步的能力
 *  期初，action是一个包含type和value的对象，然后通过reducer执行
 *  所以redux-thunk可以往dispatch中传入一个函数，在函数中可以执行ajax后，将值传入value
 *  原理：传入的函数只是个中间执行层，说白了就是扩展了dispatch只能传入对象的能力，其实就是redux-thunk覆写了dispatch函数
 * ** */

import thunk from 'redux-thunk'
import reducer from "./reducer.js";

// 加入调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 存储, 加入这样代码，在控制台即可看到redux状态数据的变化了
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;