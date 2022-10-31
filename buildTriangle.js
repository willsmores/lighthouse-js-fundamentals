function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(rows) {
  for (let i = rows; i >= 0; i--) {
    console.log(makeLine(rows - i));
  }
}

buildTriangle(10);