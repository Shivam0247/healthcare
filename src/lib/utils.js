var clsx = require("clsx");
var twMerge = require("tailwind-merge");

function cn() {
  var inputs = Array.prototype.slice.call(arguments);
  return twMerge(clsx.apply(null, inputs));
}

module.exports = cn;
