import BannerA from "./bannerA/BannerA";
import { BannerAValidation } from "./bannerA/validation";
import { name, version } from "../package.json";

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: BannerA,
      name: "BannerA",
      attributesValidationRules: { ...BannerAValidation }
    }
  ]
};
