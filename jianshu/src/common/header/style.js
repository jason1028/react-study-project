import styled from "styled-components";
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

// export const Logo = styled.a.attrs({
//     href: '/'
// }) `
//     position: absolute;
//     height: 56px;
//     top: 0px;
//     left: 0px;
//     width: 100px;
//     display: block;
//     background:  url(${logoPic});
//     background-size: contain;
// `;

export const Logo = styled.div `
    position: absolute;
    height: 56px;
    top: 0px;
    left: 0px;
    width: 100px;
    display: block;
    background:  url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div `
    width: 960px;
    margin: 0 auto;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div `
    line-height: 56px;
    padding: 0px 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }

    &.right {
        float: right;
        color: #969696;
    }

    &.active {
        color: #ea6f5a;
    }
`;

export const NavSeach = styled.input `
    width: 160px;
    height: 38px;
    border: none;
    padding: 0px 30px 0px 20px;
    margin-left: 20px;
    box-sizing: border-box;
    margin-top: 9px;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #444;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    /**动画部分**/
    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;    
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const Addition = styled.div `
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div `
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchWrapper = styled.div `
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const SearchInfo = styled.div `
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    background-color: white;
`;

export const SearchInfoTitle = styled.div `
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    .spin {
        dispaly: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoSwitch = styled.span `
    float: right;
    font-size: 12px;
    cursor: pointer;
`;

export const SearchInfoList = styled.div `
    overflow: hidden;
`;

export const SearchInfoItem = styled.a `
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
`