let a1, a2, a3, a4, a5, a6, submit;
let score = 0;
let done = false;

function setup() {
  const canvas = createCanvas(400, 100);

  a1 = select("#a1");
  a2 = select("#a2");
  a3 = select("#a3");
  a4 = select("#a4");
  a5 = select("#a5");
  a6 = select("#a6");
  submit = select("#submit");
  submit.mousePressed(cheakAnswer);
}

function draw() {
  background("white");
  textSize(54);
  textFont("VT323");
  if (score >= 12 && done === true) {
    fill("green");
    text("㊣ All Correct ㊣", width / 9, height / 2);
  } else if (score < 12 && done === true) {
    fill("red");
    text("🙅‍♂️ Incorrect 🙅‍♂️", width / 8, height / 2);
  }
}

function cheakAnswer() {
  done = true;
  if (a1.value() === "Butterfly" || a1.value() === "butterfly") {
    score = score + 1;
  }
  if (a2.value() === "Spider" || a2.value() === "spider") {
    score = score + 1;
  }
  if (a3.value() === "Housefly" || a3.value() === "housefly") {
    score = score + 1;
  }
  if (a4.value() === "Hydra" || a4.value() === "hydra") {
    score = score + 1;
  }
  if (a5.value() === "Frog" || a5.value() === "frog") {
    score = score + 1;
  }
  if (a6.value() === "Amoeba" || a6.value() === "amoeba") {
    score = score + 1;
  }
}
