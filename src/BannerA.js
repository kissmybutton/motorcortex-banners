const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class BannerA extends MotorCortex.API.Clip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = width / 0.6 / lc;
    if (fontsize >= 200 && width === 720) {
      fontsize = 200;
    }
    if (fontsize >= 100 && width === 360) {
      fontsize = 100;
    }
    return fontsize;
  }

  get font() {
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
      const n = Math.floor(this.attrs.height / (this.attrs.width * 0.1));
      for (let i = 0; i <= n; i++) {
        list.push(`<div class="txt-group txt-${i}">brapapa</div>`);
      }
      return list.join("");
    })();
    return `
    <div class="wrapper">
      <div class="left-image-wrapper">
        <div class="left-image"> </div>
      </div>

      <div class="right-image-wrapper">
        <div class="right-image"> </div>
      </div>

      <div class="bg"></div>
      <div class="bg2">
        <div class="knockout">
          ${textlist}
        </div>
      </div>

      <div class="lines-wrapper">
        <div class="lines lines-1" style="
          height:  ${this.attrs.width *
            (Math.random() * (0.1 - 0.02) + 0.02).toFixed(4)}px;
          width: ${this.attrs.height *
            (Math.random() * (0.01 - 0.8) + 0.8).toFixed(2)}px;
          top:${this.attrs.height *
            (Math.random() * (0.01 - 0.8) + 0.8).toFixed(2)}px;
          "></div>
          
        <div class="lines lines-2" style="
          height: ${this.attrs.width *
            (Math.random() * (0.1 - 0.02) + 0.02).toFixed(4)}px;
          width: ${this.attrs.height *
            (Math.random() * (0.01 - 0.8) + 0.8).toFixed(2)}px;
          top:${this.attrs.height *
            (Math.random() * (0.01 - 0.8) + 0.8).toFixed(2)}px;
        "></div>
        <div class="lines lines-3" style="
          height: ${this.attrs.width *
            (Math.random() * (0.1 - 0.02) + 0.02).toFixed(4)}px;
          width: ${this.attrs.height *
            (Math.random() * (0.01 - 0.5) + 0.5).toFixed(2)}px;
          top:${this.attrs.height *
            (Math.random() * (0.01 - 0.8) + 0.8).toFixed(2)}px;
        "></div>
      </div>
      <div class="circles-wrapper">
        <div class="circle-1 circle" ></div>
        <div class="circle-2 circle "></div>
        <div class="circle-3 circle "></div>
      </div>
      <div class="flex-center">
        <div class="center-text" data-text="Yeyey">Yeyey</div>
      </div>

      <div class="sliced-img-wrapper">
        <div class="sliced-img"></div>
      </div>
      
      <div class="doted"></div>
      <div class="box"> </div>
	  </div>
    `;
  }

  get css() {
    return `
    .wrapper{
      width: ${this.attrs.width}px;
      height: 700px;
      background: aquamarine;
      display:flex;
    }
    .box{
      width: ${this.attrs.width * 0.03}px;
      height: 300px;
      background: yellow;
      position:absolute;
      left: ${this.attrs.width / 2}px;
    }

    .doted{
      background-image: radial-gradient(yellow 16%, #0000 20%);
      background-position: 0 0;
      background-size: 16px 14px;
      height: ${this.attrs.height / 4.5}px;
      width: ${this.attrs.width / 2.7}px;
      position:absolute;
      left: 7%;
      top: 65%
    }

    .lines-wrapper{
      height: ${this.attrs.height}px;
      width: ${this.attrs.width}px;
      position: absolute;
    }
    .lines{
      background: yellow;
      position: absolute;
    }

    .left-image-wrapper, .right-image-wrapper{
      width:${this.attrs.width / 2}px;
      overflow: hidden;
    }

  
    .right-image{
      height: 1080px;
      width: 1920px;
      position: relative;
      background-image: url(${this.attrs.bgUrl});
      background-size: 1920px;
      background-position: -${this.attrs.imgWidth / 2 -
        this.attrs.width}px ${this.attrs.height - this.attrs.imgHeight / 2}px;
      transform: scale(1);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex: 1 0 auto;
     
      top: -50%;
      left: -200%;
    }
    .left-image{
      height: 1080px;
      width: 1920px;
      position: relative;
      background-image: url(${this.attrs.bgUrl});
      background-size: 1920px;
      background-position: -${this.attrs.imgWidth / 2 -
        this.attrs.width +
        this.attrs.width / 4}px ${this.attrs.height -
      this.attrs.imgHeight / 2}px;
      transform: scale(1);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex: 1 0 auto;
      top: -50%;
      left: -50%;
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
    

    .txt-group:nth-of-type(odd){
    
      margin-left: 5% !important;
    }
    .txt-group:nth-of-type(2n+2) {
    margin-left: 45%
    }
    .knockout {
      background: url(https://raw.githubusercontent.com/kissmybutton/motorcortex-slides/master/demo/kissmybutonbg.jpg);
      background-position: 50% 50%;
      color: red;
      -webkit-text-fill-color: transparent; 
      -webkit-background-clip: text;
      font-weight: bold;
      font-size: ${this.attrs.width * 0.1}px;
      font-family: 'Poppins', sans-serif;
      text-transform: uppercase;
      width:${this.attrs.width}px;
      height: ${this.attrs.height}px;
      color: yellow;
    }

  body{
    
  }
  .bg2{
    background: yellow;
    width:${this.attrs.width}px;
    height: ${this.attrs.height}px;
    position: absolute;
  }
  .bg{
    background: url(https://raw.githubusercontent.com/kissmybutton/motorcortex-slides/master/demo/kissmybutonbg.jpg);
    background-position: 50% 50%;
    width:${this.attrs.width}px;
    height: ${this.attrs.height}px;
    position: absolute;
  }

  .circle{
    width: ${0}px;
    height: ${0}px;
    background: transparent;
    border: ${this.attrs.width * 0.05}px solid yellow;
    border-radius: 100%;
  }
  .circle-1{
    position: absolute;
    transform: rotate(${Math.random() * 360 +
      "deg"})  translateX(0px) translateY(0px) 
    
  }
  .circle-2{
    position: absolute;
    transform: rotate(${Math.random() * 360 +
      "deg"})  translateX(0px) translateY(0px) 
    
  }
  .circle-3{
    position: absolute;
    transform: rotate(${Math.random() * 360 +
      "deg"})  translateX(0px) translateY(0px) 
    
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
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    color:yellow
  }
  .center-text::before,.center-text::after{
   content: attr(data-text);
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: -2;
   opacity: 0.6;
  }
  .center-text::before{
    color: #ff00c1;
    left:52%;
    top:49%;
  }
  .center-text::after{
    color: #3498db;
    left:48%;
    top:51%;
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
    background: url(https://raw.githubusercontent.com/kissmybutton/motorcortex-slides/master/demo/kissmybutonbg.jpg);
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
    

  `;
  }

  buildTree() {
    const box = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%",
          height: "0px"
        },
        initialValues: {
          top: "100%",
          height: "300px"
        },
        attrs: {}
      },
      {
        duration: 500,
        selector: ".box",
        easing: "easeOutQuart"
      }
    );

    this.addIncident(box, 0);
  }
}

module.exports = BannerA;
