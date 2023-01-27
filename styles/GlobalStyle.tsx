import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

.notosanskr * { 
 font-family: 'Noto Sans KR', sans-serif;
}

* {
    font-family: 'Noto Sans KR', sans-serif;
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
`;

export default GlobalStyle;
