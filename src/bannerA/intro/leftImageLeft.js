import Anime from "../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        backgroundPositionX: `-${attrs.imgWidth / 2 -
          attrs.width +
          attrs.width / 4}px `,

        left: "-50%"
      },
      initialValues: {
        backgroundPositionX: `-${attrs.imgWidth / 2 -
          attrs.width +
          attrs.width / 4 +
          attrs.width / 2}px `,

        left: "100%"
      }
    },
    {
      duration: 700,
      selector: ".left-image",
      easing: "easeOutQuart"
    }
  );
}
