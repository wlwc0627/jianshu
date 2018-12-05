import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import {
    DetailWrapper,
    Content,
    Author
} from './style';

class Detail extends PureComponent {
    render() {
        const { title, userImg, username, content } = this.props;
        return (
            <DetailWrapper>
                <Author>
                    <p className='title'>{title}</p>
                    <div>
                        <img alt='' src={userImg} />
                        <span className='name'>
                            {username}
                        </span>
                        <span className='focus'>+关注</span>
                    </div>
                </Author>
                <Content dangerouslySetInnerHTML={{__html:content}} />
            </DetailWrapper>
        );
    }

    componentWillMount() {
        this.props.getDetailInfo(this.props.match.params.id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    userImg: state.getIn(['detail', 'userImg']),
    username: state.getIn(['detail', 'username']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetailInfo(id) {
        dispatch(actionCreator.getDetailList(id))
    }
})

export default connect(mapState, mapDispatch)(Detail);