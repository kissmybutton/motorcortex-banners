import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      left: "51%",
      top: "49%"
    },
    initialValues: {
      left: "50%",
      top: "50%"
    }
  },
  {
    duration: 500,
    selector: ".center-text-before",
    easing: "easeOutBounce"
  }
);
