import Anime from "../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        backgroundPositionX: `-${attrs.imgWidth / 2 - attrs.width}px`,
        left: "-200%"
      },
      initialValues: {
        backgroundPositionX: `-${attrs.imgWidth / 2 - attrs.width}px`,
        left: "-400%"
      }
    },
    {
      duration: 200,
      selector: ".right-image",
      easing: "easeOutQuart"
    }
  );
}
