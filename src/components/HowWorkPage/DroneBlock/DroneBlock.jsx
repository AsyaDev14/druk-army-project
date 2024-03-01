"use client";

import { useTranslation } from "react-i18next";
import InfoBlockAccent from "@/components/InfoBlockAccent/InfoBlockAccent";
import css from "./DroneBlock.module.css";

const DroneBlock = () => {
  const { t } = useTranslation();

  return (
    <div className={css.outerWrapper}>
      <div className={css.droneWrapper}>
        <picture className={css.drone}>
          <source
            className={css.drone}
            media="(max-width: 479px)"
            srcSet="/img/howworks/drone-320.png"
          />
          <source
            className={css.drone}
            media="(max-width: 767px)"
            srcSet="/img/howworks/drone-480.png"
          />
          <source
            className={css.drone}
            media="(max-width: 959px)"
            srcSet="/img/howworks/drone-768.png"
          />
          <source
            className={css.drone}
            media="(max-width: 1199px)"
            srcSet="/img/howworks/drone-960.png"
          />
          <source
            className={css.drone}
            media="(min-width: 1200px)"
            srcSet="/img/howworks/drone-1920.png"
          />
          <img
            className={css.drone}
            src="/img/howworks/drone-1920.png"
            alt="drone"
          />
        </picture>

        <div className={css.accentDiv}>
          <InfoBlockAccent
            firstTitle={t("how-it-works:droneFirstTitle")}
            secondTitle={t("how-it-works:droneSecondTitle")}
            description={t("how-it-works:droneDescription")}
          />
        </div>
      </div>
    </div>
  );
};

export default DroneBlock;
