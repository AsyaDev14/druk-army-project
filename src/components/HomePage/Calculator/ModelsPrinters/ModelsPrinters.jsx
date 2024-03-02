"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import css from "./ModelsPrinters.module.css";

const printers = ["BAMBULAB", "CREALITY ENDER 3"];

const ModelsPrinters = ({ quality }) => {
  const [resultCalc, setResultCalc] = useState("");

  useEffect(() => {
    quality <= 200 && setResultCalc("one printer");
    quality > 200 && quality < 500 && setResultCalc("two printers");
    quality >= 500 && quality < 750 && setResultCalc("one Bambulab");
    quality > 750 && setResultCalc("two Bambulab");
  }, [quality]);

  return (
    <div className={css.secondPart}>
      <div className={css.imagesModelsPrinters}>
        {/* Перше зображення принтеру */}
        <div className={css.modelOne}>
          {(resultCalc === "one printer" || resultCalc === "two printers") && (
            <Image
              src={"/img/home/calculator/ender3.png"}
              alt="3D-принтер моделі CREALITY ENDER 3"
              width={275}
              height={254}
              className={css.modelPrinterFirst}
            />
          )}
          {(resultCalc === "one Bambulab" || resultCalc === "two Bambulab") && (
            <Image
              src={"/img/home/calculator/Bambu.png"}
              alt="3D-принтер моделі BAMBULAB"
              width={225}
              height={204}
              style={resultCalc === "one Bambulab" ? {left: 50} : {left: 6}}
              className={css.modelPrinterFirst_Bambulab}
            />
          )}
        </div>

        {/* Друге зображення принтеру */}
        <div className={css.modelTwo}>
          {resultCalc === "two printers" && (
            <Image
              src={"/img/home/calculator/ender3.png"}
              alt="3D-принтер моделі CREALITY ENDER 3"
              width={211}
              height={192}
              className={css.modelPrinterSecond}
            />
          )}
          {resultCalc === "two Bambulab" && (
            <Image
              src={"/img/home/calculator/Bambu.png"}
              alt="3D-принтер моделі BAMBULAB"
              width={151}
              height={132}
              className={css.modelPrinterSecond_Bambulab}
            />
          )}
        </div>
      </div>
      <div className={css.secondPart_textContent}>
        <p className={css.resultTitle}>Результат</p>
        <p className={css.result}>
          <span className={css.number}>
            {resultCalc === "one printer" || resultCalc === "one Bambulab"
              ? 1
              : 2}&nbsp;
          </span>
          ОД.
          {resultCalc === "one printer" || resultCalc === "two printers"
            ? printers[1]
            : printers[0]}
        </p>
      </div>
    </div>
  );
};

export default ModelsPrinters;
