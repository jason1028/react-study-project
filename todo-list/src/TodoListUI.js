import { Input, Button, List, Typography } from 'antd';
import React, { Fragment } from 'react';

const TodoList = (props) => {
    const { inputValue, handleButtonClick, handleInputChange, handleItemDelete, list } = props; 
    return (
        <Fragment>
            <Input
                id="todo_ipt" 
                value={inputValue} 
                placeholder="请输入任务"
                onChange={handleInputChange}
            >
            </Input>
            <Button type="primary" onClick={handleButtonClick}>提 交</Button>
            <List
                style={{width: "550px", marginLeft:"10px"}}
                bordered
                dataSource={list}
                renderItem={(item, index)=> (
                    <List.Item onClick={()=>handleItemDelete(index)}>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
            />
        </Fragment>
    );
};

export default TodoList;