import { createGlobalStyle } from 'styled-components';


const maxWidthContainer = `1024px`;

const medias = {
  md1: ``,
  md2: ``,
  md3: ``,
  md4: ``,
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

._container {
  // 1024
  max-width: ${maxWidthContainer};
  margin: 0 auto;
  /* @media (max-width: ${medias.md1}) {
    max-width: ;
  }

  @media (max-width: ${medias.md2}) {
    max-width: ;
  }

  @media (max-width: ${medias.md3}) {
    max-width: ;
  }

  @media (max-width: ${medias.md4}) {
    max-width: ;
  } */
}


ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
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