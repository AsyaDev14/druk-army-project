"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import BurgerButton from "./BurgerButton/BurgerButton";
import css from "./Header.module.css";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderSettings from "./HeaderSettings/HeaderSettings";
import LoginBtn from "./LoginBtn/LoginBtn";
import Logo from "./Logo/Logo";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  const [isShowMobile, setIsShowMobile] = useState(false);
  const isMediumTabletEnd = useMediaQuery({maxWidth: 1199.98});

  const handleClickShowMobile = () => {
    setIsShowMobile(prev => !prev);
  }

  return (
    <header>
      <div className={css.headerContainer}>
        <Logo />
        <HeaderMenu />
        <div className={css.buttonsBox}>
          <LoginBtn />
          <HeaderSettings/>
        </div>
        <BurgerButton onClick={handleClickShowMobile}/>
      </div>
      {isShowMobile && isMediumTabletEnd && <MobileMenu/>}
    </header>
  );
};

export default Header;
