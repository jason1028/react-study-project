/**
 * UseMemo主要解决的是，class函数中的shouldComponentUpdate钩子函数
*/
import React, {Fragment, useState, useMemo}from "react";

export default function UseMemo() {
    const [xiaohong, setXiaohong] = useState('小红在待客状态');
    const [zhiling, setZhiling] = useState('志玲在待客状态');

    return (
        <Fragment>
            <button onClick={()=>setXiaohong(new Date().getTime())}>小红</button>
            <button onClick={()=>setZhiling(new Date().getTime() + '志玲向我们走来')}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </Fragment>
    );
}

function ChildComponent({name, children}) {

    // 只要父组件数据改变，这里一直会调用
    function changeXiaohong() {
        console.log('她来了, 她来了，小红向我们走来了');
        return name + '：小红向我们走来了';
    }

    // 只有name发生改变的时候，才执行
    const actionXiaohong = useMemo(()=>changeXiaohong(name), [name]);

    return (
        <>
            <div>{ actionXiaohong }</div>
            <div>{children}</div>
        </>
    );
}