"use client";

import css from "./HeaderMenu.module.css";
import NavLink from "./NavLink/NavLink";

const HeaderMenu = () => {

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
      title: "Задонатити",
      path: "/donations",
    },
    {
      title: "Новини",
      path: "/news",
    },
  ];


  return (
    <div className={css.list}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default HeaderMenu;
