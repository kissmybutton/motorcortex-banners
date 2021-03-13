import Anime from "../../../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        backgroundPositionY: `${attrs.height - attrs.imgHeight / 2}px`,
        top: "-50%"
      },
      initialValues: {
        backgroundPositionY: `${attrs.height -
          attrs.imgHeight / 2 +
          attrs.height}px`,
        top: "-150%"
      }
    },
    {
      duration: 300,
      selector: ".left-image",
      easing: "easeOutQuart"
    }
  );
}
