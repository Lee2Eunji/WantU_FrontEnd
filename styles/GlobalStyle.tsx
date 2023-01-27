import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

.notosanskr * { 
 font-family: 'Noto Sans KR', sans-serif;
}

* {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #272729;
    // background-color: #1d1d1f;
}
`;

export default GlobalStyle;