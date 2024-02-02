import Icon from '@/components/Icon/Icon'
import css from './Switcher.module.css'

const Switcher = () => {
  return (
    <div className={css.switcherContainer}>
        <span className={css.switchLight}>
            <Icon className={css.iconSun} name={'icon-sun'}/>
        </span>
        <span className={css.switchDark}>
          <Icon className={css.iconMoon} name={'icon-moon'}/>
        </span>
        <input type="checkbox" aria-label='switcher' id='switcher'/>
    </div>
  )
}

export default Switcher