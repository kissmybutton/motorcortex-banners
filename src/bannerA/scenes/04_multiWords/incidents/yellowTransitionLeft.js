import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      left: "-100%"
    }
  },
  {
    duration: 1000,
    selector: ".yellow-transition"
  }
);
