import BannerA from "./BannerA"
import { BannerAValidation } from "./validation"
import {name,version}  from '../package.json'

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
