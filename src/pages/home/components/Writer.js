import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    WriteList,
    MoreWrites
} from '../style';

class Writer extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <Fragment>
                {
                    list.map((item, index) => {
                        return (
                            <WriteList key={index}>
                                <img alt='' className='writePic' src={item.get('imgUrl')} />
                                <div className='writeInfo'>
                                    <a href='/' className='Name'>
                                        {item.get('name')}
                                    </a>
                                    <p className='desc'>{item.get('desc')}</p>
                                </div>
                                <p className='focus'>＋关注</p>
                            </WriteList>
                        );
                    })
                }
                <MoreWrites>查看全部</MoreWrites>
            </Fragment>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writeList'])
})

export default connect(mapState, null)(Writer);