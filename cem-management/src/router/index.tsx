import { Navigate } from 'react-router-dom';
import Home from '@/views/Home';
import React, { lazy } from 'react';
// import Abount from '@/views/About';
// import User from '@/views/User';

// 路由懒加载
const Abount =  lazy(() => import('@/views/About'));
const User =  lazy(() => import('@/views/User'));
const Page1 = lazy(() => import('@/views/Page1'));
const Page2 = lazy(() => import('@/views/Page2'));

const withLoadingComponent = (Comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>loading...</div>}>
            { Comp }
        </React.Suspense>
    );
}

const routes = [
    /**
     * 嵌套路由
    */
    {
        path: '/',
        element: <Navigate to="/page1"/>
    },
    {
        path: '/',
        element: <Home/>,
        children: [
          {
            path: '/user',
            element: withLoadingComponent(<User/>)
          },
          {
            path: '/page1',
            element: withLoadingComponent(<Page1/>)
          },
          {
            path: '/page2',
            element: withLoadingComponent(<Page2/>)
          }
        ]
    },
    // {
    //   path: '/home',
    //   element: <Home/>
    // },
    // {
    //     path: '/about',
    //     element: withLoadingComponent(<Abount/>)
    // },
    // {
    //     path: '/user',
    //     element: withLoadingComponent(<User/>)
    // },
]

export default routes;