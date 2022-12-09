// import TodoList from './TodoList.js';
import React, { Component, Fragment } from "react";
// import './style.css';
import 'antd/dist/antd.min.css';
import TodoList from './todo-list/TodoList';

import { Provider } from 'react-redux';
import store from './todo-list/store';

import Title from "./components/Title.tsx";

import AuthButton from "./components/AuthButton";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleToggole = this.handleToggole.bind(this);
    }

    handleToggole() {
        this.setState(() => ({
            show: !this.state.show
        }));
    }

    render() {
        return (
            // <Provider store={store}>
            //     <TodoList />
            // </Provider>
            <div>
                <section>
                    {/* <Title type="small" title="小字体"/>
                    <Title type="large" title="大写体"/> */}
                    <AuthButton>登 录</AuthButton>
                </section>
            </div>
        );
    }
}

export default App;
