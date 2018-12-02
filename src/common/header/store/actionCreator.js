import * as constans from './constans';
import { fromJS } from 'immutable';
import axios from 'axios';

const ChangeList = (data) => ({
    type: constans.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const SearchFocus = () => ({
    type: constans.SEARCH_FOCUS
});

export const SearchBlur = () => ({
    type: constans.SEARCH_BLUR
});

export const MouseEnter = () => ({
    type: constans.MOUSE_ENTER
});

export const MouseLeave = () => ({
    type: constans.MOUSE_LEAVE
});

export const ChangePage = (page) => ({
    type: constans.CHANGE_PAGE,
    page
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(ChangeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}

