import { Button } from "antd";
import React, { useState, useCallback } from 'react';
import usePow from './usePow';

const TestButton = React.memo((props:any)=>{
    console.log(props.title)
    return <Button color='primary' onClick={props.onClick} style={props.title === 'useCallback点击' ? { marginLeft: 20} : undefined}>{props.title}</Button>
})

const Index: React.FC<any> = (props) => {
    const [flag, setFlag] = useState<Boolean>(true);
    const [list, setList] = useState<number[]>([1, 2, 3]);
    const [count,setCount] = useState(0)
    const [show, setShow] = useState(true)

    const data = usePow(list);

    const changeList = () => {
        const newlist = [...list];
        newlist[0] = Math.floor(Math.random() * 10);
        setList(newlist);
    }

    const add = useCallback(()=>{
        setCount(count + 1)
      }, [count])

    return (
        <div>
            <div>数字：{ JSON.stringify(data) }</div>
            <Button color='primary' onClick={() => { setFlag(!flag) }}>切换</Button>
            <Button onClick={() => {setShow(!show)}}> 切换</Button>
            <Button color='primary' onClick={() => changeList() }>更改List</Button>
            <div>切换状态：{JSON.stringify(flag)}</div>
            <div>
                <ul>
                    { list.map((item, index) => {
                        return <li key={index}>{ `哈哈${item}` }</li>
                    }) }
                </ul>
            </div>

            <div>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <TestButton title="普通点击" onClick={() => setCount(count + 1) }/>
                    <TestButton title="useCallback点击" onClick={ add }/>
                </div>
                <div style={{marginTop: 20}}>count: {count}</div>
                <Button onClick={() => {setShow(!show)}}> 切换</Button>
            </div>
        </div>
    );
}

export default Index;