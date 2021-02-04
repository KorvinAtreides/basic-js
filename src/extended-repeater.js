module.exports = function repeater(str, options) {
  let answer = str;
  let onePart = str;
  if (options.addition !== undefined) {
    onePart = `${str}${options.addition}`;
    if (
      options.additionRepeatTimes != undefined &&
      options.additionRepeatTimes > 1
    ) {
      let addDiv = options.additionSeparator;
      if (options.additionSeparator == undefined) {
        addDiv = "|";
      }
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        onePart += `${addDiv}${options.addition}`;
      }
    }
  }
  answer = onePart;
  if (options.repeatTimes != undefined && options.repeatTimes > 1) {
    let mainDiv = options.separator;
    if (options.separator == undefined) {
      mainDiv = "+";
    }
    for (let i = 1; i < options.repeatTimes; i++) {
      answer += `${mainDiv}${onePart}`;
    }
  }
  return answer;
};
