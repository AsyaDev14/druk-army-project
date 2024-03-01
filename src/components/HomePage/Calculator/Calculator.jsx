"use client";

import { useState } from "react";
import css from "./Calculator.module.css";

const Calculator = () => {
  const [quality, setQuality] = useState(500);

  const handleRange = (event) => {
    const money = event.target.value;
    setQuality(money);
  };

  return (
    <div className={css.container}>
      <div className={css.firstPart}>
        <div className={css.firstPart_textContent}>
          <h2>личило</h2>
          <h3>який принтер обрати</h3>
          <p>
            Обирайте принтер виходячи з кільності грошей, яку ви можете
            витратити на пластик кожного місяця. В середньому кілограм пластику
            (PLA, PEGT) коштує 500 грн.
          </p>
        </div>

        <div>
          <label htmlFor="money" className={css.inputContainer}>
            <input
              type="range"
              min={0}
              max={1000}
              name="money"
              id="money"
              className={css.rangeScale}
              onChange={handleRange}
            />
            <span className={css.fillRange} style={{width: quality/1000*296}}></span>
          </label>
        </div>
      </div>
      <div className={css.secondPart}>
        <div className={css.secondPart_textContent}></div>
        <div></div>
      </div>
    </div>
  );
};

export default Calculator;
