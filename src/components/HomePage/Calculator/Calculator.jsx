"use client";

import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import ModelsPrinters from "./ModelsPrinters/ModelsPrinters";
import css from "./Calculator.module.css";

const Calculator = () => {
  // Ліміт при якому не потрібно змінювати попап бігунку
  const ableLimit = useMediaQuery({ minWidth: 370 });
  // ======================================================
  const elementRef = useRef(null);
  const [quality, setQuality] = useState(500);
  const [widthValue, setWidthValue] = useState(148);
  const [xCoordinate, setXCoordinate] = useState(null);

  // Отримаємо координату X коли рухаємо контролер
  useEffect(() => {
    if (quality !== 500) {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setXCoordinate(rect.left);
      }
    }
  }, [quality]);

  // Функція обробки значень інпуту з корегуванням значень і перетворенням  значень в ширину
  const handleRange = (event) => {
    const money = event.target.value;
    setQuality(Math.round(money));
    let value = (money / 1000) * 296;
    if (money <= 350) {
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
            {/* Зміна попап буде залежати від координати Х, ширини вьюпорту, та показника лічильника */}
            <span
              className={
                (xCoordinate <= 2 && !ableLimit) ||
                (quality <= 70 && !ableLimit)
                  ? css.counterLeftLimit
                  : (xCoordinate >= 245 && !ableLimit) ||
                    (quality >= 912 && !ableLimit)
                  ? css.counterRightLimit
                  : css.counter
              }
              style={{ marginLeft: widthValue - 12 }}
              ref={elementRef}
            >
              <Icon
                className={
                  (xCoordinate <= 2 && !ableLimit) ||
                  (quality <= 70 && !ableLimit)
                    ? css.shapeLeftLimit
                    : (xCoordinate >= 245 && !ableLimit) ||
                      (quality >= 912 && !ableLimit)
                    ? css.shapeRightLimit
                    : css.shape
                }
                name={"icon-modal"}
              />
              <p className={css.showResult}>{quality <= 100 ? 100 : quality}$</p>
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
     <ModelsPrinters quality={quality}/>
    </div>
  );
};

export default Calculator;
