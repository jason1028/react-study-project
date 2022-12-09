import React, { Component, Fragment } from "react";
import "./mockdata";

import axios from "axios";

import TodoItem from './TodoItem.js';
import './style.css'

class TodoList extends Component {

    /**
     * 构造函数
     ***/
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello world~!',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleValueSubmit = this.handleValueSubmit.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    // 事件监听
    handleInputChange(e) {
        const value = this.input.value;
        // 为什么要用函数，它更新是异步的，异步的好处就是如果在固定的时间内，将以最终的数据为准，减少对比次数；
        this.setState(() => {
            return {
                inputValue: value
            }
        });
    }   

    // 事件提交
    handleValueSubmit() {
        const { inputValue } = this.state;
        if (inputValue) {
            this.setState((prevState) => {
                return {
                    list: [...prevState.list, prevState.inputValue],
                    inputValue: ''
                }
            });
        }
    }

    // 删除选项
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list }
        });
    }

    getTodoItem() {
       return this.state.list.map((item, index) => {
            return (
                        <TodoItem 
                            key={index}
                            content={item}
                            index={index}
                            deleteItem={this.handleItemDelete}
                        />
                    )  
            })
    }

    componentDidMount() {
        const _this = this;
        axios.get('/api/todolist').then((res) => {
            const result = res.data.data;
            _this.setState(()=> ({
                list: [...result]
            }));
        }).catch(() => {
            alert('error');
        });
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容：</label>
                    <input 
                        id = "insertArea"
                        className = "input"
                        value = {this.state.inputValue} 
                        onChange = {this.handleInputChange}
                        ref = {(input) => { this.input = input }}
                    />
                    <button onClick = { this.handleValueSubmit }>提交</button>
                </div>
                <ul>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;