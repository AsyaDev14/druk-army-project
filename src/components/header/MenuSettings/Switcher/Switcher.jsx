'use client';

import Icon from '@/components/Icon/Icon'
import css from './Switcher.module.css'
import { useTheme } from 'next-themes'

const Switcher = () => {
  const { theme, setTheme } = useTheme('light');

  return (
    <div className={css.switcherContainer}>
        <button className={ theme === 'light' ? css.switchLightActive : css.switchLight} type='button' onClick={() => setTheme('light')}>
            <Icon className={css.iconSun} name={'icon-sun'}/>
        </button>
        <button className={ theme === 'dark' ? css.switchDarkActive : css.switchDark} type='button' onClick={() => setTheme('dark')}>
          <Icon className={css.iconMoon} name={'icon-moon'}/>
        </button>
    </div>
  )
}

export default Switcher