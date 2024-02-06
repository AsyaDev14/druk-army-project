import Link from "next/link";
import css from "./InfoData.module.css";

const InfoData = () => {
  return (
    <div className={css.dataOrganisation}>
      <div>
        <p>Найменування організації:</p>
        <p>
          <strong><abbr title="Благодійна організація благодійного фонду">БО БФ</abbr> ВIЛЬНI.НЕСКОРЕНI. НЕБАЙДУЖI </strong>
        </p>
      </div>
      <div>
        <p>Код отримувача:</p>
        <p>
          <strong>44858295</strong>
        </p>
      </div>
      <div>
        <p>Назва банку:</p>
        <p>
          <strong>АТ КБ &quot;ПРИВАТБАНК&quot;</strong>
        </p>
      </div>
      <div>
        <p>Рахунок отримувача у форматі</p>
        <p>
          <b>IBAN:UA313052990000026000040810747</b>
        </p>
      </div>
        <div>
          <p>Email:</p>
          <p>
            <strong>vilni.neskoreni.nebajdugi@gmail.com</strong>
          </p>
        </div>
          <div>
            <p>Валюта:</p>
            <p>
              <b>UAH</b>
            </p>
          </div>
          <div className={css.telephone}>
            <p>Телефон:</p>
            <p>
              <strong>+38 066 412 93 82</strong>
            </p>
          </div>
      <address className={css.address}>
        <p>Адреса:</p>
        <p>
          <strong>
            Україна, 43025, місто Луцьк, вул.Хмельницького Б., 16/1
          </strong>
        </p>
      </address>
      <div>
        <p>
          Звіти публікуються щомісячно на сторінці звітів
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
