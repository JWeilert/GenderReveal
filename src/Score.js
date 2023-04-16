import "./Css/Score.css";
import girl from "./Images/Girl.png";
import boy from "./Images/Boy.png";
import mom from "./Images/Mom.png";
import { useNavigate } from "react-router-dom";

const Score = (props) => {
  const navigate = useNavigate();
  return (
    <div className="whole">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="score">
        <div className="full">
          <h1>Wives' Tales</h1>
          <h3>Cravings</h3>
          <div className="line">
            <img className="momOne" src={mom} />
            <img className="boy" src={boy} />
            <p></p>
            <img className="girl" src={girl} />
          </div>
          <div className="label">
            <p>Sweet</p>
            <p>Salty</p>
          </div>
          {/*  */}
          <h3>Facial Complextion</h3>
          <div className="line">
            <img className="momTwo" src={mom} />
            <img className="boy" src={boy} />
            <p></p>
            <img className="girl" src={girl} />
          </div>
          <div className="label">
            <p>Glowing</p>
            <p>Breaking Out</p>
          </div>
          {/*  */}
          <h3>Belly Shape</h3>
          <div className="line">
            <img className="momThree" src={mom} />
            <img className="boy" src={boy} />
            <p></p>
            <img className="girl" src={girl} />
          </div>
          <div className="label">
            <p>Round</p>
            <p>Wide</p>
          </div>
          {/*  */}
          <h3>Hands</h3>
          <div className="line">
            <img className="momFour" src={mom} />
            <img className="boy" src={boy} />
            <p></p>
            <img className="girl" src={girl} />
          </div>
          <div className="label">
            <p>Dry</p>
            <p>Silky</p>
          </div>
          {/*  */}
          <h3>Emotions</h3>
          <div className="line">
            <img className="momFive" src={mom} />
            <img className="boy" src={boy} />
            <p></p>
            <img className="girl" src={girl} />
          </div>
          <div className="label">
            <p>Relaxed</p>
            <p>Moody</p>
          </div>
          {/*  */}
          <h3>Baby's Heart Rate</h3>
          <div className="line">
            <img className="momSix" src={mom} />
            <img className="boy" src={boy} />
            <p></p>
            <img className="girl" src={girl} />
          </div>
          <div className="label">
            <p>{"<140"}</p>
            <p>{">140"}</p>
          </div>
          {/*  */}
          <h3>Headaches</h3>
          <div className="line">
            <img className="momSeven" src={mom} />
            <img className="boy" src={boy} />
            <p></p>
            <img className="girl" src={girl} />
          </div>
          <div className="label">
            <p>Yes</p>
            <p>No</p>
          </div>
          {/*  */}
          <h3>Cold Feet</h3>
          <div className="line">
            <img className="momEight" src={mom} />
            <img className="boy" src={boy} />
            <p></p>
            <img className="girl" src={girl} />
          </div>
          <div className="label">
            <p>Yes</p>
            <p>No</p>
          </div>
          {/*  */}
          <h3>Dad's Weight</h3>
          <div className="line">
            <img className="momNine" src={mom} />
            <img className="boy" src={boy} />
            <p></p>
            <img className="girl" src={girl} />
          </div>
          <div className="label">
            <p>Same</p>
            <p>Gained</p>
          </div>
          {/*  */}
          <button className="guessNow" onClick={() => navigate("/guess")}>
            Time to Guess!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Score;
