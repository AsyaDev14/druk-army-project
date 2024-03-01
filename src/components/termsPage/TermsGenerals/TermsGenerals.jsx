"use client";

import { useTranslation } from 'react-i18next';
import InfoData from "../InfoData/InfoData";
import css from "./TermsGenerals.module.css";

const TermsGenerals = () => {
  const { t } = useTranslation();
  return (
    <div className={css.content}>
      <h3>{t("terms:general")}</h3>
      <p>
      {t("terms:generalDescription")}
      </p>
      <h4>{t("terms:forMilitaries")}</h4>
      <p>
      {t("terms:forMilitariesDescr")}
      </p>
      <h4>{t("terms:forPrint")}</h4>
      <p>
        {t("terms:forPrintDescr")}
      </p>
      <h4>{t("terms:forDonaters")}</h4>
      <p>
        {t("terms:forDonatersDescr")}
      </p>
      <h3>{t("terms:serviceDescr")}</h3>
      <p>
       {t("terms:detailDescr")}
      </p>
      <p>
       {t("terms:textBeforeList")}
      </p>
      <ul className={css.textList}>
        <li>
          <p>
            {t("terms:textListOne")}
          </p>
        </li>
        <li>
          <p>
            {t("terms:textListTwo")}
          </p>
        </li>
      </ul>
      <p>
        {t("terms:textExpl1")}
      </p>
      <p>
        {t("terms:textExpl2")}
      </p>
      <p>
        {t("terms:textExpl3")}
      </p>
      <p>
        {t("terms:textExpl4")}
      </p>
      <p>
        {t("terms:textExpl5")}
      </p>

      {/* Дані, адреса та банківський рахунок Організації */}
      <InfoData />
      
      <h3>{t("terms:responsibility")}</h3>
      <p>
        {t("terms:responsibExplication")}
      </p>
      <h3>{t("terms:confidence")}</h3>
      <p>
        {t("terms:confExplication")}
      </p>
      <h3>{t("terms:changeTerms")}</h3>
      <p>
        {t("terms:changeTermsDescr")}
      </p>
      <p>{t("terms:lastChange")} 01.12.2023</p>
    </div>
  );
};

export default TermsGenerals;
