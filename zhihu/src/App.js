import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 组件
import Home from './pages/home'

export default function App(params) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }>
                    <Route path="/" element={ <div>Defalut</div> }></Route>
                    <Route path="flow" element={ <div>Flow</div> }></Route>
                    <Route path="hot" element={ <div>hot</div> }></Route>
                    <Route path="zvideo" element={ <div>zvideo</div> }></Route>
                </Route>
                <Route path="/xen" element={ <div>XEN</div> }></Route>
                <Route path="/explore" element={ <div>Explore</div> }></Route>
                <Route path="/question" element={ <div>Question</div> }></Route>
            </Routes>
        </BrowserRouter>
    )
};
