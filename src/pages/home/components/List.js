import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import { Link } from 'react-router-dom';
import { 
    ListContainer,
    ListInfo,
    ListLike,
    MoreList
} from '../style';

class List extends PureComponent {

    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <Fragment>
                {
                    list.map((item, index) => {
                        return (
                            <Link to={'/detail/' + item.get('id')} key={index}>
                                <ListContainer >
                                    <img 
                                        className='listImg' 
                                        alt='' 
                                        src={item.get('imgUrl')} />
                                    <ListInfo>
                                        <h3 className='listTitle'>
                                            {item.get('listTitle')}
                                        </h3>
                                        <p className='listDesc'>
                                            {item.get('listDesc')}
                                        </p>
                                    
                                        <ListLike>
                                            <span className='author'>{item.get('author')}</span>
                                            <span className='comment'>
                                                <i className='iconfont'>&#xe671;</i>
                                                {item.get('comment')}
                                            </span>
                                            <span className='like'>
                                                <i className='iconfont'>&#xe71e;</i>
                                                {item.get('like')}
                                            </span>
                                        </ListLike>
                                    </ListInfo>
                                </ListContainer>
                            </Link>
                        );
                    })
                }
                <MoreList onClick={() => getMoreList(page)}>阅读更多</MoreList>
            </Fragment>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) =>({
    getMoreList(page) {
        dispatch(actionCreator.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List);