import { useState } from "react"
import css from "./navbar.module.css"


export default function Navbar({basket}) {
    const [isOpen, setisOpen] = useState(false)
    const onOpenModel = () => {
        setisOpen(!isOpen)
    }
    return (
        <div className={"container " + css.nav}>
            <ul className={css.ul}>
                <li>Пицца</li>
                <li>Комбо</li>
                <li>Закуски</li>
                <li>Десерты</li>
                <li>Напитки</li>
                <li>Другие товары</li>
                <li>Акции</li>
                <li>Контакты</li>
                <li>О нас</li>
                <li>Прямой эфир</li>

                <button className={css.btn} onClick={onOpenModel}>Корзина
                    <span>{basket.length}</span>
                </button>
            </ul>
            <div onClick={onOpenModel} className={css.modalWrapper + "" + (isOpen ? css.opened : "")}>
                <div onClick={(e) => e.stopPropagation()} className={css.modal}  >
                    <button onClick={onOpenModel}>Close</button>
                    <div>
                        <h1>{basket.length} товаров на {basket.reduce((sum,pizza) => sum + pizza.price,0)}сомов</h1>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>


    )
}