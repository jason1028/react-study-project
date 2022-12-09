import React, {useState, useEffect} from "react";
import { Fragment } from "react";

function HooksTest() {
    const [count, setCount] = useState(0);
    
    // componentDidMount
    useEffect(() => {
        console.log(`useEffect => You clicked ${count} times.`);
    }, []);

    // componentDidUpdated
    useEffect(() => {
        console.log('更新');
    });

    // ComponentWillUnMount
    useEffect(()=> {
        return ()=> {
            console.log('页面卸载....');
        }
    });

    // function eachMatrix(arrMatrix) {
    //     var one = 0,
    //         two = arrMatrix[0].length -1;
    // }

    function testClick() {
        setCount(count + 1);
    }

    return (
        <Fragment>
            <div>You clicked { count } times.</div>
            <button onClick={ testClick }>Click me</button>
        </Fragment>
    );
}

export default HooksTest;