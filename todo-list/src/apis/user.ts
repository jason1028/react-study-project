import axios from 'axios';

// 用户角色身份
type UserRoleType = "user" | "admin";

// 返回
interface GetUserRoleRes {
    userType: UserRoleType;
}

// 获取用户身份信息
const getUserRole = async () => {
    return axios.get<GetUserRoleRes>('https://mysite.com/api/role');
}

// 获取用户列表
export interface FetchUserRes {
    id: string;
    name: string;
}
  
export const fetchUser = async () => {
    return axios.get<FetchUserRes>("https://mysite.com/api/users");
};

export {
    UserRoleType,
    GetUserRoleRes,
    getUserRole
}