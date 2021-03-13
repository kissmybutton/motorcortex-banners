import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      transform: { scale: 1.5 }
    },
    initialValues: {
      transform: { scale: 1 }
    }
  },
  {
    duration: 150,
    selector: ".sliced-img",
    easing: "easeOutCubic"
  }
);
