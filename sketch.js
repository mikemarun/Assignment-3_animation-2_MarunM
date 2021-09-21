
// when boxY_01>600 || boxY_01=0;
let boxY_01= 175;
let boxY_01Original = 175;
let speed = 0;


let boxY_02= 190;
let boxY_02Original = 190;
let speed2 = 0;


let boxY_03= 230;
let boxY_03Original = 230;
let speed3 = 0;


let circY_04= 230;
let circY_04Original = 230;


let circY_05= 371;
let circY_05Original = 371;

let circY_06= 230;
let circY_06Original = 230;

let circY_07= 371;
let circY_07Original = 371;


let eliY_08= 291;
let eliY_08Original = 291;

let eliY_09= 313;
let eliY_09Original = 313;

let eliY_10= 313;
let eliY_10Original = 313;


let squaY_11= 287;
let squaY_11Original = 287;


let eliY_12= 270;
let eliY_12Original = 270;

let eliY_13= 270;
let eliY_13Original = 270;


let squaY_14= 270;
let squaY_14Original = 270;


let circY_15= 276;
let circY_15Original = 276;

let circY_16= 280.5;
let circY_16Original = 280.5;

let circY_17= 281;
let circY_17Original = 281;


let boxY_18= 231;
let boxY_18Original = 231;

let boxY_19= 231;
let boxY_19Original = 231;

let boxY_20= 207;
let boxY_20Original = 207;

let boxY_21= 351;
let boxY_21Original = 351;

let boxY_22= 207;
let boxY_22Original = 207;

let boxY_23= 351;
let boxY_23Original = 351;

function setup() {
  // put setup code here
    createCanvas(600, 600);
    // speed = random(1,7);
    speed = 3;
    speed2 = 5;
    speed3 = 6;
}

function draw() {
  // put drawing code here
    background(220);
    noStroke()


  fill(color(133, 187, 101))
  rect(50, boxY_01, 500, 250)
  boxY_01 = boxY_01 + speed;

  // When boxY_01 > 600, then boxY has to go back to the top of the screen
  // When boxY_01 > 600, then boxY = 0;

  if (boxY_01 > 600) {
    boxY_01 = 0;
  }
  if (boxY_01 >= boxY_01Original-2 && boxY_01 <= boxY_01Original+2) {
    speed = 0;
  }
  console.log(boxY_01)



  fill(color(17, 140, 79))
  rect(65, boxY_02, 470, 220)
  boxY_02 = boxY_02+ speed2;

  if (boxY_02 > 600) {
    boxY_02 = 0;
  }
  if (boxY_02 >= boxY_02Original-2 && boxY_02 <= boxY_02Original+2) {
    speed2 = 0;
  }


  fill(color(133, 187, 101))
  rect(105, boxY_03, 390, 140)
  boxY_03 = boxY_03+ speed3;

  if (boxY_03 > 600) {
    boxY_03 = 0;
  }
  if (boxY_03 >= boxY_03Original-2 && boxY_03 <= boxY_03Original+2) {
    speed3 = 0;
  }



  fill(color(17, 140, 79))
  circle( 102, circY_04, 60)
  circY_04 = circY_04 + speed;

  if (circY_04 > 600) {
    circY_04 = 0;
  }
  if (circY_04 >= circY_04Original-2 && circY_04 <= circY_04Original+2) {
    speed = 0;
  }



  fill(color(17, 140, 79))
  circle( 102, circY_05, 50)
  circY_05 = circY_05+ speed2;

  if (circY_05 > 600) {
    circY_05 = 0;
  }
  if (circY_05 >= circY_05Original-2 && circY_05 <= circY_05Original+2) {
    speed2 = 0;
  }



  fill(color(17, 140, 79))
  circle( 498, circY_06, 60)
  circY_06 = circY_06+ speed3;

    if (circY_06 > 600) {
      circY_06 = 0;
    }
    if (circY_06 >= circY_06Original-2 && circY_06 <= circY_06Original+2) {
      speed3 = 0;
    }



  fill(color(17, 140, 79))
  circle( 498, circY_07, 50)
  circY_07 = circY_07+ speed;

      if (circY_07 > 600) {
        circY_07 = 0;
      }
      if (circY_07 >= circY_07Original-2 && circY_07 <= circY_07Original+2) {
        speed = 0;
      }



  fill(color(17, 140, 79))
  ellipse(300, eliY_08, 110, 157)
  eliY_08 = eliY_08+ speed2;

        if (eliY_08 > 600) {
          eliY_08 = 0;
        }
        if (eliY_08 >= eliY_08Original-2 && eliY_08 <= eliY_08Original+2) {
          speed2 = 0;
        }



  fill(color(133, 187, 101))
  ellipse(300, eliY_09, 65, 60)
  eliY_09 = eliY_09+ speed3;

          if (eliY_09 > 600) {
            eliY_09 = 0;
          }
          if (eliY_09 >= eliY_09Original-2 && eliY_09 <= eliY_09Original+2) {
            speed3 = 0;
          }



  fill(color(17, 140, 79))
  ellipse(300, eliY_10, 30, 25)
  eliY_10 = eliY_10+ speed;

          if (eliY_10 > 600) {
            eliY_10 = 0;
          }
          if (eliY_10 >= eliY_10Original-2 && eliY_10 <= eliY_10Original+2) {
            speed = 0;
          }



  fill(color(17, 140, 79))
  square(265, squaY_11, 29)
  squaY_11 = squaY_11+ speed2;

          if (squaY_11 > 600) {
            squaY_11 = 0;
          }
          if (squaY_11 >= squaY_11Original-2 && squaY_11 <= squaY_11Original+2) {
            speed2 = 0;
          }



  fill(color(133, 187, 101))
  ellipse(300, eliY_12, 65, 60)
  eliY_12 = eliY_12+ speed3;

          if (eliY_12 > 600) {
            eliY_12 = 0;
          }
          if (eliY_12 >= eliY_12Original-2 && eliY_12 <= eliY_12Original+2) {
            speed3 = 0;
          }



  fill(color(17, 140, 79))
  ellipse(300, eliY_13, 30, 25)
  eliY_13 = eliY_13+ speed;

            if (eliY_13 > 600) {
              eliY_13 = 0;
            }
            if (eliY_13 >= eliY_13Original-2 && eliY_13 <= eliY_13Original+2) {
              speed = 0;
            }



  fill(color(17, 140, 79))
  square(314, squaY_14, 18)
  squaY_14 = squaY_14+ speed2;

            if (squaY_14 > 600) {
              squaY_14 = 0;
            }
            if (squaY_14 >= squaY_14Original-2 && squaY_14 <= squaY_14Original+2) {
              speed2 = 0;
            }



  fill(color(17, 140, 79))
  circle(310, circY_15, 20)
  circY_15 = circY_15+ speed3;

        if (circY_15 > 600) {
          circY_15 = 0;
        }
        if (circY_15 >= circY_15Original-2 && circY_15 <= circY_15Original+2) {
          speed3 = 0;
        }


  fill(color(17, 140, 79))
  circle(324, circY_16, 20)
  circY_16 = circY_16+ speed;

        if (circY_16 > 600) {
          circY_16 = 0;
        }
        if (circY_16 >= circY_16Original-2 && circY_16 <= circY_16Original+2) {
          speed = 0;
        }



  fill(color(17, 140, 79))
  circle(323, circY_17, 20)
  circY_17 = circY_17+ speed2;

        if (circY_17 > 600) {
          circY_17 = 0;
        }
        if (circY_17 >= circY_17Original-2 && circY_17 <= circY_17Original+2) {
          speed2 = 0;
        }



  fill(color(133, 187, 101))
  rect(290, boxY_18, 7, 120)
  boxY_18 = boxY_18+ speed3;

  if (boxY_18 > 600) {
    boxY_18 = 0;
  }
  if (boxY_18 >= boxY_18Original-2 && boxY_18 <= boxY_18Original+2) {
    speed3 = 0;
  }



  fill(color(133, 187, 101))
  rect(305, boxY_19, 7, 120)
  boxY_19 = boxY_19+ speed;

    if (boxY_19 > 600) {
      boxY_19 = 0;
    }
    if (boxY_19 >= boxY_19Original-2 && boxY_19 <= boxY_19Original+2) {
      speed = 0;
    }



  fill(color(133, 187, 101))
  rect(97, boxY_20, 12, 42)
  boxY_20 = boxY_20+ speed2;

    if (boxY_20 > 600) {
      boxY_20 = 0;
    }
    if (boxY_20 >= boxY_20Original-2 && boxY_20 <= boxY_20Original+2) {
      speed2 = 0;
    }



  fill(color(133, 187, 101))
  rect(98, boxY_21, 10, 38)
  boxY_21 = boxY_21+ speed3;

    if (boxY_21 > 600) {
      boxY_21 = 0;
    }
    if (boxY_21 >= boxY_21Original-2 && boxY_21 <= boxY_21Original+2) {
      speed3 = 0;
    }



  fill(color(133, 187, 101))
  rect(493, boxY_22, 12, 42)
  boxY_22 = boxY_22+ speed;

    if (boxY_22 > 600) {
      boxY_22 = 0;
    }
    if (boxY_22 >= boxY_22Original-2 && boxY_22 <= boxY_22Original+2) {
      speed = 0;
    }




  fill(color(133, 187, 101))
  rect(493, boxY_23, 10, 38)
  boxY_23 = boxY_23+ speed2;

    if (boxY_23 > 600) {
      boxY_23 = 0;
    }
    if (boxY_23 >= boxY_23Original-2 && boxY_23 <= boxY_23Original+2) {
      speed2 = 0;
    }



}
