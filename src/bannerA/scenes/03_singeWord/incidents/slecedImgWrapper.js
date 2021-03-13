import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      top: "0%"
    },
    initialValues: {
      top: "-100%"
    }
  },
  {
    duration: 300,
    selector: ".sliced-img-wrapper",
    easing: "easeOutCubic"
  }
);
