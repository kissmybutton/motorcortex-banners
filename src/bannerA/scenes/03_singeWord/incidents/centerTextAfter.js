import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      left: "49%",
      top: "51%"
    },
    initialValues: {
      left: "50%",
      top: "50%"
    }
  },
  {
    duration: 500,
    selector: ".center-text-after",
    easing: "easeOutBounce"
  }
);
