import "../Form/Form.css";
import Img from "../../images/icon-dollar.svg";
import Img2 from "../../images/icon-person.svg";
import { useState } from "react";
import Display from "../Display/Display";

const Form = () => {
  const item = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percentage, setPercentage] = useState("");

  const hendleClick = (event) => {
    setPercentage(Number(event.target.value));
  };

  let total = "0.00";
  let amount = "0.00";

  if (bill > 0 && people > 0 && percentage > 0) {
    total = (bill + bill * (percentage / 100)) / people;
    amount = (bill * (percentage / 100)) / people;
  }

  return (
    <div className="maiConteiner">
      <div className="conteiner">
        <div className="text">Bill</div>
        <div className="inputDiv">
          <img className="img" src={Img} alt="img" />
          <input
            value={bill}
            className="input"
            type="number"
            placeholder="0"
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <div className="text">Select Tip %</div>
        <div className="buttonDiv">
          {item.map((percent) => {
            return (
              <button
                value={percent}
                className="percentButton"
                onClick={hendleClick}
              >
                {percent}
              </button>
            );
          })}
          <button className="Custom">Custom</button>
        </div>
        <div className="text">Number of People</div>
        <div className="inputDiv2">
          <img className="img" src={Img2} alt="img" />
          <input
            className="input"
            type="number"
            placeholder="0"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
          />
        </div>
      </div>
      <Display
        amount={amount}
        total={total}
        setBill={setBill}
        setPeople={setPeople}
        setPercentage={setPercentage}
      />
    </div>
  );
};

export default Form;
