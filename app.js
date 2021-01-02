const boxes = document.querySelectorAll(".box");
const nombreGanador = document.getElementById("ganador");
let turno = 0;
let ganador = false;

const reset = () => {
  ganador = false;
  nombreGanador.innerHTML = "";
  for (const box of boxes) {
    box.innerHTML = "";
  }
  playGame();
};

const gano = (box1, box2, box3) => {
  ganador = true;
  nombreGanador.innerHTML = `Ganó la ${box1.value}`;
  return ganador;
};

const validar = () => {
  if (boxes[0].value === boxes[1].value && boxes[0].value === boxes[2].value) {
    gano(boxes[0], boxes[1], boxes[2]);
  } else if (
    boxes[3].value === boxes[4].value &&
    boxes[3].value === boxes[5].value
  ) {
    gano(boxes[3], boxes[4], boxes[5]);
  } else if (
    boxes[6].value === boxes[7].value &&
    boxes[6].value === boxes[8].value
  ) {
    gano(boxes[6], boxes[7], boxes[8]);
  }

  if (boxes[0].value === boxes[3].value && boxes[0].value === boxes[6].value) {
    gano(boxes[0], boxes[3], boxes[6]);
  } else if (
    boxes[1].value === boxes[4].value &&
    boxes[1].value === boxes[7].value
  ) {
    gano(boxes[1], boxes[4], boxes[7]);
  } else if (
    boxes[2].value === boxes[5].value &&
    boxes[2].value === boxes[8].value
  ) {
    gano(boxes[2], boxes[5], boxes[8]);
  }

  if (boxes[0].value === boxes[4].value && boxes[0].value === boxes[8].value) {
    gano(boxes[0], boxes[4], boxes[8]);
  } else if (
    boxes[2].value === boxes[4].value &&
    boxes[2].value === boxes[6].value
  ) {
    gano(boxes[2], boxes[4], boxes[6]);
  }
};

const pintar = (box) => {
  if (box.innerHTML === "" && !ganador) {
    if (turno % 2 == 0) {
      box.innerHTML = "X";
      box.value = "X";
    } else {
      box.innerHTML = "O";
      box.value = "O";
    }

    validar();
    turno++;
  }
};

const playGame = () => {
  for (const box of boxes) {
    box.value = box.id;
    box.addEventListener("click", () => pintar(box));
  }

  if (ganador) {
    return;
  }
};

const resetBtn = document
  .getElementById("reset-btn")
  .addEventListener("click", () => reset());

playGame();
