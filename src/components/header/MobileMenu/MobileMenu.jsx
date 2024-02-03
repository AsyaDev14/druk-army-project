import css from "./MobileMenu.module.css";
import { links } from "../HeaderMenu/HeaderMenu";
import NavLink from "../HeaderMenu/NavLink/NavLink";
import LoginBtn from "../LoginBtn/LoginBtn";
import HeaderSettings from "../HeaderSettings/HeaderSettings";

const MobileMenu = () => {
  return (
    <div className={css.backdrop}>
      <nav className={css.menuContainer}>
        <div className={css.navMenuList}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
        <div className={css.buttonsBox}>
          <LoginBtn />
          <HeaderSettings />
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
