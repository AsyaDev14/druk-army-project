"use client";

import css from "./MobileMenu.module.css";
import NavLink from "../HeaderMenu/NavLink/NavLink";
import LoginBtn from "../LoginBtn/LoginBtn";
import HeaderSettings from "../HeaderSettings/HeaderSettings";

const MobileMenu = () => {
  const links = [
    {
      title: "На головну",
      path: "/",
    },
    {
      title: "Про нас",
      path: "/about",
    },
    {
      title:  "Як це працює",
      path: "/how-it-works",
    },
    {
      title: "Задонатит",
      path: "/donations",
    },
    {
      title: "Новини",
      path: "/news",
    },
  ];

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
