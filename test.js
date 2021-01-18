const MESSAGE = "%";
let ascii = "";
for (let i = 0; i < MESSAGE.length; i++) {
  console.log(MESSAGE[i].charCodeAt(0));
  let temp = MESSAGE[i].charCodeAt(0).toString(2);
  if (temp.length === 6) {
    temp = "0" + temp;
  }
  ascii += temp;
}

// encoding
let result = "";
let prev = "";

console.log(ascii);

for (let i = 0; i < ascii.length; i++) {
  // 이전값과 비교
  if (prev !== ascii[i]) {
    // 1인지 0인지 체크한후 한칸 띄운다.
    if (ascii[i] === "0") {
      result += " 00 0";
    } else if (ascii[i] === "1") {
      result += " 0 0";
    }
  } else if (prev === ascii[i]) {
    // '0' 추가
    result += "0";
  }
  prev = ascii[i];
}

console.log(result.slice(1));

//

console.log(
  "%"
    .split("")
    .map(c => "0".concat(c.charCodeAt(0).toString(2)).slice(-7))
    .join("")
    .match(/(.)\ 1*/g)
    .map(c => (c[0] == "1" ? "0 " : "00 ") + "0".repeat(c.length))
    .join(" ")
);
