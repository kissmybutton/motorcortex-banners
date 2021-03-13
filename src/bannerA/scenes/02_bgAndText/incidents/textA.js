import Anime from "../../../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        fontSize: !attrs.txtGroupSize
          ? `${attrs.width * 0.2}px`
          : `${attrs.txtGroupSize}px`,
        marginLeft: "@pattern(14%, 6%)"
      },
      initialValues: {
        fontSize: "0px",
        marginLeft: "@pattern(85%, 6%)"
      }
    },
    {
      duration: 500,
      selector: ".txt-group",
      easing: "easeOutCubic",
      delay: "@expression(500 + 50 * (index + 1))"
    }
  );
}
