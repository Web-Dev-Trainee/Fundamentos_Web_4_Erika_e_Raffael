const ftoc = function (fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  return Math.round(fToCel * 10) / 10 ;
}

const ctof = function (celsius) {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return Math.round(cToFahr * 10) / 10 ;
}

module.exports = {
  ftoc,
  ctof
}