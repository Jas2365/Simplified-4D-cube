let coords = [0, 0, 0];
let fourth = [0, 0, 0];
let cubeCoo3 = [0, 0, 0];
let cubeCoo4 = [0, 0, 0];
let cubeCoo5 = [0, 0, 0];
let cubeCoo6 = [0, 0, 0];
let cubeCoo7 = [0, 0, 0];
let cubeCoo8 = [0, 0, 0];
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

    default:
      window.alert("HOW!!????");
      break;
  }
  document.querySelector("#cube").style.transform = `
  rotateX(${coords[0]}deg) 
  rotateY(${coords[1]}deg)
  rotateZ(${coords[2]}deg)
 `;
  updatedCorrds();
}

function updatedCorrds() {
  document.getElementById("xDeg").innerText = coords[0];
  document.getElementById("yDeg").innerText = coords[1];
  document.getElementById("zDeg").innerText = coords[2];
}

function rotate4dAxis(dir) {
  switch (dir) {
    case rotate4dPosX:
      xRing();
      break;
    case rotate4dNegX:
      xRingInv();
      break;
    case rotate4dPosY:
      yRing();
      break;
    case rotate4dNegY:
      yRingInv();
      break;
    case rotate4dPosZ:
      zRing();
      break;
    case rotate4dNegZ:
      zRingInv();
      break;

    default:
      window.alert("HOW!!????");
      break;
  }
}

function xRing() {
  cubeCoo3[2] -= 90;
  cube3(); // this should rotate -ve Z
  cubeCoo6[2] += 90;
  cube6(); // this should rotate +ve Z
  cubeCoo7[1] -= 90;
  cube7(); // this should rotate -ve Y
  cubeCoo8[1] += 90;
  cube8(); // this should rotate +ve Y
}
function xRingInv() {
  cubeCoo3[2] += 90;
  cube3(); // this should rotate +ve Z
  cubeCoo6[2] -= 90;
  cube6(); // this should rotate =ve Z
  cubeCoo7[1] += 90;
  cube7(); // this should rotate +ve Y
  cubeCoo8[1] -= 90;
  cube8(); // this should rotate -ve Y
}

function yRing() {
  cubeCoo4[2] -= 90;
  cube4(); // this should rotate -ve Z
  cubeCoo5[2] += 90;
  cube5(); // this should rotate +ve Z
  cubeCoo7[0] -= 90;
  cube7(); // this should rotate -ve X
  cubeCoo8[0] += 90;
  cube8(); // this should rotate +ve X
}
function yRingInv() {
  cubeCoo4[2] += 90;
  cube4(); // this should rotate +ve Z
  cubeCoo5[2] -= 90;
  cube5(); // this should rotate -ve Z
  cubeCoo7[0] += 90;
  cube7(); // this should rotate +ve X
  cubeCoo8[0] -= 90;
  cube8(); // this should rotate -ve X}
}
function zRing() {
  cubeCoo3[0] += 90;
  cube3(); // this should rotate +ve X
  cubeCoo4[1] -= 90;
  cube4(); // this should rotate -ve Y
  cubeCoo5[1] += 90;
  cube5(); // this should rotate +ve Y
  cubeCoo6[0] -= 90;
  cube6(); // this should rotate -ve X
}
function zRingInv() {
  cubeCoo3[0] -= 90;
  cube3(); // this should rotate -ve X
  cubeCoo4[1] += 90;
  cube4(); // this should rotate +ve Y
  cubeCoo5[1] -= 90;
  cube5(); // this should rotate -ve Y
  cubeCoo6[0] += 90;
  cube6(); // this should rotate +ve X
}
function cube2() {
  document.querySelector("#cube-2").style.transform = `
  rotateX(${fourth[0]}deg) 
  rotateY(${fourth[1]}deg)
  rotateZ(${fourth[2]}deg)
  `;
}
function cube3() {
  document.querySelector("#cube-3").style.transform = `
  rotateX(${cubeCoo3[0]}deg) 
  rotateY(${cubeCoo3[1]}deg)
  rotateZ(${cubeCoo3[2]}deg)
  `;
}
function cube4() {
  document.querySelector("#cube-4").style.transform = `
  rotateX(${cubeCoo4[0]}deg) 
  rotateY(${cubeCoo4[1]}deg)
  rotateZ(${cubeCoo4[2]}deg)
  `;
}
function cube5() {
  document.querySelector("#cube-5").style.transform = `
  rotateX(${cubeCoo5[0]}deg) 
  rotateY(${cubeCoo5[1]}deg)
  rotateZ(${cubeCoo5[2]}deg)
  `;
}
function cube6() {
  document.querySelector("#cube-6").style.transform = `
  rotateX(${cubeCoo6[0]}deg) 
  rotateY(${cubeCoo6[1]}deg)
  rotateZ(${cubeCoo6[2]}deg)
  `;
}
function cube7() {
  document.querySelector("#cube-7").style.transform = `
  rotateX(${cubeCoo7[0]}deg) 
  rotateY(${cubeCoo7[1]}deg)
  rotateZ(${cubeCoo7[2]}deg)
  `;
}
function cube8() {
  document.querySelector("#cube-8").style.transform = `
  rotateX(${cubeCoo8[0]}deg) 
  rotateY(${cubeCoo8[1]}deg)
  rotateZ(${cubeCoo8[2]}deg)
  `;
}

function rotatePosX() {}
function rotateNegX() {}
function rotatePosY() {}
function rotateNegY() {}
function rotatePosZ() {}
function rotateNegZ() {}
function rotate4dPosX() {}
function rotate4dNegX() {}
function rotate4dPosY() {}
function rotate4dNegY() {}
function rotate4dPosZ() {}
function rotate4dNegZ() {}
