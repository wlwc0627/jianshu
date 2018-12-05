import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    position: relative;
    top: 50px;
    width: 945px;
    margin: 0 auto;
    padding-top: 30px;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    float: left;
    width: 640px;
`;

export const HomeRight = styled.div`
     float: right;
     margin-left: 10px;
     width: 280px;
`;

export const ListWrapper = styled.div`
    overflow: hidden;
    padding: 20px 10px 10px 10px;
    margin-left: -18px;
    border-bottom: 1px solid rgba(200, 200, 200, .2);
`;

export const ListItem = styled.div`
    float: left;
    height: 32px; 
    line-height: 32px;
    margin-left: 18px;
    padding-right: 10px;
    font-size: 14px;
    color: #000;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 18px;
    cursor: pointer;
    .topic-img{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        
    }
`;

export const ListContainer = styled.div`
    overflow: hidden;
    position: relative;
    margin-top: 10px;
    width: 625px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(200, 200, 200, .2);
    .listImg{
        display: block;
        float: right;
        width: 150px;
        height: 100px;
        margin-top: 20px;
        border-radius: 6px;
    }
`;

export const ListInfo = styled.div`
    float: left;
    width: 458px;
    cursor: pointer;
    .listTitle{
        line-height: 27px;
        font-size: 18px;
        color: rgba(0, 0, 0, .85);
        font-weight: 700;
        padding: 5px;
    }
    .listDesc{
        display: block;
        color: #999;
        font-size: 13px;
        line-height: 24px;
    }
`;

export const ListLike = styled.div`
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    width: 458px;
    display: inline-block;
    cursor: pointer;
    color: #969696;    
    .author{
        padding: 0 15px 0 3px;
    }
    .comment{
        padding: 0 10px 0 5px;
        .iconfont{
            font-size: 15px;
            margin-right: 3px;    
        }
    }
    .like{
        .iconfont{
            font-size: 15px;
            margin-right: 3px;    
        }
        padding: 0 10px 0 10px;
    }
    
`;

export const MoreList = styled.div`
    width: 625px;
    background-color: #a5a5a5;
    border-radius: 20px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 15px;
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 100px;
    cursor: pointer;
`;

export const RecommendWrapper = styled.div`
    width: 280px;
    height: 270px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 45px;
    background: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    padding-left: 20px;
    line-height: 45px;
    font-size: 18px;
    margin-bottom: 10.5px;
    border-radius: 6px;
    font-weight: bold;
    color: #fff;
    .iconfont{
        margin-left: 12px;
    }
`;

export const ErweimaWrapper = styled.div`
    overflow: hidden;   
    position: relative;
    margin-top: 20px;
    padding-top: 10px;     
    padding-left: 15px;
    width: 280px;
    height: 130px;
    border-bottom: 1px solid rgba(200, 200, 200, .2);
    box-sizing: border-box;
    .twoCode{
        float: left;
        width: 60px;
        height: 60px;
        background: #eee;
    }
    .writer{
        position: absolute;
        bottom: 8px;
        left: 3px;
        font-size: 10px; 
    }
    .switchWriter{
        cursor: pointer;
        position: absolute;
        right: 20px;
        bottom: 8px;
        font-size: 10px;
        .iconfont{
            font-size: 10px;
            margin-right: 3px;
        }
    }
`;

export const ErweimaInfo = styled.div`
    height: 60px;
    width: 190px;
    float: right;
    padding-top: 5px;
    padding-left: 8px;
    .title{
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 6px;
        .iconfont{
            margin-left: 4px;
            font-size: 14px;
        }
    }
    .desc{
        color: #969696;
        font-size: 14px;
    }
`;

export const WriteList = styled.div`
    position: relative;
    width: 280px;
    height: 48px;
    margin-top: 10px;
    margin-bottom: 14px;
    .writePic{
        width: 48px;
        height: 48px;
        position: absolute;
        left: 0;
        border-radius: 50%;
        cursor: pointer;
    }
    .writeInfo{
        width: 100%;
        height: 48px;
        box-sizing: border-box;
        padding-left: 55px;
        .Name{
            cursor: pointer;
            line-height: 25px;
            font-size: 14px;
            text-decoration: none;
            color: #222;
        }
        .desc{
            font-size: 12px;
            color: #aaa;
            line-height: 20px;
        }   
    }
    .focus{
        position: absolute;
        right: 0;
        top: 0;
        padding-top: 5px;
        padding-right: 15px;
        font-size: 14px;
        color: rgb(0, 170, 17);
        cursor: pointer;
    }
`;

export const MoreWrites = styled.div`
    width: 280px;
    height: 40px;
    background: #f7f7f7;
    margin-top: 30px;
    padding: 10px 15px;
    box-sizing: border-box;
    text-align: center;
    line-height: 20px;
    color: #787878;
    border-radius: 8px;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #aaa;
    line-height: 40px;
    color: #969696;
    cursor: pointer;
`;