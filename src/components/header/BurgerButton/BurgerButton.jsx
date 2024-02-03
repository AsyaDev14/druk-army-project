import Icon from '@/components/Icon/Icon'
import css from './BurgerButton.module.css'

const BurgerButton = ({onClick}) => {
  return (
    <button type='button' className={css.burgerBtn} onClick={onClick}>
        <Icon className={css.icon} name={'icon-burger'}/>
    </button>
  )
}

export default BurgerButton