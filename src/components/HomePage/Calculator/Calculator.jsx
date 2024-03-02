"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import ModelsPrinters from "./ModelsPrinters/ModelsPrinters";
import css from "./Calculator.module.css";

const Calculator = () => {
  // Ліміт при якому не потрібно змінювати попап бігунку
  const ableLimit320 = useMediaQuery({ minWidth: 370 });
  const ableLimit480 = useMediaQuery({minWidth: 530});
  const ableLimit768 = useMediaQuery({minWidth: 818});
  const ableLimit960 = useMediaQuery({minWidth: 1010});
  const ableLimit1200 = useMediaQuery({minWidth: 1250});
  // ======================================================
  // ================= MEDIAQUERIES ==========================
  const isMobile = useMediaQuery({minWidth: 320});
  const isMobileEnd = useMediaQuery({ maxWidth: 479.98 });
  const isBigMobile = useMediaQuery({ minWidth: 480 });
  const isBigMobileEnd = useMediaQuery({ maxWidth: 767.98 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isTabletEnd = useMediaQuery({ maxWidth: 959.98 });
  const isBigTablet = useMediaQuery({ minWidth: 960 });
  const isBigTabletEnd = useMediaQuery({ maxWidth: 1199.98 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const isDesktopEnd = useMediaQuery({ maxWidth: 1919.98 });
  const isBigDesktop = useMediaQuery({ minWidth: 1920 });
  // ===========================================================================
  const [quality, setQuality] = useState(500);
  const [minQuality, setMinQuality] = useState(null);
  const [maxQuality, setMaxQuality] = useState(null);
  // =================================================================================================
  const [widthInputRange, setWidthInputRange] = useState(null);
  const [widthValue, setWidthValue] = useState(widthInputRange*0.5);
  const [ableLimit, setAbleLimit] = useState(ableLimit320);
  //  Ширина інпуту в залежності віж ширини вьюпорту
  useEffect(() => {
   if(isMobile && isMobileEnd) {
    setWidthInputRange(296);
    setAbleLimit(ableLimit320)
    setMaxQuality(912);
    setMinQuality(70);
   } else if (isBigMobile && isBigMobileEnd && !isMobileEnd) {
    setWidthInputRange(436);
    setAbleLimit(ableLimit480)
    setMaxQuality(950)
    setMinQuality(1)
   }
  }, [ableLimit320, ableLimit480, isBigMobile, isBigMobileEnd, isMobile, isMobileEnd]);
  // =========================================================================

  useEffect(() => {
    setWidthValue(0.5*widthInputRange);
  }, [widthInputRange])

  // Функція обробки значень інпуту з корегуванням значень і перетворенням  значень в ширину
  const handleRange = (event) => {
    const money = event.target.value;
    setQuality(Math.round(money));
    let value = (money / 1000) * widthInputRange;
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
                (quality <= minQuality && !ableLimit)
                  ? css.counterLeftLimit
                  : 
                    (quality >= maxQuality && !ableLimit)
                  ? css.counterRightLimit
                  : css.counter
              }
              style={{ marginLeft: widthValue - 12 }}
            >
              <Icon
                className={
                  (quality <= minQuality && !ableLimit)
                    ? css.shapeLeftLimit
                    :
                      (quality >= maxQuality && !ableLimit)
                    ? css.shapeRightLimit
                    : css.shape
                }
                name={"icon-modal"}
              />
              <p className={css.showResult}>
                {quality <= 100 ? 100 : quality}$
              </p>
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
      <ModelsPrinters quality={quality} />
    </div>
  );
};

export default Calculator;
