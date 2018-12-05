import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index: 10;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: #f7f7f7;
`;

export const LoginBox = styled.div`
    width: 400px;
    margin: 80px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    box-sizing: border-box;
    .header{
        width: 300px;
        height: 40px;
        font-size: 18px;
        margin-bottom: 50px;
        span{
            overflow: hidden;
            display: inline-block;
            width: 38px;
            height: 40px;
            line-height: 40px;
            color: #333;
            cursor: pointer;
            &.sign_in{
                float: left;
                margin-left: 80px;
                border-bottom: 2px solid orange;
            }
            &.sign_up{
                float: right;
                margin-right: 80px;
            }
        }
    }
    .content{
        position: relative;
        width: 300px;
        border: 1px solid #979797;
        input{
            height: 50px;
            width: 100%;
            box-sizing: border-box;
            padding-left: 34px;
        }
        .iconfont{
            display: block;
            position: absolute;
            left: 8px;
            width: 30px;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
        }
    }
    .banner{
        overflow: hidden;
        width: 100%;
        height: 22px;
        margin-top: 20px;
        font-size: 12px;
        line-height: 18px;
        color: #939393;
        cursor: pointer;
        .remember{
            display: inline-block;
            float: left;
        }
        .question{
            display: inline-block;
            float: right;
        }
    }
`;

export const Button = styled.div`
    width: 300px;
    height: 40px;
    border-radius: 20px;
    background: #3194d0;
    color: #fff;
    text-align: center;
    line-height: 40px;
    margin-top: 16px;
    cursor: pointer;
    margin-bottom: 30px;
`;