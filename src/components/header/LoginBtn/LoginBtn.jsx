"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import css from "./LoginBtn.module.css";

const LoginBtn = () => {
  const { t } = useTranslation();

  return (
    <Link href={'/login'} className={css.loginBtn}>{t("header:toEnter")}</Link>
  )
}

export default LoginBtn