import css from './NavMenuFooter.module.css'
import NavLinkFooter from './NavLinkFooter/NavLinkFooter'

const linksFooter = [
    {
        title: "Вхід",
        path: '/login',
    },
    {
        title: "Замовити",
        path: "/reservations",
    },
    {
        title: "Вакансії",
        path: "/vacancies",
    },
    {
        title: "Умови використання",
        path: "/terms",
    }
]


const NavMenuFooter = () => {
  return (
    <div className={css.list}>
    {linksFooter.map(link => (<NavLinkFooter item={link} key={link.title}/>))}
  </div>
  )
}

export default NavMenuFooter