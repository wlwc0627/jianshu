import { fromJS } from 'immutable';
import * as constans from './constans';

const defaultState = fromJS({
    title: '',
    userImg: '',
    username: '',
    content: ''
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constans.GET_DETAIL_LIST:
            return state.merge({
                title: fromJS(action.title),
                userImg: fromJS(action.userImg),
                username: fromJS(action.username),
                content: fromJS(action.content)
            })
        default:
            return state;
    }
}




