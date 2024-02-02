"use client";

import Icon from '@/components/Icon/Icon'
import css from '@/components/header/HeaderSettings/HeaderSettings.module.css'
import MenuSettings from '../MenuSettings/MenuSettings'

const HeaderSettings = () => {
  return (
    <div className={css.settings}>
    <button type='button' className={css.buttonSettings}>
        <Icon className={css.iconSettings} name={'icon-settings'}/>
    </button>
    <MenuSettings/>
    </div>
  )
}

export default HeaderSettings