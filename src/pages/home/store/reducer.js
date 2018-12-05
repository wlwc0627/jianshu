import { fromJS } from 'immutable';
import * as constans from './constans';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writeList: [],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constans.CHANGE_HOME_DATA: 
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writeList: fromJS(action.writeList)
            });
        case constans.ADD_MORE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.nextPage
            });
        case constans.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.show)
        default:
            return state;
    }
}