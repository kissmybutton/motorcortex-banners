const Plugin = require("./Plugin");
const compositeAttributes = require("./compoAttributes");
const { animatedAttrs } = require("./validation");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-plugin",
  incidents: [
    {
      exportable: Plugin,
      name: "Plugin",
      attributesValidationRules: { animatedAttrs }
    }
  ],
  compositeAttributes
};
