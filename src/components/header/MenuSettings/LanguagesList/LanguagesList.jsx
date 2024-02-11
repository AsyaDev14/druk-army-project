"use client";

import { useState } from "react";
import css from "./LanguagesList.module.css";
import Icon from "@/components/Icon/Icon";

const LanguagesList = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const handleShowLanguages = () => {
    setShowLanguages((prev) => !prev);
  };


  return (
    <div className={css.langs}>
      <div className={css.listLang}>
        <div className={css.selectedLang}>
          <p>UK</p>
          <button
            type="button"
            className={css.showLang}
            onClick={handleShowLanguages}
          >
            <Icon
              className={
                showLanguages ? css.iconArrowUp : css.iconArrowDown
              }
              name={"icon-arrow-settings"}
            />
          </button>
        </div>
        {showLanguages && (<div className={css.otherLangs}>
          <button value={"pl"} type="button" >
            <p>PL</p>
          </button>
          <button value={"de"} type="button" >
            <p>DE</p>
          </button>
          <button value={"en"} type="button">
            <p>EN</p>
          </button>
        </div>)}
      </div>
    </div>
  );
};

export default LanguagesList;
