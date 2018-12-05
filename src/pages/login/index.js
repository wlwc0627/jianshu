import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'; 
import  { 
    LoginWrapper,
    LoginBox,
    Button
} from './style';
import { Logo } from '../../common/header/style';

class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <Link to='/'>
                    <Logo />                
                </Link>
                <LoginBox>
                    <div className='header'>
                        <span className='sign_in'>登陆</span>
                        <span className='sign_up'>注册</span>
                    </div>
                    <div className='content'>
                        <i className='iconfont user'>&#xe604;</i><input placeHolder='请输入用户名' />
                        <i className='iconfont pwd'>&#xe716;</i><input placeholder='请输入密码' />
                    </div>
                    <div className='banner'>
                        <span className='remember'>
                            <input type='checkbox' />记住我
                        </span>
                        <span className='question'>登录遇到问题?</span>
                    </div> 
                    <Button>登录</Button> 
                </LoginBox>
            </LoginWrapper>
        );
    }
}

export default Login;