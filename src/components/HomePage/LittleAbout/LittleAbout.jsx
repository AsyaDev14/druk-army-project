import TitleAbout from "./TitleAbout/TitleAbout"
import Info from "./Info/Info"
import css from "./LittleAbout.module.css"

const LittleAbout = () => {
  return (
    <div className={css.container}>
        <TitleAbout/>
        <Info/>
    </div>
  )
}

export default LittleAbout