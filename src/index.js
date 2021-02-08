import BannerA from "./BannerA"
import { BannerAValidation } from "./validation"
const pkg = require("../package.json");

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: BannerA,
      name: "BannerA",
      attributesValidationRules: { ...BannerAValidation }
    }
  ]
};
