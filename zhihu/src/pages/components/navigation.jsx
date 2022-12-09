import React, { Component, Fragment } from "react"

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    getDerivedStateFormProps(nextProps, prevState) {
        console.log('测试...');
    }

    // 页面挂载完毕
    componentDidMount() {
        console.log('挂载完成....');
    }

    handleClick() {
        // this.setState((prevState) =({
        //     count: prevState.count + 1
        // }));
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        const { count } = this.state;
        return (
            <Fragment>
                <div>hello, Navigation: <span style={{color: 'red'}}>{ count }</span></div>
                <button onClick={ () => this.handleClick() }>测试按钮</button>
            </Fragment>
        );
    }
}