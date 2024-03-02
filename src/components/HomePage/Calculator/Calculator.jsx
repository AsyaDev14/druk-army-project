"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import css from "./Calculator.module.css";

const Calculator = () => {
  const [quality, setQuality] = useState(500);
  const [widthValue, setWidthValue] = useState(148);

  const handleRange = (event) => {
    const money = event.target.value;
    setQuality(Math.round(money));
    let value = money/1000*296;
     if(money <= 350) {
      value += 2;
     } else if (money >= 700) {
      value -= 2;
     } else {
      value;
     }
    
    setWidthValue(Math.round(value));
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
            <span className={css.counter} style={{marginLeft: widthValue - 12}}>
              <Icon className={css.shape} name={"icon-modal"}/>
              <p className={css.showResult}>{quality}$</p>
            </span>
            <input
              type="range"
              min={0}
              max={1000}
              name="money"
              id="money"
              className={css.rangeScale}
              onChange={handleRange}
            />
            <span
              className={css.fillRange}
              style={{ width: widthValue }}
            ></span>
          </label>
          <div className={css.scaleContainer}>
            <Image
              src={"/img/home/calculator/scale.png"}
              alt="Range scale from 0 to 1000$"
              width={297}
              height={44}
              className={css.scale}
            />
          </div>
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
