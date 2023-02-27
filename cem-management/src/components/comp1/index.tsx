// import "./style.scss";  全局引入

// css模块化引入
import styles from './style.module.scss';
import { Button } from 'antd';
import { RightOutlined } from "@ant-design/icons";

function Comp() {
    return (
        <div className={ styles.box }>
            <p>这是Comp1里面的内容</p>
            <Button type="primary">Primary Button</Button>
            <RightOutlined style={{color: "#08c"}}/>
        </div>
    );
}

export default Comp;