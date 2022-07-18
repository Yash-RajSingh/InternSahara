import { createGlobalStyle } from "styled-components";

export const GloablStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Nanum+Brush+Script&family=Roboto+Slab&family=Russo+One&family=Teko&display=swap');
html {
    --dark-blue: #005acd;
    --strong-blue: #0093cb;
    --mild-blue: #6dd7fd;
    --lightest-blue: #bef0ff;;
    --white: #f5ffff;
}
*{
    margin: 0;
    padding: 0;
}

body{
    background: var(--white);
}

::-webkit-scrollbar {
  width: 0.7vw;
}
::-webkit-scrollbar-thumb {
  background: var(--mild-blue);
  /* border: 0.1px solid black; */
  background-clip: padding-box;
}
::-webkit-scrollbar-thumb:hover {
  background: darkcyan;
}
scroll-behavior: smooth;

`

// Fonts:-  'Russo One, Teko, Nanum Brush Script, Caveat