import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      left: "0%"
    },
    initialValues: {
      left: "100%"
    }
  },
  {
    duration: 500,
    selector: ".bg2",
    easing: "easeOutQuart"
  }
);
