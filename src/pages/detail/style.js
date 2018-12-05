import styled from 'styled-components';

export const DetailWrapper = styled.div`
    position: relative;
    top: 58px;
    width: 620px;
    margin: 0 auto;
    padding-top: 50px;
`;

export const Author = styled.div`
    margin-top: 30px;
    width: 100%;
    margin-bottom: 30px;
    box-sizing: border-box;
    .title{
        font-size: 32px;
        font-weight: bold;
    }
    div{
        margin-top: 30px;
        width: 100%;
        height: 50px;
        cursor: pointer;
        img{
            float: left;
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
        .name{
            float: left;
            margin-left: 20px;  
            display: inline-block;
            height:48px;
            line-height: 48px;
            font-size: 16px;
        }
        .focus{
            float: left;
            margin-left: 20px;
            display: inline-block;
            margin-top:14px;
            width: 50px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            border-radius: 9px;
            background: #2d7bf7;
            color: #fff;
            font-size: 8px;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    img{
        display: block;
        margin: 0 auto;
        box-sizing: border-box;
    }
    p{
        margin-top: 20px;  
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 30px;
    }
`;