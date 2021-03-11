import Anime from "../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      transform: {
        rotate: "-90deg"
      }
    },
    initialValues: {
      transform: {
        rotate: "0deg"
      }
    }
  },
  {
    duration: 600,
    selector: ".leftBlackBox,.rightBlackBox"
  }
);
