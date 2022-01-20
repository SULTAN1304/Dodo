import css from "./Header.module.css"

export default function Header() {
    return (
        <div className={"container " + css.wrapper}>
            <img className={css.logo} src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Dodo_Logo.svg/640px-Dodo_Logo.svg.png" />
            <div className={css.left}>
                <p className=""> Доставка пиццы Бишкек</p>
                <p className={css.min}> 40 мин 4,75</p>
            </div>
            <div className={css.middle}>
                <a href="tel:0707 497 336" className={css.number}>
                    0(707) 497-336
                    <p className={css.call}>Звонок по телефону</p>
                </a>
            </div>
            <div className={css.right}>
                <p className={css.dodo}>Додокоины</p>
                <button className={css.btn}>Войти</button>
            </div>
        </div>
    )
}
