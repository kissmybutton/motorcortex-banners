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
    duration: 1,
    selector: ".circles-wrapper",
    easing: "easeOutQuart"
  }
);
