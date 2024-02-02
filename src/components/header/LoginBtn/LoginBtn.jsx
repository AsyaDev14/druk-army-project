import Link from 'next/link'
import css from './LoginBtn.module.css'

const LoginBtn = () => {
  return (
    <Link href={'/login'} className={css.loginBtn}>Вхід</Link>
  )
}

export default LoginBtn