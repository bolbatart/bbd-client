import { createGlobalStyle } from 'styled-components';


const maxWidthContainer = `1024px`;

const medias = {
  md1: `1120px`,
  md2: `820px`,
  md3: `472px`
}

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

h1 {
  font-size: 40px;
}
h2 {
  font-size: 30px;
}
h3 {
  font-size: 24px;
}
h4 {
  font-size: 20px;
}
h5, h6 {
  font-size: 14px;
}

.semi-bold {
  font-weight: 600;
}
.bold {
  font-weight: 700;
}


._container {
  max-width: ${maxWidthContainer};
  margin: 0 auto;
  padding: 0 16px;

._likes {
  img {
    display: inline-block;
    margin-right: 20px;
  }
}

._avatar {
  border-radius: 50%;
}

._link {
  color: #18a0fb;
        margin: 0 30px 0 0;
        &:hover {
          cursor: pointer;
          text-stroke: 1px #18a0fb;
          -webkit-text-stroke: 1px #18a0fb;
        }
}
  //1120
  /* @media (max-width: ${medias.md1}) {
    max-width: 724px;
  }

  @media (max-width: ${medias.md2}) {
    max-width: 424px;
  }

  @media (max-width: ${medias.md3}) {
    max-width: none;
    padding: 0 24px;
  } */

  }
}


ul,
ol {
  padding: 0;
  list-style: none;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  font-family: 'Montserrat', sans-serif;

}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
}

ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyle;