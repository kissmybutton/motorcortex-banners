import Anime from "../../../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        left: `@pattern(-${attrs.width * 0.1}px, ${attrs.width * 0.1}px)`
      },
      initialValues: {
        left: `@pattern(-${attrs.width * 0.5}px, ${attrs.width * 0.5}px)`
      }
    },
    {
      duration: "@expression(3000 + 80 * (index + 1))",
      selector: ".stroke-text-outline"
    }
  );
}
