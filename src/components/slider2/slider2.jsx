import React from 'react'
import css from './slider2.module.css'

export default function slider2() {
    return (
        <section className={css.hidden}>
            <h1>Часто заказывают</h1>
            <div className={"container " + css.wrapper}>
                <div className={css.slider}>
                    <article className={css.iwfhON} number="1">
                        <picture className={css.kOtPvm}>
                            <img alt="Пепперони" title="Пепперони" className={css.img} src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/730db614-8678-4465-859c-bd8c9d8ef427.jpg" />
                        </picture>
                        <div className={css.hSaFRe}>
                            <h2>Пепперони</h2>
                            <div className={css.DGOuY}>
                                <span>от</span>
                                <span>365</span>
                                <span>сом</span>
                            </div>
                        </div>
                    </article>
                    <article className={css.iwfhON} number="2">
                        <picture className={css.kOtPvm}>
                            <img alt="Пепперони" title="Пепперони" className={css.img} src="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fe11cd84d2654f9986a9c77d75d9d375_138x138.jpeg" />
                        </picture>
                        <div className={css.hSaFRe}>
                            <h2>Пепперони</h2>
                            <div className={css.DGOuY}>
                                <span>от</span>
                                <span>365</span>
                                <span>сом</span>
                            </div>
                        </div>
                    </article>
                    <article className={css.iwfhON} number="3">
                        <picture className={css.kOtPvm}>
                            <img alt="Пепперони" title="Пепперони" className={css.img} src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/27593636-cbd8-417e-a702-2c03a6a2bff9.jpg" />
                        </picture>
                        <div className={css.hSaFRe}>
                            <h2>Пепперони</h2>
                            <div className={css.DGOuY}>
                                <span>от</span>
                                <span>365</span>
                                <span>сом</span>
                            </div>
                        </div>
                    </article>
                    <article className={css.iwfhON} number="4">
                        <picture className={css.kOtPvm}>
                            <img alt="Пепперони" title="Пепперони" className={css.img} src="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/c314fbb6e9b0417f93a5f891a10305e9_138x138.jpeg" />
                        </picture>
                        <div className={css.hSaFRe}>
                            <h2>Пепперони</h2>
                            <div className={css.DGOuY}>
                                <span>от</span>
                                <span>365</span>
                                <span>сом</span>
                            </div>
                        </div>
                    </article>
                    <article className={css.iwfhON} number="5">
                        <picture className={css.kOtPvm}>
                            <img alt="Пепперони" title="Пепперони" className={css.img} src="https://dodopizza-a.akamaihd.net/static/Img/Products/c7438015dcc24d599daa02db7ff79be6_138x138.jpeg" />
                        </picture>
                        <div className={css.hSaFRe}>
                            <h2>Пепперони</h2>
                            <div className={css.DGOuY}>
                                <span>от</span>
                                <span>365</span>
                                <span>сом</span>
                            </div>
                        </div>
                    </article>
                    <article className={css.iwfhON} number="6">
                        <picture className={css.kOtPvm}>
                            <img alt="Пепперони" title="Пепперони" className={css.img} src="https://dodopizza-a.akamaihd.net/static/Img/Products/c1b04dac00494475bbb58c70db4c7bdf_138x138.jpeg" />
                        </picture>
                        <div className={css.hSaFRe}>
                            <h2>Пепперони</h2>
                            <div className={css.DGOuY}>
                                <span>от</span>
                                <span>365</span>
                                <span>сом</span>
                            </div>
                        </div>
                    </article>
                </div>
                            <i className={css.bmlVwS.prev}>
                                <svg>
                               <img className={css.img2} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX///8AAABpaWnh4eGsrKzy8vIbGxuvr6+qqqoZGRkUFBTj4+Pf39/19fVnZ2dra2vAwMAgICAODg5SUlJNTU1UVFTY2Ni4uLjFxcULCwvs7OyPj49E3sbFAAACn0lEQVR4nO2bWVIbQRAF1QPGBsnghcXL/e9pjx0OR4A09dFSdFdWvhNURhb11AJ2O2MumueX0RNcOFetfRo9w0XzG5CN+AeQjLhvjY14aI2NuG+NjXhojY24b42NePUakIZ4BLC1b6OnOmPerCjN4lGDJIsnDHIsnjRIQdwwyFjUTYNr9qMn7ExgsLUPoyfsTGjwevSEncEbDAGzGwxXFG8wO6AGswNaExqcPPgeDAHfj56wM65odkANZgcMDWY/MhrU4OTBG7Qm8AazA3pkNDh58AYFFHDyWPTZAa0JDU4evEH8e1CD2Q1a9NkB8TVxiACzG8QfGbzBEFCDkwdvEN+D+BW16LMbxBc9/shoUIOTB/+ix9eERa/ByYOvCbxBfE34z1nZV9SPatlXVIManDz4mtCgBicP/pcv+JrAG8QfGbzBEFCDk0eDeIN4wOwr+qzB0RN2Bm8QD7h7CABvP46esDuLiJ/5iLfvRk/YnfsA8Sa/xQjxLr9Fzw3hZzFCvONbvClgkY+oxQyx+gkWrX6rP0UsjQrnRosZUqD6C1gs8D1qiMi3CKj+CBFQGqFFPqIWM8THVAmL+UujwKIWqP4C70VLg2DR0qjw6geUhhYJ56bAdzdarGDRP/PLEEtDiyliaVgaKRJ+G54fsYBFL6oWU0SLBESrv4JFz02GWBoVLPrqzxBf/RWqv4DFCr8l5iNWsMg/NwUsipghlkaFj+EAi+G/hfERv/ARCyyqFjOkAGJUGt/zI2rRc5MiYWn8GD1hd6JFvR89YH+2EZ9Gj3eObL0XEYBbiF9Hj3aunEKEGFxzHPFx9FjnzDFEkME1bxFRBte8RsQcmf9Z2AbXLGyDaxa2wTULHfDfuYGu6N8sbINrHtgG1/wcPYCZIL8AxJkqx2pDx24AAAAASUVORK5CYII="  />
                               </svg>
                            </i>
<i></i>
            </div>
        </section >
    )
}
