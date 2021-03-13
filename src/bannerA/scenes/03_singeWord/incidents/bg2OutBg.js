import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      width: "0px"
    }
  },
  {
    duration: 300,
    selector: ".bg2",
    easing: "easeOutQuart"
  }
);
