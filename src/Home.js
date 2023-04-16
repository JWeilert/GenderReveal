import "./Css/Home.css";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate();

  return (
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
      <div id="Box">
        <button onClick={() => navigate("/score")}>Weilert Baby</button>
      </div>
    </div>
  );
};

export default Home;
