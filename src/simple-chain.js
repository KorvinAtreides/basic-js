const chainMaker = {
  len: "",
  getLength() {
    let arr = this.len.split("~~");
    return arr.length;
  },
  addLink(value) {
    if (this.len != "") {
      this.len += `~~`;
    }
    if (value === undefined) {
      this.len += `(  )`;
      return this;
    }
    this.len += `( ${String(value)} )`;
    return this;
  },
  removeLink(position) {
    let arr = this.len.split("~~");
    if (
      position < 0 ||
      position >= arr.length ||
      isNaN(position) ||
      typeof position != "number" ||
      !Number.isInteger(position)
    ) {
      this.len = "";
      throw new Error();
    }
    arr.splice(position - 1, 1);
    this.len = arr.join("~~");
    return this;
  },
  reverseChain() {
    let arr = this.len.split("~~");
    this.len = arr.reverse().join("~~");
    return this;
  },
  finishChain() {
    let final = this.len;
    this.len = "";
    return final;
  },
};

module.exports = chainMaker;
