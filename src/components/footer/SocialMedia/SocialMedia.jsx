import Link from 'next/link'
import css from './SocialMedia.module.css'
import Icon from '@/components/Icon/Icon'

const SocialMedia = () => {
  return (
    <nav>
        <ul className={css.listSocialMedia}>
            <li>
                <Link href={'https://t.me/drukarmy'} target='_blank' aria-label='Перейти до Телеграму Друк Армії'>
                    <Icon className={css.iconTelegram} name={'icon-telegram'}/>
                </Link>
            </li>
            <li>
                <Link href={'https://twitter.com/drukarmy'} target='_blank' aria-label='Перейти до Твіттеру Друк Армії'>
                <Icon className={css.iconX} name={'icon-twitter'}/>
                </Link>
            </li>
            <li>
                <Link href={'https://discord.com/invite/F2qbA5CHgs'} target='_blank' aria-label='Перейти до Діскорду Друк Армії'>
                <Icon className={css.iconDiscord} name={'icon-discord'}/>
                </Link>
            </li>
            <li>
                <Link href={'https://www.facebook.com/groups/drukarmy'} target='_blank' aria-label='Перейти до Фейсбуку Друк Армії'>
                <Icon className={css.iconFacebook} name={'icon-facebook'}/>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default SocialMedia