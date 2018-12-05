import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommond from './components/Recommond';
import Writer from './components/Writer';
import Topic from './components/Topic';
import Erweima from './components/Erweima';
import { actionCreator } from './store';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop 
} from './style';
import SwiperList from '../swiper';

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <SwiperList />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommond />
                    <Erweima />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? 
                    <BackTop onClick={this.handleScrollTop}>
                        <i className='iconfont'>&#xe9c8;</i>
                    </BackTop>: null
                }
                
            </HomeWrapper>
        );
    }

    componentDidMount() {
      this.props.changeHomeData();  
      this.bindEvent();
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvent() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreator.getHomeInfo());
    },

    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 200) {
            dispatch(actionCreator.toggleTopShow(true));
        }else{
            dispatch(actionCreator.toggleTopShow(false));
        };
    }
})

export default connect(mapState, mapDispatch)(Home);