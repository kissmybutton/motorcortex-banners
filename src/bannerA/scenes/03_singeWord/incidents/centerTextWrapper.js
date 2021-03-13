import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      transform: {
        scale: 1
      }
    },
    initialValues: {
      transform: {
        scale: 0
      }
    }
  },
  {
    duration: 500,
    selector: ".center-text-wrapper",
    easing: "easeOutBounce"
  }
);
