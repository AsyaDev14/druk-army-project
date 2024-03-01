"use client";

import { useTranslation } from "react-i18next";
import ContainerNoPadding from "@/components/ContainerNoPadding/ContainerNoPadding";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import css from "./TitleBottom.module.css";

const TitleBottom = () => {
  const { t } = useTranslation();

  return (
    <ContainerNoPadding>
      <div className={css.titleBottom}>
        <TitleBlock
          title={t("how-it-works:titleBottom")}
          description={t("how-it-works:titleBottomDescription")}
        />
      </div>
    </ContainerNoPadding>
  );
};

export default TitleBottom;
