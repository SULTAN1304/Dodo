import css from "./content.module.css"

export default function Content(props) {
    const onSelect = () => {
        const basket = JSON.parse(localStorage.getItem("basket")) || []
        if (!basket.includes(props.id))
            basket.push(props.id)
        localStorage.setItem("basket", JSON.stringify(basket))
        props.setBasket(basket)
    }
    return (

        <div className={css.pizza_block}>
            <img
                className={css.image}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/1453914e11424062b09885ccddc9a517_366x366.jpeg"
                alt="Pizza"
            />
            <h4 className={css.pizza_block__title}>{props.name}</h4>
            <div className={css.pizza_block__selector}>
                {props.description}
            </div>
            <div className={css.pizza_block__selector}>
                <div className={css.pizza_block__price}> от {props.price} сом</div>
                <div >
                    <button onClick={onSelect}>Собрать</button>

                </div>
            </div>
        </div>
    )
}