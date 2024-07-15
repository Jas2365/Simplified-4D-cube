let coords = [0, 0, 0];
let volume = [1, 1, 1];
let front = [0, 0, 110];
let back = [0, 0, -110];
let c = 1;

function rotatingCube(direction) {
  switch (direction) {
    case rotatePosX:
      coords[0] = coords[0] + 90;
      break;
    case rotateNegX:
      coords[0] = coords[0] - 90;
      break;
    case rotatePosY:
      coords[1] = coords[1] + 90;
      break;
    case rotateNegY:
      coords[1] = coords[1] - 90;
      break;
    case rotatePosZ:
      coords[2] = coords[2] + 90;
      break;
    case rotateNegZ:
      coords[2] = coords[2] - 90;
      break;
    // case upScaleX:
    //   volume[0] += 1;
    //   break;
    // case downScaleX:
    //   volume[0] -= 1;
    //   break;
    // case upScaleY:
    //   volume[1] += 1;
    //   break;
    // case downScaleY:
    //   volume[1] -= 1;
    //   break;
    // case upScaleZ:
    //   volume[2] += 1;
    //   break;
    // case downScaleZ:
    //   volume[2] -= 1;
    //   break;

    default:
      window.alert("HOW!!????");
      break;
  }
//   let x = coords[0] / 90;
//   let y = coords[1] / 90;
//   let z = coords[2] / 90;
//   switch (direction) {
//     case rotatePosX:
//       if (y % 2) {
//         front = [-110, 0, 0];
//         back = [110, 0, 0];
//         console.log("one");
//       } else if (x % 2) {
//         front = [0, -110, 0];
//         back = [0, 110, 0];
//         console.log("two");
//       } else {
//         front = [0, 0, -110];
//         back = [0, 0, 110];
//         console.log("three");
//       }
//       break;
//     case rotateNegX:
//       if (y % 2) {
//         front = [-110, 0, 0];
//         back = [110, 0, 0];
//       } else if (x % 2) {
//         front = [0, -110, 0];
//         back = [0, 110, 0];
//       } else {
//         front = [0, 0, -110];
//         back = [0, 0, 110];
//       }
//       break;
//     case rotatePosY:
//       if (x % 2) {
//         if (y % 2) {
//           front = [110, 0, 0];
//           back = [-110, 0, 0];
//           console.log("xxxx");
//         } else {
//           front = [0, 110, 0];
//           back = [0, -110, 0];
//           console.log("first");
//         }
//       } else if (z % 2) {
//         if (y % 2) {
//           front = [110, 0, 0];
//           back = [-110, 0, 0];
//           console.log("yyyy");
//         } else {
//           front = [0, 0, 110];
//           back = [0, 0, -110];
//           console.log("second");
//         }
//       } else {
//         if (y % 2) {
//           front = [110, 0, 0];
//           back = [-110, 0, 0];
//           console.log("yyyy");
//         } else {
//           front = [0, 110, 0];
//           back = [0, -110, 0];
//           console.log("last");
//         }
//       }
//       break;
//     case rotateNegY:
//       if (x % 2) {
//         if (y % 2) {
//           front = [110, 0, 0];
//           back = [-110, 0, 0];
//           console.log("xxxx");
//         } else {
//           front = [0, 110, 0];
//           back = [0, -110, 0];
//           console.log("first");
//         }
//       } else if (z % 2) {
//         if (y % 2) {
//           front = [110, 0, 0];
//           back = [-110, 0, 0];
//           console.log("zzzz");
//         } else {
//           front = [0, 0, 110];
//           back = [0, 0, -110];
//           console.log("second");
//         }
//       } else {
//         if (y % 2) {
//           front = [110, 0, 0];
//           back = [-110, 0, 0];
//           console.log("yyyy");
//         } else {
//           front = [0, 110, 0];
//           back = [0, -110, 0];
//           console.log("lasst");
//         }
//       }
     
// }

  document.querySelector("#cube").style.transform = `
  rotateX(${coords[0]}deg) 
  rotateY(${coords[1]}deg)
  rotateZ(${coords[2]}deg)
 `;

  updatedCorrds();
  console.log(coords);
  console.log(volume);
}

function updatedCorrds() {
  document.getElementById("xDeg").innerText = coords[0];
  document.getElementById("yDeg").innerText = coords[1];
  document.getElementById("zDeg").innerText = coords[2];
}
function rotatePosX() {}
function rotateNegX() {}
function rotatePosY() {}
function rotateNegY() {}
function rotatePosZ() {}
function rotateNegZ() {}
function upScaleX() {}
function downScaleX() {}
function upScaleY() {}
function downScaleY() {}
function upScaleZ() {}
function downScaleZ() {}
