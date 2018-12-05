import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../common/header/store';
import { 
    reducer as HomeReducer,
    reducer as ArticleReducer,
    reducer as RecommendReducer,
    reducer as WriteReducer
} from '../pages/home/store';
import { reducer as DetailReducer } from '../pages/detail/store';

export default combineReducers({
    header: HeaderReducer,
    home: HomeReducer,
    article: ArticleReducer,
    recommend: RecommendReducer,
    write: WriteReducer,
    detail: DetailReducer
});