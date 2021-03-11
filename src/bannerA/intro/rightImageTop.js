import Anime from "../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        backgroundPositionY: `${attrs.height - attrs.imgHeight / 2}px`,
        top: "-50%"
      },
      initialValues: {
        backgroundPositionY: `-${(attrs.height - attrs.imgHeight / 2) * 4}px`,
        top: "100%"
      }
    },
    {
      duration: 700,
      selector: ".right-image",
      easing: "easeOutQuart"
    }
  );
}
