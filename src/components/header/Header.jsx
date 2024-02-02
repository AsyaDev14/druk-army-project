import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css'; 


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
           
              <Image src="/img/logo.png" alt="Logo" width={120} height={60} />
            
          </Link>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="/">
             Головна
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/about">
             Про нас
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/how-it-works">
             Як це працює
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/reservations">
             Забронювати
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/news">
             Новини
            </Link>
          </li>
        </ul>
        <div className={styles.loginButton}>
          <Link href="/login">
         Вхід
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header