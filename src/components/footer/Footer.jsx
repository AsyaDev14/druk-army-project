import ContactsFooter from './ContactsFooter/ContactsFooter';
import css from './Footer.module.css'; 
import ListCards from './ListCards/ListCards';
import NavMenuFooter from './NavMenuFooter/NavMenuFooter';
import SocialMedia from './SocialMedia/SocialMedia';


const Footer = () => {
  return (
    <footer className={css.footer}>
      <div>
      <h2 className={css.footerTitle}>нас рекомендують:</h2>
      <ListCards/>
      </div>
      <div>
      <NavMenuFooter/>
      <SocialMedia/>
      <ContactsFooter/>
      </div>
    </footer>
  );
};

export default Footer;
