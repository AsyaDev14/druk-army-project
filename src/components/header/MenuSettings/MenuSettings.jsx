import css from "./MenuSettings.module.css";
import Switcher from "./Switcher/Switcher";
import LanguagesList from "./LanguagesList/LanguagesList";
import Icon from "@/components/Icon/Icon";

const MenuSettings = () => {

  return (
    <div className={css.settingsBox}>
    <Icon className={css.shape} name={'icon-modal'}/>
      <LanguagesList/>
      <Switcher/>
    </div>
  );
};

export default MenuSettings;
