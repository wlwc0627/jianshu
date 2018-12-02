import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';

class Header extends Component {
    render() {

        const { focused, handleInputFocus, handleInputBlur, list } = this.props;

        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>
                        首页
                    </NavItem>
                    <NavItem className='left'>
                        <i className='iconfont'>&#xe6d4;</i>
                        下载App
                    </NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe607;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch> 
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
                        >&#xe644;</i>  
                         {this.getListArea()}      
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='write'>
                        <i className='iconfont'>&#xe60b;</i>
                        写文章
                    </Button>
                    <Button className='register'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

    getListArea() {

        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if(newList.length){
            for(let i=(page-1)*9; i<page*9; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        

        if(focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            <i 
                                className='iconfont spin'
                                ref={(icon) => {this.spinIcon = icon}}
                            >&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            { pageList }
                        </SearchInfoList>
                    </SearchInfoTitle>    
                </SearchInfo>
            );
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        totalPage: state.getIn(['header', 'totalPage']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if(list.size === 0){
                dispatch(actionCreator.getList());                
            }
            dispatch(actionCreator.SearchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreator.SearchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreator.MouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreator.MouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle){
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) + 'deg)';
            if(page < totalPage){
                dispatch(actionCreator.ChangePage( page+1 ));
            }else{
                dispatch(actionCreator.ChangePage(1));
            }
          
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);