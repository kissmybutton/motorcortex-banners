import Anime from "../../../../plugins/Anime";

export default function(attrs) {
  return new Anime.Anime(
    {
      animatedAttrs: {
        transform: {
          translateX: `@expression(${attrs.width / 2} * random())px`, // `${(this.attrs.width / 2) * Math.random()}px`,
          translateY: `@expression(${attrs.width / 2} * random())px` // `${(this.attrs.width / 2) * Math.random()}px`
        },
        width: `${attrs.width * 0.2}px`,
        height: `${attrs.width * 0.2}px`,
        border: `0px solid yellow`
      },
      initialValues: {
        transform: {
          translateX: "0px",
          translateY: "0px"
        },
        width: "0px",
        height: "0px",
        border: ` ${attrs.width * 0.05}px solid yellow`
      }
    },
    {
      duration: 500,
      selector: ".circle",
      easing: "easeOutCubic",
      delay: "@expression(50*index)"
    }
  );
}
