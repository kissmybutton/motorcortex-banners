import Anime from "../../../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        width: `${attrs.width / 2}px`
      },
      initialValues: {
        width: `${(attrs.width / 2) * 0.02}px`
      }
    },
    {
      duration: 200,
      selector: ".right-image-wrapper",
      easing: "easeOutQuart"
    }
  );
}
