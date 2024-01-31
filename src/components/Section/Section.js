import React from 'react';
import styles from '../Section/Section.module.css';

const Section = ({children}) => {
  return (
    <section className={styles.section}>Section
        {children}
    </section>
  )
}

export default Section