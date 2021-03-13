import Anime from "../../../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        left: "-100%",
        width: `${(attrs.width / 2) * 0.1}px`
      },
      initialValues: {
        left: "100%"
      }
    },
    {
      duration: 1000,
      selector: ".lines-wrapper",
      easing: "easeOutQuart"
    }
  );
}
