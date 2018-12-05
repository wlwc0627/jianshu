import { createGlobalStyle } from 'styled-components';

export const IconfontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1544023395998'); /* IE9*/
    src: url('./iconfont.eot?t=1544023395998#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1544023395998') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1544023395998#iconfont') format('svg'); /* iOS 4.1- */
    }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;