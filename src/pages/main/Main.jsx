import React, { useState, useEffect } from "react"
import Slider from '../../components/slider/slider';
import css from './Main.module.css'
import Content from '../../components/content/content';
import Slider2 from '../../components/slider2/slider2';
import slider2 from '../../components/slider2/slider2';
export default function Main(props) {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch("https://pizza-app-ulan.herokuapp.com/getall/pizza")
            .then((res) => res.json())
            .then((data) => {
                setPizzas(data.data.data)
            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <div className='container'>
            <Slider />
            <Slider2 />
            <p className='title'>Пицца</p>
            <div className={css.pizzaWrapper}>
                {pizzas.map((item) => <Content
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.info}
                    price={item.price}
                    setBasket={props.setBasket}
                />)}

            </div>
        </div>
    )
}