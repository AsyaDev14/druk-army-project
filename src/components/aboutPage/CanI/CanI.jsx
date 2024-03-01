"use client";

import { useTranslation } from "react-i18next";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import css from "./CanI.module.css";

const CanI = () => {
  const { t } = useTranslation();

  return (
    <div className={css.canIWrapper}>
      <div className={css.family}>
        <div className={css.backgroundPeople}></div>
        <picture className={css.photo}>
          <source
            className={css.familyImage}
            media="(max-width: 480px)"
            srcSet="/img/about/family-prints-320.jpg"
          />

          <source
            className={css.photo}
            media="(max-width: 767px)"
            srcSet="/img/about/family-prints-480.jpg"
          />
          <source
            className={css.photo}
            media="(max-width: 959px)"
            srcSet="/img/about/family-prints-768.jpg"
          />
          <source
            className={css.photo}
            media="(max-width: 1199px)"
            srcSet="/img/about/family-prints-960.jpg"
          />
          <source
            className={css.photo}
            media="(max-width: 1919px)"
            srcSet="/img/about/family-prints-1200.jpg"
          />
          <source
            className={css.photo}
            media="(min-width: 1920px)"
            srcSet="/img/about/family-prints-1920.jpg"
          />
          <img
            className={css.familyImage}
            src="/img/about/family-prints-1920.jpg"
            alt="A family standing around a 3D printer, looking puzzled and thinking about how to turn it on"
          />
        </picture>
      </div>

      <div className={css.canI}>
        <InfoBlock
          firstTitle={t("about:canIFirstTitle")}
          secondTitle={t("about:canISecondTitle")}
          description={t("about:canIDescription")}
          color="var(--accent-color)"
          centerAlign={true}
        />
      </div>
    </div>
  );
};

export default CanI;
