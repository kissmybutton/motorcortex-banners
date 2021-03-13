const MotorCortex = require("@kissmybutton/motorcortex");

import intro from "./scenes/01_intro/intro";
import bgAndText from "./scenes/02_bgAndText/btAndText";
import singleWord from "./scenes/03_singeWord/singleWord";
import multiWords from "./scenes/04_multiWords/multiWords";
import outro from "./scenes/05_outro/outro";

class BannerA extends MotorCortex.HTMLClip {
  get fonts() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
      }
    ];
  }

  get html() {
    const textlist = (() => {
      const list = [];
      const n = Math.floor(this.attrs.height / (this.attrs.width * 0.2));
      this.n = n;
      for (let i = 0; i < n; i++) {
        list.push(
          `<div class="txt-group txt-${i}">${this.attrs.txtGroup}</div>`
        );
      }
      return list.join("");
    })();
    const strokeTextList = this.attrs.strokeText.split(" ");
    this.strokeTextLength = strokeTextList.length;
    const textlistStroke = (className, style = false) => {
      const list = [];
      for (let i = 0; i < strokeTextList.length; i++) {
        list.push(
          `
          <div style="${
            style === true
              ? `top:${(this.attrs.height / strokeTextList.length) * i}px;`
              : " "
          }" class="${className}${i}">${strokeTextList[i]}</div>`
        );
      }
      return list.join("");
    };

    return `
    <div class="wrapper">
      <div class="left-image-wrapper">
        <div class="left-image"> </div>
      </div>

      <div class="right-image-wrapper">
        <div class="right-image"> </div>
      </div>

      <div  class="bg"></div>
      <div class="bg2">
        <div class="knockout">
          ${textlist}
        </div>
      </div>

      <div class="lines-wrapper">
        <div class="lines lines-1" style="
          height:  ${this.attrs.height * 0.1 * Math.random()}px;
          width: ${this.attrs.width * 0.5 * Math.random().toFixed(2)}px;
          top:${this.attrs.height * Math.random().toFixed(2)}px;
          "></div>

        <div class="lines lines-2" style="
          height:${this.attrs.height * 0.1 * Math.random()}px;
          width: ${this.attrs.width * 0.5 * Math.random().toFixed(2)}px;
          top:${this.attrs.height * Math.random().toFixed(2)}px;
        "></div>
        <div class="lines lines-3" style="
          height: ${this.attrs.height * 0.1 * Math.random()}px;
          width: ${this.attrs.width * 0.5 * Math.random().toFixed(2)}px;
          top:${this.attrs.height * Math.random().toFixed(2)}px;
        "></div>
      </div>



      <div class="circles-wrapper">
        <div class="circle-1 circle" ></div>
        <div class="circle-2 circle "></div>
        <div class="circle-3 circle "></div>
      </div>
      <div class="flex-center center-text-wrapper" >
        <div class="center-text" data-text="Yeyey">
          ${this.attrs.centerText}
        </div>
        <div class="center-text-after" data-text="Yeyey">
          ${this.attrs.centerText}
        </div>
        <div class="center-text-before" data-text="Yeyey">
          ${this.attrs.centerText}
        </div>

      </div>

      <div  class="sliced-img-wrapper">
        <div class="sliced-img"></div>
      </div>
      <div  style="opacity: 0;"class="stroke-text-wrapper flex-center">

        ${textlistStroke("stroke-text-center txt-stroke-")}
        ${textlistStroke("stroke-text-outline txt-stroke-outline-", true)}
      </div>
      <div class="doted"></div>
      <div class="doted-half"></div>
      <div class="rng-box"></div>
      <div class="yellow-underline"></div>
      <div class="yellow-transition"> </div>
      <div class="box"> </div>
      <div class="leftBlackBox"></div>
      <div class="rightBlackBox"></div>
	  </div>
    `;
  }

  get css() {
    const strokeTextList = this.attrs.strokeText.split(" ");
    return `
    .wrapper{
      width: ${this.attrs.width}px;
      height: ${this.attrs.height}px;

      display:flex;
      font-family: 'Poppins', sans-serif;
    }
    .box{
      width: ${this.attrs.width * 0.03}px;
      height: ${this.attrs.height * 2.4};
      background: ${this.attrs.mainColor};
      position:absolute;
      left: ${this.attrs.width / 2}px;
    }

    .doted{
      background-image: radial-gradient(${this.attrs.mainColor} 16%, #0000 20%);
      background-position: 0 0;
      background-size: 16px 14px;
      height: ${this.attrs.height / 4.5}px;
      width: ${this.attrs.width / 2.7}px;
      position:absolute;
      left: 7%;
      top: 65%
    }

    .doted,.doted-half{
      background-image: radial-gradient(${this.attrs.mainColor} 16%, #0000 20%);
      background-position: 0 0;
      background-size: 16px 14px;
      height: ${this.attrs.height / 4.5}px;
      width: ${this.attrs.width / 2.7}px;
      position:absolute;
      left: 7%;
      top: 65%;
      opacity: 0;

    }
    .doted-half{
      clip-path: polygon(0 31%, 85% 31%, 100% 55%, 15% 55%);
      left: 65%;
      top: 7%
    }

    .lines-wrapper{
      height: ${this.attrs.height}px;
      width: ${this.attrs.width}px;
      position: absolute;
    }
    .lines{
      background: ${this.attrs.mainColor};
      position: absolute;
    }

    .left-image-wrapper, .right-image-wrapper{
      width:${this.attrs.width / 2}px;
      overflow: hidden;
    }


    .right-image{
      height: ${this.attrs.imgHeight}px;
      width: ${this.attrs.imgWidth}px;
      position: relative;
      background-image: url(${this.attrs.bgUrl});
      background-size: ${this.attrs.imgWidth}px;
      transform: scale(1);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex: 1 0 auto;
      background-repeat: no-repeat;
    }
    .left-image{
      height: ${this.attrs.imgHeight}px;
      width: ${this.attrs.imgWidth}px;
      position: relative;
      background-image: url(${this.attrs.bgUrl});
      background-size: ${this.attrs.imgWidth}px;

      transform: scale(1);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex: 1 0 auto;

    }
    .left-image:after,.right-image:after {
      content: "";
      display: block;
      background: linear-gradient(${this.attrs.overlayColor});
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: -1;
    }

    .txt-group{
      font-size: ${this.attrs.txtGroupSize}px;
    }
    .txt-group:nth-of-type(odd){
      height: 14%;

    }
    .txt-group:nth-of-type(2n+2) {

    height: 14%;
    }
    .knockout {
      background: url(${this.attrs.bgUrl});
      background-position: 50% 50%;
      color: red;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      font-weight: bold;
      font-size: 0;
      text-transform: uppercase;
      width:${this.attrs.width}px;
      height: ${this.attrs.height}px;
      color: ${this.attrs.mainColor};
    }

  body{

  }
  .bg2{
    background: ${this.attrs.mainColor};
    width:${this.attrs.width}px;
    height: ${this.attrs.height}px;
    position: absolute;
    left:100%;
  }
  .bg{
    background: url(${this.attrs.bgUrl});
    background-position: 50% 50%;
    width:${this.attrs.width}px;
    height: ${this.attrs.height}px;
    position: absolute;
  }

  .circle{
    width: ${0}px;
    height: ${0}px;
    background: transparent;

    border-radius: 100%;
    position: absolute;
  }


  .circles-wrapper{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width:${this.attrs.width}px;
    height: ${this.attrs.height}px;
  }
  .center-text{
    font-weight: bold;
    font-size: ${100}px;
    text-transform: uppercase;
    color:${this.attrs.mainColor}
  }
  .center-text-before,.center-text-after{
   content: attr(data-text);
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: -2;
   opacity: 0.6;
   font-size: ${100}px;
   font-weight: bold;

   text-transform: uppercase;
  }
  .center-text-before{
    color: #ff00c1;

  }
  .center-text-after{
    color: #3498db;

  }

  .flex-center{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width:${this.attrs.width}px;
    height: ${this.attrs.height}px;
    z-index: 1;
  }
  .sliced-img-wrapper{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width:${this.attrs.width}px;
    height: ${this.attrs.height}px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
    overflow: hidden;
  }
  .sliced-img{
    background: url(${this.attrs.bgUrl});
    background-position: 50% 50%;
    width:${this.attrs.width}px;
    height: ${this.attrs.height}px;
    position: absolute;

  }

  .sliced-img::after{
    content: "";
      display: block;
      background: linear-gradient(${this.attrs.overlayColor});
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
  }

  .stroke-text-center{
    position: relative;
    text-transform: uppercase;
    width:${this.attrs.width}px;
    color: ${this.attrs.mainColor};
    font-weight: 900;
    display: flex;
    align-items: center;
    z-index: 1;

  }
  .stroke-text-wrapper{
    display:flex;
    flex-direction: column;
  }
  .stroke-text-outline{
    font-size: ${this.attrs.width * 0.3}px;
    text-transform: uppercase;
    width:${this.attrs.width}px;
    color: transparent;
    font-weight: 900;
    display: flex;

    align-items: center;
    -webkit-text-stroke: 3px aquamarine;
    position: absolute;
    height:${this.attrs.height / strokeTextList.length}px;

  }

  .rng-box::after{
    content: "";
      display: block;
      background: linear-gradient(${this.attrs.overlayColor});
      position: absolute;
      height:${this.attrs.height * 0.08}px;
      width: ${this.attrs.width * 0.6}px;
      background-size: ${this.attrs.height}px ${this.attrs.width}px;
  }

  .rng-box{
    position: absolute;
    height:${this.attrs.height * 0.08}px;
    width: ${this.attrs.width * 0.6}px;
    top:80%;
    left:-100%;
    z-index: 1;
  }

  .yellow-underline{
    position: absolute;
    height:${this.attrs.height * 0.01}px;
    width: ${this.attrs.width * 0.5}px;
    top:90%;
    left:-100%;
    z-index: 1;
    background: ${this.attrs.mainColor};
  }
  .yellow-transition{
    position: absolute;
    height:${this.attrs.height}px;
    width: ${this.attrs.width}px;
    top:0%;
    left:100%;
    z-index: 1;
    background: ${this.attrs.mainColor};
  }
  .leftBlackBox,.rightBlackBox{
    position: absolute;
    height:${this.attrs.height * 2}px;
    width: ${this.attrs.width * 2}px;
    background: black;
    transform: rotate(0deg);
    z-index: 1;
    top: -50%;
  }
  .leftBlackBox{
    left: -200%;
  }
  .rightBlackBox{
    left: 100%
  }


  `;
  }

  buildTree() {
    this.addIncident(intro(this.attrs), 0);
    this.addIncident(bgAndText(this.attrs), 500);
    this.addIncident(singleWord(this.attrs), 1800);
    this.addIncident(multiWords(this.attrs), 2400);
    this.addIncident(outro, 6000);
  }
}

export default BannerA;
