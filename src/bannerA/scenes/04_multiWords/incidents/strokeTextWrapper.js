import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      opacity: 1
    },
    initialValues: {
      opacity: 0
    }
  },
  {
    duration: 300,
    selector: ".stroke-text-wrapper",
    easing: "easeOutQuart"
  }
);
