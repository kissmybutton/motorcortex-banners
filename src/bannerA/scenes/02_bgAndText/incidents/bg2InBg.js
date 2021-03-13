import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      backgroundPositionX: "50%"
    },
    initialValues: {
      backgroundPositionX: "100%"
    }
  },
  {
    duration: 500,
    selector: ".knockout",
    easing: "easeOutQuart"
  }
);
