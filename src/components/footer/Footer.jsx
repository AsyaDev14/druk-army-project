import css from './Footer.module.css'; 
import ListCards from './ListCards/ListCards';


const Footer = () => {
  return (
    <footer className={css.footer}>
      <h2 className={css.footerTitle}>нас рекомендують:</h2>
      <ListCards/> 
    </footer>
  );
};

export default Footer;
