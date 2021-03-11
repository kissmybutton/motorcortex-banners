import Anime from "../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      left: "0%"
    },
    initialValues: {
      left: "-200%"
    }
  },
  {
    duration: 1000,
    selector: ".leftBlackBox"
  }
);
