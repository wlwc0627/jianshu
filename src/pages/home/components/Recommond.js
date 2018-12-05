import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
    RecommendWrapper,
    RecommendItem
} from '../style';

class Recommond extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return (
                            <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
                                {item.get('title')}
                                <i className='iconfont'>&#xe601;</i>
                            </RecommendItem>  
                        );
                    })
                }                            
            </RecommendWrapper>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommond);