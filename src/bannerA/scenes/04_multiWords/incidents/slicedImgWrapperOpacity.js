import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      opacity: 0
    },
    initialValues: {
      opacity: 1
    }
  },
  {
    duration: 1,
    selector: ".sliced-img-wrapper,.center-text-wrapper",
    easing: "easeOutQuart"
  }
);
