import React, { useState } from "react";
import styles from "./VacanciesForm.module.css";

const VacanciesForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.vacanciesModalFormContainer}>
      <form onSubmit={handleSubmit} className={styles.vacanciesModalForm}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Ім'я"
            className={styles.vacModalInput}
          />
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="телефон"
            className={styles.vacModalInput}
          />
        </div>
        <button type="submit">Відправити</button>
        <p className={styles.vacModalFormText}>
          Натискаючи кнопку оплатити ви даєте згоду на обробку ваших
          персональних даних.
        </p>
      </form>
    </div>
  );
};

export default VacanciesForm;
