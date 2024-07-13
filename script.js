let coords = [0, 0, 0];
let volume = [1, 1, 1];

function rotatingCube(direction) {
  switch (direction) {
    case rotateUp:
      coords[0] = coords[0] - 90;
      break;
    case rotateDown:
      coords[0] = coords[0] + 90;
      break;
    case rotateLeft:
      coords[1] = coords[1] + 90;
      break;
    case rotateRight:
      coords[1] = coords[1] - 90;
      break;
    case rotateClockwise:
      coords[2] = coords[2] + 90;
      break;
    case rotateAntiClockwise:
      coords[2] = coords[2] - 90;
      break;
    case upScaleX:
      volume[0] += 1;
      break;
    case downScaleX:
      volume[0] -= 1;
      break;
    case upScaleY:
      volume[1] += 1;
      break;
    case downScaleY:
      volume[1] -= 1;
      break;
    case upScaleZ:
      volume[2] += 1;
      break;
    case downScaleZ:
      volume[2] -= 1;
      break;

    default:
      window.alert("HOW!!????");
      break;
  }
  document.querySelector("#cube").style.transform = `
  rotateX(${coords[0]}deg) 
  rotateY(${coords[1]}deg)
  rotateZ(${coords[2]}deg)
  scaleX(${volume[0]}) 
  scaleY(${volume[2]})
  scaleZ(${volume[1]})
`;
  updatedCorrds();
  console.log(coords);
  console.log(volume);
}

function updatedCorrds() {
  document.getElementById("xDeg").innerText = coords[0];
  document.getElementById("yDeg").innerText = coords[1];
  document.getElementById("zDeg").innerText = coords[2];
  document.getElementById("xScale").innerText = volume[0];
  document.getElementById("yScale").innerText = volume[1];
  document.getElementById("zScale").innerText = volume[2];
}
function rotateUp() {}
function rotateDown() {}
function rotateLeft() {}
function rotateRight() {}
function rotateClockwise() {}
function rotateAntiClockwise() {}
function upScaleX() {}
function downScaleX() {}
function upScaleY() {}
function downScaleY() {}
function upScaleZ() {}
function downScaleZ() {}
