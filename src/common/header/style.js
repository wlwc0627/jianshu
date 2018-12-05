import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    z-index: 2;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: #fff;
    min-width: 970px; 
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    max-width: 75%;
    height: 100%;
    margin: 0 auto;
    padding-right: 130px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    cursor: pointer;
    color: #333;
    &.left{
        float: left
    }
    &.right{
        float: right;
        color: #999;
        .iconfont{
            font-size: 20px;
        }
    }
    &.active{
        color:#ea6f5a
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom{
        position: absolute;
        right: 5px;
        top: 12px;
        width: 30px;
        height: 30px;
        border-radius: 50%; 
        line-height: 30px;
        box-sizing: border-box;
        text-align: center;     
        &.focused{
            background: #888;
            color: #fff;
        }
    } 
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: 1px solid #eee;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    &.slide-enter{
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
       width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
    }
`;

export const SearchInfo = styled.div`
    z-index: 10;
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;   
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 12px;
    cursor: pointer;
    .spin{
        display: inline-block;
        margin-right: 2px;
        font-size: 12px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    margin-top: 20px;
`;

export const SearchInfoItem = styled.a`
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #999;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    color: #787878;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    heigth: 56px;
    padding-right: 20px;
`;

export const Button = styled.a`
    display: inline-block;
    float: right;
    height: 38px;
    margin-top: 9px;
    margin-right: 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 19px;
    text-align: center;
    line-height:38px;
    cursor: pointer;
    &.write{
        background: #ea6f5a;
        color: #fff;
        padding: 0 18px;
    }
    &.register{
        padding: 0 20px;
        color: #ea6f5a;
    }
`;