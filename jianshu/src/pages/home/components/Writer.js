import React, { PureComponent } from "react";
import { WriterWrapper } from '../style';
import Test from './Test';

class Writer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: true
        }
    }

    // 错误边界获取
    static getDerivedStateFromError(e) {
        console.log('进来了....', e);
        return {
            hasError: true
        }
    }

    componentDidCatch(error) {
        console.log('here:', error);
    }

    componentDidMount() {
        // setTimeout(()=> {
        //     this.setState({
        //         hasError: true
        //     });
        // }, 5000);
    }

    // 渲染
    render() {
        return (
            <WriterWrapper>
                {
                    // this.state.hasError ? <HooksTest/> : <Test/>
                }
            </WriterWrapper>
        )
    }
}

export default Writer;