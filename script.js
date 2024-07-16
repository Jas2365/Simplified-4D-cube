let coords = [0, 0, 0];
let fourth = [0, 0, 0];
let cubeCoo3 = [0, 0, 0];
let cubeCoo4 = [0, 0, 0];
let cubeCoo5 = [0, 0, 0];
let cubeCoo6 = [0, 0, 0];
let cubeCoo7 = [0, 0, 0];
let cubeCoo8 = [0, 0, 0];

window.onload = () => {
  const outer = document.getElementById("cube");
  outer.children[0].style.transform = "translateY(-170px) rotateX(90deg) ";
  outer.children[1].style.transform = "translateY(170px) rotateX(-90deg) ";
  outer.children[2].style.transform = "translateZ(170px) rotateY(0deg) ";
  outer.children[3].style.transform = "translateZ(-170px) rotateY(180deg) ";
  outer.children[4].style.transform = "translateX(170px) rotateY(90deg) ";
  outer.children[5].style.transform = "translateX(-170px) rotateY(-90deg) ";
}; /// this is wher all the coords are

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
  document.querySelector("#box").style.transform = `
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

function rotate4dAniX() {
  // four 4 >> center 2 >> five 5 >> outer 01

  const outer = document.getElementById("cube");
  const center = document.getElementById("cube-2");
  const left = document.getElementById("cube-4");
  const right = document.getElementById("cube-5");

  left.classList = "container-2";
  center.classList = "container-5";
  right.classList = "container";
  outer.classList = "container-4";

  for (let i = 0; i < 6; i++) {
    right.children[i].style.width = "340px";
    right.children[i].style.height = "340px";
    outer.children[i].style.width = "100px";
    outer.children[i].style.height = "100px";
    left.children[i].style.width = "100px";
    left.children[i].style.height = "100px";
    center.children[i].style.width = "100px";
    center.children[i].style.height = "100px";

    if (i == 0) {
      outer.children[i].style.transform = "translateY(-50px) rotateX(90deg) ";
      right.children[i].style.transform = "translateY(-170px) rotateX(90deg) ";
    } else if (i == 1) {
      outer.children[i].style.transform = "translateY(50px) rotateX(-90deg) ";
      right.children[i].style.transform = "translateY(170px) rotateX(-90deg) ";
    } else if (i == 2) {
      outer.children[i].style.transform = "translateZ(50px)  rotateY(0deg) ";
      right.children[i].style.transform = "translateZ(170px) rotateY(0deg) ";
    } else if (i == 3) {
      outer.children[i].style.transform = "translateZ(-50px)  rotateY(180deg) ";
      right.children[i].style.transform = "translateZ(-170px) rotateY(180deg) ";
    } else if (i == 4) {
      outer.children[i].style.transform = "translateX(50px)  rotateY(90deg) ";
      right.children[i].style.transform = "translateX(170px) rotateY(90deg) ";
    } else {
      outer.children[i].style.transform = "translateX(-50px)  rotateY(-90deg) ";
      right.children[i].style.transform = "translateX(-170px) rotateY(-90deg) ";
    }
  }
  right.id = "cube";
  center.id = "cube-5";
  left.id = "cube-2";
  outer.id = "cube-4";
}
function rotate4dAniY() {
  // six 6 >> center 2 >> three 3 >> outer 01

  const outer = document.getElementById("cube");
  const center = document.getElementById("cube-2");
  const up = document.getElementById("cube-3");
  const down = document.getElementById("cube-6");

  down.classList = "container-2";
  center.classList = "container-3";
  up.classList = "container";
  outer.classList = "container-6";

  for (let i = 0; i < 6; i++) {
    up.children[i].style.width = "340px";
    up.children[i].style.height = "340px";
    outer.children[i].style.width = "100px";
    outer.children[i].style.height = "100px";
    down.children[i].style.width = "100px";
    down.children[i].style.height = "100px";
    center.children[i].style.width = "100px";
    center.children[i].style.height = "100px";

    if (i == 0) {
      outer.children[i].style.transform = "translateY(-50px) rotateX(90deg) ";
      up.children[i].style.transform = "translateY(-170px) rotateX(90deg) ";
    } else if (i == 1) {
      outer.children[i].style.transform = "translateY(50px) rotateX(-90deg) ";
      up.children[i].style.transform = "translateY(170px) rotateX(-90deg) ";
    } else if (i == 2) {
      outer.children[i].style.transform = "translateZ(50px)  rotateY(0deg) ";
      up.children[i].style.transform = "translateZ(170px) rotateY(0deg) ";
    } else if (i == 3) {
      outer.children[i].style.transform = "translateZ(-50px)  rotateY(180deg) ";
      up.children[i].style.transform = "translateZ(-170px) rotateY(180deg) ";
    } else if (i == 4) {
      outer.children[i].style.transform = "translateX(50px)  rotateY(90deg) ";
      up.children[i].style.transform = "translateX(170px) rotateY(90deg) ";
    } else {
      outer.children[i].style.transform = "translateX(-50px)  rotateY(-90deg) ";
      up.children[i].style.transform = "translateX(-170px) rotateY(-90deg) ";
    }
  }
  up.id = "cube";
  center.id = "cube-3";
  down.id = "cube-2";
  outer.id = "cube-6";
}
function rotate4dAniZ() {
  // eight 8 >> center 2 >> seven 7 >> outer 01

  const outer = document.getElementById("cube");
  const center = document.getElementById("cube-2");
  const front = document.getElementById("cube-7");
  const back = document.getElementById("cube-8");

  back.classList = "container-2";
  center.classList = "container-7";
  front.classList = "container";
  outer.classList = "container-8";

  for (let i = 0; i < 6; i++) {
    front.children[i].style.width = "340px";
    front.children[i].style.height = "340px";
    outer.children[i].style.width = "100px";
    outer.children[i].style.height = "100px";
    back.children[i].style.width = "100px";
    back.children[i].style.height = "100px";
    center.children[i].style.width = "100px";
    center.children[i].style.height = "100px";

    if (i == 0) {
      outer.children[i].style.transform = "translateY(-50px) rotateX(90deg) ";
      front.children[i].style.transform = "translateY(-170px) rotateX(90deg) ";
    } else if (i == 1) {
      outer.children[i].style.transform = "translateY(50px) rotateX(-90deg) ";
      front.children[i].style.transform = "translateY(170px) rotateX(-90deg) ";
    } else if (i == 2) {
      outer.children[i].style.transform = "translateZ(50px)  rotateY(0deg) ";
      front.children[i].style.transform = "translateZ(170px) rotateY(0deg) ";
    } else if (i == 3) {
      outer.children[i].style.transform = "translateZ(-50px)  rotateY(180deg) ";
      front.children[i].style.transform = "translateZ(-170px) rotateY(180deg) ";
    } else if (i == 4) {
      outer.children[i].style.transform = "translateX(50px)  rotateY(90deg) ";
      front.children[i].style.transform = "translateX(170px) rotateY(90deg) ";
    } else {
      outer.children[i].style.transform = "translateX(-50px)  rotateY(-90deg) ";
      front.children[i].style.transform = "translateX(-170px) rotateY(-90deg) ";
    }
  }
  front.id = "cube";
  center.id = "cube-7";
  back.id = "cube-2";
  outer.id = "cube-8";
}
function rotate4dInv() {
  const outer = document.getElementById("cube");
  const center = document.getElementById("cube-2");

  outer.classList = "container-2";
  center.classList = "container";

  for (let i = 0; i < 6; i++) {
    outer.children[i].style.width = "100px";
    outer.children[i].style.height = "100px";
    center.children[i].style.width = "340px";
    center.children[i].style.height = "340px";
    
    if (i == 0) {
      outer.children[i].style.transform = "translateY(-50px) rotateX(90deg) ";
      center.children[i].style.transform = "translateY(-170px) rotateX(90deg) ";
    } else if (i == 1) {
      outer.children[i].style.transform = "translateY(50px) rotateX(-90deg) ";
      center.children[i].style.transform = "translateY(170px) rotateX(-90deg) ";
    } else if (i == 2) {
      outer.children[i].style.transform = "translateZ(50px)  rotateY(0deg) ";
      center.children[i].style.transform = "translateZ(170px) rotateY(0deg) ";
    } else if (i == 3) {
      outer.children[i].style.transform = "translateZ(-50px)  rotateY(180deg) ";
      center.children[i].style.transform =
        "translateZ(-170px) rotateY(180deg) ";
    } else if (i == 4) {
      outer.children[i].style.transform = "translateX(50px)  rotateY(90deg) ";
      center.children[i].style.transform = "translateX(170px) rotateY(90deg) ";
    } else {
      outer.children[i].style.transform = "translateX(-50px)  rotateY(-90deg) ";
      center.children[i].style.transform =
        "translateX(-170px) rotateY(-90deg) ";
    }
  }
  
  outer.id = "cube-2";
  center.id = "cube";
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
