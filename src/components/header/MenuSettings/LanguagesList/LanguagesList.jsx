import css from './LanguagesList.module.css'
import Icon from '@/components/Icon/Icon'

const LanguagesList = () => {
  return (
    <div className={css.langs}>
        <div className={css.listLang}>
          <div className={css.selectedLang}>
            <p>UA</p>
            <button
              type="button"
              className={css.showLang}
              onClick={() => setIsShow(true)}
            >
              <Icon className={css.iconArrow} name={"icon-arrow-settings"} />
            </button>
          </div>
            <div className={css.otherLangs}>
              <div defaultValue={"PL"}>
                <p>PL</p>
              </div>
              <div defaultValue={"DE"}>
                <p>DE</p>
              </div>
              <div defaultValue={"EN"}>
                <p>EN</p>
              </div>
            </div>
        </div>
      </div>
  )
}

export default LanguagesList