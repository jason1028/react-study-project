import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
    /**
     * 构造函数
    */
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }

    /**
     * 渲染函数
    */
    render() {
        const {content, test} = this.props;
        return (
            <li onClick = {this.handleClick}>
                {test}-{content}
            </li>
        );
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: "hello world!!"
}

export default TodoItem;