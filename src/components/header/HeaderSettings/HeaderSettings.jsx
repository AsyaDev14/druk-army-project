"use client";

import Icon from "@/components/Icon/Icon";
import css from "@/components/header/HeaderSettings/HeaderSettings.module.css";
import MenuSettings from "../MenuSettings/MenuSettings";
import { useState } from "react";

const HeaderSettings = () => {
  const [isShowSettings, setIsShowSettings] = useState(false);

  const handleClickSettings = () => {
    setIsShowSettings((prev) => !prev);
  };

  return (
    <div className={css.settings}>
      <button
        type="button"
        className={css.buttonSettings}
        onClick={handleClickSettings}
      >
        <Icon className={css.iconSettings} name={"icon-settings"} />
      </button>
      {isShowSettings && <MenuSettings />}
    </div>
  );
};

export default HeaderSettings;
