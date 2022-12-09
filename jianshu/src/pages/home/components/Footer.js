import React, { PureComponent } from "react";

import { Consumer } from '../index';

class Footer extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // 4 使用Consumer组件接收数据
            <Consumer>
                {/*<Provider>的value的值会作为回调函数的参数(data)传过来*/}
                {
                    data=><div>我是{data}的</div>
                }
            </Consumer>
        )
    }
}

export default Footer;