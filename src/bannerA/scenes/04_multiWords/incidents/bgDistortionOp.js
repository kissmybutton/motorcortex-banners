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
    duration: 20,
    selector: ".bg2"
  }
);
