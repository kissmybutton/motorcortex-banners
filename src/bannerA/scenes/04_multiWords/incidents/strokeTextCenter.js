import Anime from "../../../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        fontSize: `${attrs.width * 0.15}px`,
        left: "5%",
        height: `${attrs.width * 0.15}px`
      },
      initialValues: {
        fontSize: `0px`,
        left: "50%",
        height: `${attrs.width * 0.15 * 3}px`
      }
    },
    {
      duration: 500,
      selector: ".stroke-text-center",
      easing: "easeOutQuart"
    }
  );
}
