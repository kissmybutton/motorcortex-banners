import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      top: "-33%",
      left: "-33%"
    }
  },
  {
    duration: 1,
    selector: ".circles-wrapper",
    easing: "easeOutQuart"
  }
);
