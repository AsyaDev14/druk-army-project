'use client';

import Link from "next/link";
import css from "./Logo.module.css";
import logo from "/public/img/logo.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react'
import Icon from "@/components/Icon/Icon";

const Logo = () => {
  const [mounted, setMounted] = useState(false)
  const {theme} = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Link href={"/"} className={css.logo}>
     {theme === 'light' ? (<Image
        src={logo}
        alt="Оновити та перейти на головну сторінку"
        width={76}
        height={37}
        className={css.logoImage}
      />) : (<Icon className={css.logoImage} name={'icon-logo'}/>)} 
    </Link>
  );
};

export default Logo;
