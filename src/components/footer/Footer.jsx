// Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <div className={styles.links}>
          <Link className={styles.link} href="/login">Вхід</Link>
          <Link className={styles.link} href="/order">Замовити</Link>
          <Link className={styles.link} href="/vacancies">Вакансії</Link>
          <Link className={styles.link} href="/terms">Умови використання</Link>   
          </div>
          <div className={styles.links}>
            <Image src="/img/discord-icon.png" alt="Discord" width={24} height={24} />            
            <Image src="/twitter-icon.png" alt="Twitter" width={24} height={24} />       
        </div>
        <div className={styles.contactInfo}>
          <p>Телефон: +38 (073) 920 78 04</p>
          <p>Пошта: dd@drukarmy.org.ua</p>
        </div>
        <div className={styles.copyRight}>
        © 2023 ДрукАрмія — надрукуй перемогу! Створено українцями
      </div>
        </div>
        <div className={styles.recommendations}>
          <p>НАС РЕКОМЕНДУЮТЬ:</p>
          <div className={styles.logos}>
            <Image src="/img/footer-logo/logo-1.png" alt="Logo 1" width={100} height={50} />
            <Image src="/img/footer-logo/logo-2.png" alt="Logo 2" width={100} height={50} />
            <Image src="/img/footer-logo/logo-3.png" alt="Logo 2" width={100} height={50} />
          </div>
        </div>       
    </footer>
  );
};

export default Footer;
