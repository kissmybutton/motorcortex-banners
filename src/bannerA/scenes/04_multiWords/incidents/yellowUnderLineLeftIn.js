import Anime from "../../../../plugins/Anime";

export default new Anime.Anime(
  {
    animatedAttrs: {
      left: "30%"
    },
    initialValues: {
      left: "-100%"
    }
  },
  {
    duration: 2000,
    selector: ".yellow-underline"
  }
);
