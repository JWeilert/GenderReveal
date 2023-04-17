import pinkBoxC from "./Images/Pink_Closed.PNG";
import pinkBoxO from "./Images/Pink_Open.PNG";
import blueBoxC from "./Images/Blue_Closed.PNG";
import blueBoxO from "./Images/Blue_open.PNG";
import Confetti from "react-confetti";
import React, { useState, useRef, useEffect } from "react";

import "./Css/Guess.css";

const Guess = () => {
  const [boyBox, setBoyBox] = useState(true);
  const [girlBox, setGirlBox] = useState(true);
  const [correct, setCorrect] = useState(null);

  const [open, setOpen] = useState(false);

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setHeight(750);
    setWidth(1500);
  }, []);

  return (
    <div className="guess">
      {open ? (
        <div>
          {correct ? (
            <div>
              <Confetti
                className="confetti"
                numberOfPieces={150}
                width={width}
                height={height}
              />
              <div className="showBoy">
                <h1>It's a Boy!</h1>
              </div>
            </div>
          ) : (
            <div className="showGirl">
              <h1>Maybe The Other One?</h1>
            </div>
          )}
        </div>
      ) : null}
      <div className="guessBox">
        <img
          className="box boyB"
          src={boyBox ? blueBoxC : blueBoxO}
          onClick={() => {
            setBoyBox(!boyBox);
            setCorrect(!correct);
            if (boyBox === true) {
              setGirlBox(true);
              setOpen(true);
            }
            if (boyBox === false && girlBox === true) {
              console.log("Open");
              setOpen(false);
            }
          }}
        />
      </div>
      <div className="guessBox">
        <img
          className="box girlB"
          src={girlBox ? pinkBoxC : pinkBoxO}
          onClick={() => {
            setGirlBox(!girlBox);
            console.log(girlBox);
            if (girlBox === true) {
              setBoyBox(true);
              setCorrect(false);
              setOpen(true);
            }
            if (boyBox === true && girlBox === false) {
              console.log("Open");
              setOpen(false);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Guess;
