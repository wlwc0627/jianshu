import React, { PureComponent, Fragment } from 'react';
import {
    ErweimaWrapper,
    ErweimaInfo
} from '../style';

class Erweima extends PureComponent {
    render() {
        return (
            <Fragment>
                <ErweimaWrapper>
                    <div className='twoCode'></div>
                    <ErweimaInfo>
                        <h6 className='title'>
                            下载简书手机App
                            <i className='iconfont'>&#xe601;</i>
                        </h6>
                        <p className='desc'>
                            随时随地创作和发现新内容
                        </p>
                        <span className='writer'>推荐作者</span>
                        <span className='switchWriter'>
                            <i className='iconfont'>&#xe851;</i>
                            换一换  
                        </span>
                    </ErweimaInfo>
                </ErweimaWrapper>
            </Fragment>
        );
    }
}

export default Erweima;