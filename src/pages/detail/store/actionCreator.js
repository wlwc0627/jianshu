import axios from 'axios';
import { constans } from '.';

const changeDetailData = (result) => ({
    type: constans.GET_DETAIL_LIST,
    title: result.title,
    userImg: result.userImg,
    username: result.username,
    content: result.content
})

export const getDetailList = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetailData(result));
        })
    }
}