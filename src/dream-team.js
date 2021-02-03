module.exports = function createDreamTeam(members) {
  if (members == null) {
    return false;
  }
  if (typeof members != "object") {
    return false;
  }
  if (
    members[0] == undefined &&
    members[1] == undefined &&
    members[2] == undefined
  ) {
    return false;
  }
  let name = "";
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      for (j = 0; j < members[i].length; j++) {
        if (members[i][j] != " ") {
          name += members[i][j].toUpperCase();
          break;
        }
      }
    }
  }
  let arr = name.split("");
  name = arr.sort().join("");
  return name;
};
