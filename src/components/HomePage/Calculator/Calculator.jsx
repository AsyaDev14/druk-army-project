import css from "./Calculator.module.css"

const Calculator = () => {
  return (
    <div className={css.container}>
        <div className={css.firstPart}>

            <div className={css.firstPart_textContent}>
                <h2>личило</h2>
                <h3>який принтер обрати</h3>
                <p>Обирайте принтер виходячи з кільності грошей, яку ви можете витратити на пластик кожного місяця. В середньому кілограм пластику (PLA, PEGT) коштує 500 грн.</p>
            </div>

            <div>
                <input type="range" name="money" id="money" className={css.rangeScale}/>
            </div>

        </div>
        <div className={css.secondPart}>
            <div className={css.secondPart_textContent}></div>
            <div></div>
        </div>
    </div>
  )
}

export default Calculator