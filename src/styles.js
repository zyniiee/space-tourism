// styles.js file
import { createGlobalStyle } from "styled-components";
import BarlowRegular from "./fonts/Barlow-Regular.ttf";
import BarlowCondensedRegular from "./fonts/BarlowCondensed-Regular.ttf";
import BarlowCondensedBold from "./fonts/BarlowCondensed-Bold.ttf";
import Bellefair from "./fonts/Bellefair-Regular.ttf";

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
a {
   text-decoration: none; 
   color: var(--white);
   cursor: pointer;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
  @font-face {
    font-family: 'BarlowRegular';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${BarlowRegular});
  }
  @font-face {
    font-family: 'BarlowCondensedRegular';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${BarlowCondensedRegular});
  }
  @font-face {
    font-family: 'BarlowCondensedBold';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    src: url(${BarlowCondensedBold});
  }
  @font-face {
    font-family: 'Bellefair';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${Bellefair});
  }
  :root {
    --darkGrey: #383b4b;
    --darkBlue: #0b0d17;
    --lightBlue: #d0d6f9;
    --white: #ffffff;
    font-family: 'BarlowRegular';
    color: var(--white);
    background-color: var(--darkBlue);
    box-sizing: border-box;
  }

  body {
    font-size: 18px;
    line-height: 1.5;
     @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 16px;
      text-align: center;

    }
    @media (max-width: 768px) {
        font-size: 15px;
        text-align: center;

    }
  }

  h1{
    font-family: 'Bellefair';
    padding-top: 1rem;
    padding-bottom: 2rem;
    font-size: 150px;
    line-height: 1;
    text-transform: uppercase;
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 150px;
    }
    @media (max-width: 768px) {
        font-size: 80px;
    }
  }
  h2 {
    font-family: 'Bellefair';
    font-size: 100px;
    line-height: 1;
    text-transform: uppercase;
       @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 80px;
    }
    @media (max-width: 768px) {
        font-size: 56px;
    }
  }
  h3{
    font-family: 'Bellefair';
    font-size: 56px;
    line-height: 1;
    text-transform: uppercase;
    @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 40px;
    }
    @media (max-width: 768px) {
          font-size: 24px;
    }
  }
  h4 {
    font-family: 'Bellefair';
    font-size: 32px;
    text-transform: uppercase;
    line-height: 1;
    @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    }
    @media (max-width: 768px) {
    font-size: 16px;
    }
  }
  h5 {
    font-family: 'BarlowCondensedRegular';
    font-size: 28px;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 4.72px;
     @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
      letter-spacing: 3.38px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      letter-spacing: 2.7px;
    }
  }
  .text--blue {
    color: var(--lightBlue);
  }
  .subheading-1 {
    font-family: 'Bellefair';
    font-size: 28px;
    line-height: 1;
    text-transform: uppercase;
    color: var(--white);
  }
  .subheading-2 {
    font-family: 'BarlowCondensedRegular';
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 2.36px;
  }
  .nav_text {
    font-family: 'BarlowCondensedRegular';
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 2.7px;
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 14px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      letter-spacing: 2.7px;
    }
  }
  p {
    color: var(--lightBlue);
  }

`;

export default GlobalStyle;
