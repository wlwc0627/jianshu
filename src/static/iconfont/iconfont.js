import { createGlobalStyle } from 'styled-components';

export const IconfontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1542959313423'); /* IE9*/
    src: url('./iconfont.eot?t=1542959313423#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1542959313423') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1542959313423#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;