import React, { useState, createContext, useContext } from "react";

// 创建一个count上下文
const CountContext = createContext();

function Counter() {
    // 使用count上下文
    let {count} = useContext(CountContext);
    return (
        <div style={{color: "blue", marginTop: "30px"}}>
            我是1组件：{count}
            <button onClick={()=> { count += 10 }}>子组件直接更改父组件count是无效的</button>
        </div>
    );
}

function Counter2() {
    const [user, setUser] = useState({
        name: 'jason',
        age: 18,
        sex: 'boy',
        technology: {
            java: {
                level: '精通',
                projects: 0
            },
            javascript: {
                level: '精通',
                projects: 100
            }
        }
    });

    // 使用count
    let { aa, clickTest, count } = useContext(CountContext);

    function clickTest2() {
        console.log('我是点击2', aa);
        console.log('2里面的count:', count);
        clickTest();
    }

    function modifyAge() {
        console.log('点击已进....', setUser);
        const selectUser = {...user};
        selectUser.technology.java.level = '了解';
        selectUser.age += 1;
        setUser(selectUser);
    }

    // 我这里是count2
    return (
        <div style={{color: "red", marginTop: "30px"}}>
            <h2>我是count2: { aa }</h2>
            <button onClick={ clickTest2 }>年少不知富婆香</button>
            <h1>用户信息</h1>
            <ul>
                <li>姓名：{user.name}</li>
                <li>age:{user.age}</li>
                <li>sex：{user.sex}</li>
                <li>java水平: {user.technology.java.level}</li>
            </ul>
            <button onClick={ modifyAge }>年少不知富婆香, 岁数大了!</button>
        </div>
    );
}

function UseContext() {
    const [count, setCount] = useState(0);

    function clickTest() {
        console.log('我这里点击了哦...', count);
        setCount(count + 2);
    }

    var obj =  {aa: 1, count, clickTest };
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>点我试试，试试就试试。</button>
            <CountContext.Provider value = {obj}>
                <Counter/>
                <Counter2/>
            </CountContext.Provider>
        </div>
    );
}

export default UseContext;