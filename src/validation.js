exports.BannerAValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  overlayColor: {
    optional: false,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  imgWidth: { optional: false, type: "number" },
  imgHeight: { optional: false, type: "number" },
  strokeText: { type: "string" },
  mainColor: {
    optional: false,
    type: "color"
  },
  centerText: { type: "string" }
};
