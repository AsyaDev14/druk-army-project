import Icon from '@/components/Icon/Icon'
import css from './BurgerButton.module.css'

const BurgerButton = () => {
  return (
    <button type='button' className={css.burgerBtn}>
        <Icon className={css.icon} name={'icon-burger'}/>
    </button>
  )
}

export default BurgerButton