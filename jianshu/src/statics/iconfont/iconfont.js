import { createGlobalStyle } from "styled-components";
import woff2 from './iconfont.woff2?t=1646710330316';
import woff from './iconfont.woff2?t=1646710330316';
import ttf from './iconfont.woff2?t=1646710330316';

export const GolobalIconFont = createGlobalStyle `
    @font-face {
        font-family: "iconfont"; /* Project id 3229309 */
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff'),
            url(${ttf}) format('truetype');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

