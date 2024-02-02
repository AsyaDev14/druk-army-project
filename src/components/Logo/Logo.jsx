import React from "react";
import Image from "next/image";
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <Image
        alt="logo"
        src="/../../img/logo.png"
        width={107}
        height={53}
        className={styles.logo}
      />
    </div>
  );
};

export default Logo;
