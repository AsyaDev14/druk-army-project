"use client";

import { useTranslation } from 'react-i18next';
import Link from "next/link";
import css from "./InfoData.module.css";

const InfoData = () => {
  const { t } = useTranslation();

  return (
    <div className={css.dataOrganisation}>
      <div>
        <p>{t("terms:nameOrganisation")}</p>
        <p>
          <strong><abbr title={t("terms:titleAbbr")}>{t("terms:ngoOrg")}</abbr> ВIЛЬНI.НЕСКОРЕНI. НЕБАЙДУЖI </strong>
        </p>
      </div>
      <div>
        <p>{t("terms:codeRecept")}</p>
        <p>
          <strong>44858295</strong>
        </p>
      </div>
      <div>
        <p>{t("terms:nameOfBank")}</p>
        <p>
          <strong>{t("terms:bank")}</strong>
        </p>
      </div>
      <div>
        <p>{t("terms:accountBank")}</p>
        <p>
          <b>IBAN:UA313052990000026000040810747</b>
        </p>
      </div>
        <div>
          <p>{t("terms:email")}</p>
          <p>
            <strong>vilni.neskoreni.nebajdugi@gmail.com</strong>
          </p>
        </div>
          <div>
            <p>{t("terms:money")}</p>
            <p>
              <b>UAH</b>
            </p>
          </div>
          <div className={css.telephone}>
            <p>{t("terms:phone")}</p>
            <p>
              <strong>+38 066 412 93 82</strong>
            </p>
          </div>
      <address className={css.address}>
        <p>{t("terms:address")}</p>
        <p>
          <strong>
           {t("terms:addressDetail")}
          </strong>
        </p>
      </address>
      <div>
        <p>
          {t("terms:invoices")}
          <Link
            href={"https://drukarmy.org.ua/reports"}
            aria-label="Перейти на сторінку звітів"
            className={css.linkReports}
          >
            https://drukarmy.org.ua/reports
          </Link>
        </p>
      </div>
    </div>
  );
};

export default InfoData;
