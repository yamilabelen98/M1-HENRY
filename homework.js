"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let Decimal = 0;
  let StringNum = num.toString();
  for (
    let i = 0, j = StringNum.length - 1;
    i < StringNum.length, j >= 0;
    i++, j--
  ) {
    Decimal = Decimal + Number(StringNum[i]) * 2 ** j;
  }
  return Decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let Array = [];
  while (Math.round(num / 2) > 0) {
    Array.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return Array.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
