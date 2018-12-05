import styled from 'styled-components';

export const SwiperWrapper = styled.div`
    position: relative;
    width: 625px;
    height: 270px;
    cursor: pointer;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(200, 200, 200, .2);
`;

export const SwiperImg = styled.div`
    .bannerImg{
        width: 625px; 
        height: 270px;
    }
`;

export const SwiperButton = styled.div`
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    .iconfont{
        display: block;
        position: absolute;
        top: 110px;
        width: 30px;
        height: 50px;
        background: rgba(200, 200, 200, .4);
        &.left{     
            left: 0px;   
        }
        &.right{
            right: 0px;
        }
    }
    
`;