import TermsImage from "@/components/termsPage/TermsImage/TermsImage";
import TermsTitle from "@/components/termsPage/TermsTitle/TermsTitle";
import TermsGenerals from "@/components/termsPage/TermsGenerals/TermsGenerals";
import css from "@/app/[locale]/terms/terms.module.css";

const Terms = () => {
  return (
    <div className={css.termsPage}>
      {/* Головне зобреження сторінки Умови використання */}
      <TermsImage />

      {/* Секція із заголовком і вступним текстом */}
      <div className={css.containerTerms}>
        <TermsTitle />

        {/* Контент */}
        <TermsGenerals />
      </div>
    </div>
  );
};

export default Terms;
