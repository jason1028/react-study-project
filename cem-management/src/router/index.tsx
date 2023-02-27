import { Navigate } from 'react-router-dom';
import Home from '@/views/Home';
import React, { lazy } from 'react';
// import Abount from '@/views/About';
// import User from '@/views/User';

// 路由懒加载
const Abount =  lazy(() => import('@/views/About'));
const User =  lazy(() => import('@/views/User'));

const withLoadingComponent = (Comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>loading...</div>}>
            { Comp }
        </React.Suspense>
    );
}

const routes = [
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: withLoadingComponent(<Abount/>)
    },
    {
        path: '/user',
        element: withLoadingComponent(<User/>)
    }
]

export default routes;