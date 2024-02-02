"use client";

import BurgerButton from "./BurgerButton/BurgerButton";
import css from "./Header.module.css";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderSettings from "./HeaderSettings/HeaderSettings";
import LoginBtn from "./LoginBtn/LoginBtn";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <header>
      <div className={css.headerContainer}>
        <Logo />
        <HeaderMenu />
        <div className={css.buttonsBox}>
          <LoginBtn />
          <HeaderSettings/>
        </div>
        <BurgerButton />
      </div>
    </header>
  );
};

export default Header;
