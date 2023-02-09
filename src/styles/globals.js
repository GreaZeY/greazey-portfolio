import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};   
    cursor: default;
    overflow-x:hidden;
    // overflow-y:hidden;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  
::-moz-selection {
  /* Code for Firefox */
  background: rgb(255, 251, 0);
}

::selection {
  background: rgba(255, 166, 0, 0.795);
}
body::after {
  content: "";
  position: absolute;
  top: -50rem;
  left: -50rem;
  width: 100rem;
  aspect-ratio:1;
  background: #0f162400;
  transition: .5s ease;
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  backdrop-filter: blur(5px);
  border-radius: 50%;  
  z-index: -1;
  animation : 2s grow cubic-bezier(0.65, 0.05, 0.36, 1);;
}
@keyframes grow {
  from {width: 0;}
  to {width: 100rem;}
}
body::-webkit-scrollbar
{
	width: 7px;
	background-color: transparent;
}

body::-webkit-scrollbar-thumb
{
	background: linear-gradient(180deg, #13ADC7 0%, #945DD6 100%);
  border-radius: 100px;
}
.nameSection {
  margin-top: 250px;
  margin-bottom: 360px;
}

.name-div{
  display:inline-block;
  position :relative;
  overflow:hidden;
  width:max-content;
  
}

.name::before {
  content: attr(data-text);

  position: absolute;
width:101%;
  color: #00ffaa;
  -webkit-text-stroke: 0vw #383d52;
  border-right: 3px solid #00ffaa;
  overflow: hidden;
  animation: type 3s;
}
@keyframes type {
  0%,
  10% {
    width: 0;
  }
  70%,
  100% {
    width: 101%;
  }
 

}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 2px;

  background: #0f1624;

  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  transition: 0.5s ease;
}
.content:hover .card {
  font-size: 0;

  left: 50%;
  top: 45%;

  border-radius: 50%;
  height: 0%;
  width: 0%;

}

.picon{
    transition: 0.3s ease;
}
.content:hover .picon {
    opacity: 0;
}

.resume{

  background:transparent;
  border: 1px solid rgb(0, 255, 149);
  text-decoration: none;
  transform: translate(5%,-40%);
  padding: 5px;
  border-radius: 5px;
  font-size: 2rem;
  text-align: center;
  width: 90px;
  font-weight: 100;
  transition: 1s;

}
.resume:hover{
  background: #00ff9533;
}

#contact{
  position: fixed;
  bottom: 5px;
  right:5px;
  height: 55px;
  width: 55px;
  background: transparent;
  border: none;
  z-index:10;
}
#mail{
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 2px;
  right:5px;
  z-index:10;
  filter: invert(1);
  transition: .5s;
}
#mail:hover{
  transform: scale(0.8);
}
#hid{
  position: fixed;
  visibility: hidden;
  right:0;
  bottom: 0;
}
.emailBox{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: fixed;
  bottom: 5px;
  right:5px;
  background: #0f162400;
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  backdrop-filter: blur(5px);
  height: 500px;
  width: 350px;
  border-top-left-radius :150px ;
  z-index:6;

}
#name, #emailip, #message{
  font-size: 17px;
  margin-top: 20px;
  padding-bottom: 8px;
  align-self: flex-start;
}
.inputs{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.emailBox input, textarea{

  width: 100%;
  height: 32px;
  max-width: 250px;
  max-height: 150px;
  min-height: 32px;
  min-width: 250px;
  border-radius: 40px;
  padding: 10px;
  background: transparent;
  background: rgba(255,255,255,0.2);
  color: #fff;
  border:1px solid rgba(255,255,255,0.5);
  border-right:1px solid rgba(255,255,255,0.2);
  border-bottom:1px solid rgba(255,255,255,0.2) ;
  outline: none;
  border: none;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.05);
  backdrop-filter: blur(5px);
}

textarea::-webkit-scrollbar
{
	width: 7px;
	background-color: transparent;
}

textarea::-webkit-scrollbar-thumb
{
	background: linear-gradient(180deg, #13ADC7 0%, #945DD6 100%);
  border-radius: 100px;
}

@media screen and (max-width:768px) {
  body::after {
    height: 100vw;
    width: 100vw;
    top:-50vw;
    left:-50vw;
   }
  }

@media screen and (max-width:640px) {
  body::after {
    height: 120vw;
    width: 120vw;
    top:-60vw;
    left:-60vw;
   }
  #mail{
    height: 40px;
    width: 40px;
  }

  .resume{
    font-size: 1.6rem;
  }
}


`;

export default GlobalStyles;