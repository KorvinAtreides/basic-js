module.exports = class DepthCalculator {
  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let x = getCur(i);
        let y = this.calculateDepth(arr[i]);
        getMax(x);
        getMax(y);
        getCur();
      }
    }
    return getMax();
  }
};
function getMax(x) {
  if (this.max == undefined) {
    this.max = 1;
  }
  if (x == undefined) {
    let y = this.max;
    this.max = 1; //for zeroing after ALL function ends
    return y; //not losing the max value in function
  }
  var _max = x;
  if (_max > this.max) {
    this.max = _max;
  }
  return this;
}
function getCur(x) {
  if (this.cur == undefined) {
    //for first call
    this.cur = 1;
  }
  if (x == undefined) {
    //for zeroing
    this.cur = 1;
    return this.cur;
  }
  var _cur = this.cur + 1;
  this.cur = _cur;
  return this.cur;
}
