"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./NavLink.module.css";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${css.link} ${pathName === item.path && css.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
