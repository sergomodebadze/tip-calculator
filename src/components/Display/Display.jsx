import Style from "../Display/Display.module.css";

const Display = (props) => {
  const hendleClick = () => {
    props.setBill("");
    props.setPeople("");
    props.setPercentage("0");
  };
  return (
    <div className={Style.conteinerr}>
      <div className={Style.firstCounter}>
        <div>
          <div className={Style.text}>Tip Amount</div>
          <div className={Style.person}>/ Person</div>
        </div>
        <div className={Style.numbers}>{"$" + (+props.amount).toFixed(2)}</div>
      </div>
      <div className={Style.SecondCounter}>
        <div>
          <div className={Style.text}>Total</div>
          <div className={Style.person}>/ Person</div>
        </div>
        <div className={Style.numbers}>{"$" + (+props.total).toFixed(2)}</div>
      </div>
      <div className={Style.buttonDiv}>
        <button onClick={hendleClick} className={Style.button}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Display;
