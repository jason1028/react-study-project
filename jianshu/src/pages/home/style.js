import styled from "styled-components";

export const HomeWrapper = styled.div `
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div `
    width: 645px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 645px;
        height: 270px;
    }
`;

export const HomeRight = styled.div `
    width: 290px;
    float: right;
`;

export const TopicWrapper = styled.div `
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -10px;
`;

export const TopicItem = styled.div `
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    background: #f7f7f7;
    color: black;
    border-radius: 4px;
    padding-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid #dcdcdc;
    .topic-img {
        display: bolck;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

/**
 * 文章列表模块
*/
export const ListItem = styled.div `
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .list-pic {
        display: bolck;
        width: 148px;
        height: 98px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div `
    width: 475px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .desc {
        line-height: 18px;
        font-size: 13px;
        color: #999;
    }
`;

export const LoadMore = styled.div `
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;

/**
 * 推荐模块
*/
export const RecomendList = styled.div `
    overflow: hidden;
    margin-top: 30px;
`;

export const RecommendItem = styled.div `
    height: 50px;
    width: 280px;
    margin-bottom: 5px;
    cursor: pointer;
    background: url(${(props)=>props.imgUrl});
    background-size: contain; 
    .recomend-pic {
        width: 280px;
    }
`;

export const WriterWrapper = styled.div `
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

// 回到顶部
export const BackTop = styled.div `
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`; 