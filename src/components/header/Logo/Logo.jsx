import Link from "next/link";
import css from "./Logo.module.css";
import logo from "/public/img/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} className={css.logo}>
      <Image
        src={logo}
        alt="Оновити та перейти на головну сторінку"
        width={76}
        height={37}
        className={css.logoImage}
      />
    </Link>
  );
};

export default Logo;
