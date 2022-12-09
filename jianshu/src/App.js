import React from "react";
import { Provider } from "react-redux";
import Header from "./common/header/index";
import store from "./store/index.js";
// 路由
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 组件引入
import Home from "./pages/home";
import Detail from "./pages/detail";
import HooksDemo from "./pages/hooks";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {/* <Header/> */}
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/detail" element={<Detail/>}></Route>
                    <Route path="/hooks" element={<HooksDemo/>}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;