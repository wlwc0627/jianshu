import axios from 'axios';
import * as constans from './constans';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constans.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writeList: result.writeList
})

const addMoreList = (result, nextPage) => ({
    type: constans.ADD_MORE_LIST,
    list: fromJS(result),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        });
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addMoreList(result, page + 1));
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constans.TOGGLE_TOP_SHOW,
    show
})