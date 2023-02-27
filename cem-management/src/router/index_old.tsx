import App from '@/App';
import Home from '@/views/Home';
import About from '@/views/About';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App/> }>
                {/* 默认重定向到 /home */}
                <Route path="/" element={ <Navigate to="/home"/> }></Route>
                <Route path="/home" element={ <Home/> }/>
                <Route path="/about" element={ <About/> }/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter;