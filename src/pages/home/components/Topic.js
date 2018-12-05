import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    ListWrapper,
    ListItem
} from '../style';

class Topic extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <ListWrapper>
                {
                    list.map((item) => ( 
                            <ListItem key={item.get('id')}>
                                <img 
                                    alt=''
                                    className='topic-img'
                                    src={item.get('imgUrl')}
                                />
                                {item.get('title')}
                            </ListItem>
                        )
                    )
                }
            </ListWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('topicList')
});

export default connect(mapStateToProps, null)(Topic);