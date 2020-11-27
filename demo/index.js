const MotorCortex = require("@kissmybutton/motorcortex");
const Player = require("@kissmybutton/motorcortex-player/");
const BannersDefinition = require("../dist/motorcortex-banners.umd");
const Plugin = MotorCortex.loadPlugin(BannersDefinition);

const css = `.container {
  overflow: hidden;
  display: flex;
  justify-content: center;

  width:1280px;
  height:720px;
}`;

const html = ` <div class="container container1"></div>`;

const host = document.getElementById("clip");

const containerParams = {
  width: "1280px",
  height: "720px"
};

const clip = new MotorCortex.HTMLClip({
  css,
  html,
  host,
  containerParams,
  id: "root",
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }
  ]
});

const overlayColor = ["#BB00FF91", "#00FFE791", "#FFD70091"];

const BannerA = new Plugin.BannerA(
  {
    width: 400,
    height: 700,
    bgUrl: "./bg2.jpg",
    overlayColor,
    imgWidth: 1002,
    imgHeight: 1280,
    txtGroup:"MOTORCORTEX",
    txtGroupSize: 40,
    strokeText: "WE WIN THE GAME IN THE CSS",
    mainColor: "#ffff00",
    centerText: "Yeyey"
  },
  {
    selector: ".container1"
  }
);

clip.addIncident(BannerA, 0);
window.clip = clip
new Player({ clip, timeFormat: "ms" });
