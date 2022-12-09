import axios from "axios";
import * as actionTypes from './constants';
import { fromJS } from "immutable";

// 改变changeHomeData数据
const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recomendList: result.recomendList
});

const addHomeList = (result, page) => ({
    type: actionTypes.ADD_HOME_LIST,
    articleList: fromJS(result.articleList),
    nextPage: page
});

// 获取数据
export const getHomeInfo = ()=> {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            dispatch(changeHomeData(res.data.data));
        });
    }
}

// 获取更多数据
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+ page).then((res) => {
            dispatch(addHomeList(res.data.data, page + 1));
        });
    }
}

// 回到顶部显示与隐藏
export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_TOP_SHOW,
    show: show
});