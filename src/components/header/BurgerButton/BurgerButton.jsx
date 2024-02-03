import css from './BurgerButton.module.css'

const BurgerButton = ({onClick, isOpen}) => {
  return (
    <button type='button' className={isOpen ? css.burgerBtnOpen : css.burgerBtn} onClick={onClick}>
        <div className={css.burger}></div>
    </button>
  )
}

export default BurgerButton