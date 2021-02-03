module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let arr2 = [];
  let el;
  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-prev":
        if (arr[i - 2] != "--discard-next") {
          arr2.pop();
        }
        break;
      case "--double-prev":
        if (arr[i - 2] != "--discard-next") {
          el = arr2[arr2.length - 1];
          if (el != undefined) {
            arr2.push(el);
          }
        }
        break;
      case "--double-next":
        if (i + 1 < arr.length) {
          arr2.push(arr[i + 1]);
        }
        break;
      case "--discard-next":
        i++;
        break;
      default:
        arr2.push(arr[i]);
        break;
    }
  }
  return arr2;
};
