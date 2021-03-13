import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      clipPath: "polygon(0 0, 100% 0, 100% 110%, 0 100%)"
    },
    initialValues: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)"
    }
  },
  {
    duration: 300,
    selector: ".sliced-img-wrapper",
    easing: "easeOutCubic"
  }
);
