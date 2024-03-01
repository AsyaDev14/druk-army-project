"use client";

import { useTranslation } from "react-i18next";
import ContainerNoPadding from "@/components/ContainerNoPadding/ContainerNoPadding";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import css from "./HowBlock.module.css";

const HowBlock = () => {
  const { t } = useTranslation();

  return (
    <ContainerNoPadding>
      <div className={css.centralBlock}>
        <div className={css.cablesWrapper}>
          <picture className={css.cables}>
            <source
              className={css.cables}
              media="(max-width: 480px)"
              srcSet="/img/howworks/cable-320.png"
            />
            <source
              className={css.cables}
              media="(max-width: 767px)"
              srcSet="/img/howworks/cable-480.png"
            />
            <source
              className={css.cables}
              media="(max-width: 959px)"
              srcSet="/img/howworks/cable-768.png"
            />
            <source
              className={css.cables}
              media="(max-width: 1200px)"
              srcSet="/img/howworks/cable-960.png"
            />
            <source
              className={css.cables}
              media="(min-width: 1200px)"
              srcSet="/img/howworks/cable-1920.png"
            />
            <img
              className={css.cables}
              src="/img/howworks/cable-1920.png"
              alt="cable"
            />
          </picture>

          <div className={css.wrapper}>
            <InfoBlock
              firstTitle={t("how-it-works:connectorsFirstTitle")}
              secondTitle={t("how-it-works:connectorsSecondTitle")}
              description={t("how-it-works:connectorsDescription")}
              alignRight={true}
            />
          </div>
        </div>

        <div className={css.connectorsWrapper}>
          <picture className={css.connectors}>
            <source
              className={css.connectors}
              media="(max-width: 320px)"
              srcSet="/img/howworks/connectors-320.png"
            />
            <source
              className={css.connectors}
              media="(max-width: 479px)"
              srcSet="/img/howworks/connectors-320.png"
            />
            <source
              className={css.connectors}
              media="(max-width: 767px)"
              srcSet="/img/howworks/connectors-480.png"
            />
            <source
              className={css.connectors}
              media="(max-width: 959px)"
              srcSet="/img/howworks/connectors-768.png"
            />
            <source
              className={css.connectors}
              media="(max-width: 1199px)"
              srcSet="/img/howworks/connectors-960.png"
            />
            <source
              className={css.connectors}
              media="(min-width: 1200px)"
              srcSet="/img/howworks/connectors-1920.png"
            />
            <img
              className={css.connectors}
              src="/img/howworks/connectors-1920.png"
              alt="connectors"
            />
          </picture>

          <div className={css.wrapper}>
            <InfoBlock
             firstTitle={t("how-it-works:cableFirstTitle")}
             secondTitle={t("how-it-works:cableSecondTitle")}
             description={t("how-it-works:cableDescription")}            />
          </div>
        </div>
      </div>
    </ContainerNoPadding>
  );
};

export default HowBlock;
