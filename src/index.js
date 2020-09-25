const BannerA = require("./BannerA");
const { BannerAValidation } = require("./validation");
module.exports = {
  npm_name: "@kissmybutton/motorcortex-animebanners",
  incidents: [
    {
      exportable: BannerA,
      name: "BannerA",
      attributesValidationRules: { ...BannerAValidation }
    }
  ]
};
