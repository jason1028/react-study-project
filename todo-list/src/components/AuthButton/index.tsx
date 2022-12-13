import React, { FC, useEffect, useState } from "react";
import { Button, ButtonProps, message } from "antd";
import classnames from "classnames";
import styles from "./style.module.less";
import { getUserRole, UserRoleType } from "@/apis/user";

type Props = ButtonProps;

// 身份文案
const mapper: Record<UserRoleType, string> = {
    user: '普通用户',
    admin: '管理员'
}

const AuthButton: FC<Props> = (props: Props) => {
    const { children, className, ...restProps } = props;
    const [userType, setUserType] = useState<UserRoleType>(); 

    // 获取用户身份并设置
    const getLoginState = async () => {
        const res = await getUserRole();
        setUserType(res.data.userType);
    };

    useEffect(() => {
        getLoginState().catch((e) => message.error(e.message));
    }, []);

    const testFuc = () => {
        console.log(11111);
    }

    return (
        <Button {...restProps} className={classnames(className, styles.authButton)} onClick={ testFuc }>
            {mapper[userType!] || ""}
            {children}
        </Button>
    );
}

export default AuthButton;