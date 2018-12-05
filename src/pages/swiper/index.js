import React from 'react';
import ReactSwipe from 'react-swipe';
import { 
    SwiperWrapper,
    SwiperButton,
    SwiperImg 
} from './style';

const SwiperList = () => {
  
    let reactSwipeEl;

    return (
        <SwiperWrapper>
            <ReactSwipe
                className="SwiperList"
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
            >
                <SwiperImg>
                    <img 
                        className='bannerImg' 
                        alt='pic01' 
                        src='https://upload.jianshu.io/admin_banners/web_images/4581/8a43bf0089cd31850b7a493412ac1f39d30f1763.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' 
                    />
                </SwiperImg>
                <SwiperImg>
                    <img 
                        className='bannerImg' 
                        alt='pic02' 
                        src='https://upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' 
                    />
                </SwiperImg>
                <SwiperImg>
                    <img 
                        className='bannerImg' 
                        alt='pic03' 
                        src='https://upload.jianshu.io/admin_banners/web_images/4579/0e3caa20d3d30658dc4b393d1ea105baa7e78248.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' 
                    />
                </SwiperImg>
            </ReactSwipe>
            <SwiperButton onClick={() => reactSwipeEl.next()}>
                    <i className='iconfont left'>&#xe602;</i>
            </SwiperButton>
            <SwiperButton onClick={() => reactSwipeEl.prev()}>
                    <i className='iconfont right'>&#xe601;</i>
            </SwiperButton>
        </SwiperWrapper >
    );
};

export default SwiperList;