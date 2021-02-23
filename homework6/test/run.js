// Transpile all code following this line with
// babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
  presets: ["@babel/preset-env"],
});

module.exports = require("./cart.test.js");
module.exports = require("./good.test.js");
