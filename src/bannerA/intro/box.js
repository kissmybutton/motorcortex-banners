import Anime from "../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        top: `-${attrs.height * 0.1}px`,
        height: `${attrs.height * 0.1}px`
      },
      initialValues: {
        top: `${attrs.height}px`,
        height: `${attrs.height / 2.5}px`
      },
      attrs: {}
    },
    {
      duration: 500,
      selector: ".box",
      easing: "easeOutQuart",
      repeats: 2
    }
  );
}
