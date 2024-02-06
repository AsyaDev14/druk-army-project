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
          <p>UA</p>
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
          <div defaultValue={"PL"}>
            <p>PL</p>
          </div>
          <div defaultValue={"DE"}>
            <p>DE</p>
          </div>
          <div defaultValue={"EN"}>
            <p>EN</p>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default LanguagesList;
