import { createGlobalStyle } from "styled-components";
import visualizacao from "../src/Assets/visualizacao.svg";

const StyleGlobal = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&family=Spectral:wght@700&display=swap');
*{
    box-sizing: border-box;
}
body{
    padding-top: 4rem;
    margin: 0px;
    color: #333;
    --type-first: Helvetica,Arial, Sans-serif;
    --type-second: "Spectral", georgia;
    font-family: var(--type-first);
}
h1, h2, h3, h4, p{
    margin: 0px;
}
ul, li {
        list-style: none;
        padding: 0px;
        margin: 0px;
    }

img {
        display: block;
        max-width: 100%;
    }
button, input {
        display: block;
        font-size: 1rem;
        font-family: var(--type-first);
        color: #333;
    }

    a {
        text-decoration: none;
        color: #333;
    }
.container{
    max-width: 80rem;
    padding: 0 1rem;
    margin: 0 auto;
}
.mainContainer{
    margin-top: 2rem;
}
.title{
    font-family: var(--type-second);
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;
}

.title::after{
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;

}

.animeLeft{
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards
}
.img:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }
  @media (max-width: 40rem) {
    .img:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
  .img{
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;
  }
  .img > div{
    grid-area: 1/1;
  }
  .img span{
    background: rgba(0, 0,0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    grid-area: 1/1;
    display: none;
  }

  .img span::before{
    width: 16px;
    height: 10px;
    content: "";
    display: inline-block;
    margin-right: .25rem;
    background: url(${visualizacao} ) no-repeat;

  }
 .img:hover span{
    display: flex;
}


@keyframes animeLeft {
    to{
        opacity: 1;
        transform: initial;
    }
}

.App{
    display: flex;
    flex-direction: column;
    min-height: calc(100vh + 10rem);
}
.AppBody{
    flex: 1;
}

`;

export { StyleGlobal };
