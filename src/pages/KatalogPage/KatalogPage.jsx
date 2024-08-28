import React from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import bottom from '../../images/bottom.png'
import more from '../../images/more.png'
import katalogWhite from '../../images/katalogwhite.png'
import search from '../../images/search.png'
import del from '../../images/delete.png'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'
import brand5 from '../../images/brand5.png'
import left from '../../images/left2.png'
import right from '../../images/right2.png'
import './KatalogPage.css'
import { KatalogCard3 } from '../../components/KatalogCard3/KatalogCard3'

export const KatalogPage = () => {
    return (
        <div className='KatalogPage'>
            <Header />
            <div className="container">
                <hr className='hr' />
                <div className="about-card">
                    <div className="top-links-box">
                        <ul className="link-list">
                            <li className="card-link">
                                <Link className='unstyled' to='/'>Главная</Link>
                            </li>
                            <div className="opacity"></div>
                            <li className="card-link">
                                <Link className='unstyled' to='/katalog'>Косметика и гигиена</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="katalog-flex-box flex-box">
                    <h2 className="norm-">Косметика и гигиена</h2>
                    <div className="flex-box2">
                        <span className="name">Сортировка:</span>
                        <span className="vslue">Название</span>
                        <img className='bottom-img' src={bottom} alt="" />
                    </div>
                    <div className="btn-flex-box">
                        <img src={more} alt="" />
                        <div className="white-box">
                            <img src={katalogWhite} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex-box">
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Уход
                            за телом</span>
                    </div>
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Уход
                            за руками</span>
                    </div>
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Уход
                            за ногами</span>
                    </div>
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Уход
                            за лицом</span>
                    </div>
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Уход
                            за волосами</span>
                    </div>
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Средства
                            для загара</span>
                    </div>
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Средства
                            для бритья</span>
                    </div>
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Подарочные
                            наборы</span>
                    </div>
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Гигиеническая
                            продукция</span>
                    </div>
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Гигиена
                            полости рта</span>
                    </div>
                    <div className="katalog-white-box">
                        <span className="katalog-box-span">Бумажная
                            продукция</span>
                    </div>
                </div>
                <div className="katalog-main-content">
                    <div className="katalog-left-box">
                        <span className="smal-b-span">ПОДБОР ПО ПАРАМЕТРАМ</span>
                        <span className="katalog-muted">Цена <b>₸</b></span>
                        <div className="flex-box">
                            <div className="count-span-box">
                                <span className='count-span count-span-btn'>0</span>
                                <span className='count-span'>-</span>
                                <span className='count-span count-span-btn'>10 000</span>
                            </div>
                        </div>
                        <span className="smal-span-b2">Производитель</span>
                        <div className="input-box">
                            <input className='header-input hover-mix' placeholder='Поиск...' type="text" />
                            <button className='input-btn' type='submit'><img src={search} alt="" /></button>
                        </div>
                        <div className="check-box-list">
                            <div className="checkbox-box">
                                <input type="checkbox" />
                                <label htmlFor="">Grifon
                                    (56)</label>
                            </div>
                            <div className="checkbox-box">
                                <input type="checkbox" />
                                <label htmlFor="">Boyscout
                                    (66)</label>
                            </div>
                            <div className="checkbox-box">
                                <input type="checkbox" />
                                <label htmlFor="">Paclan
                                    (166)</label>
                            </div>
                            <div className="checkbox-box">
                                <input type="checkbox" />
                                <label htmlFor="">Булгари Грин
                                    (21)</label>
                            </div>
                            <div className="flex-box pokaz">
                                <span className="mute">Показать все</span>
                                <img src={bottom} alt="" className="bottom-img" />
                            </div>
                            <hr className="dotted" />
                        </div>
                        <span className="smal-span-b2">Бренд</span>
                        <div className="input-box">
                            <input className='header-input hover-mix' placeholder='Поиск...' type="text" />
                            <button className='input-btn' type='submit'><img src={search} alt="" /></button>
                        </div>
                        <div className="check-box-list">
                            <div className="checkbox-box">
                                <input type="checkbox" />
                                <label htmlFor="">Nivea
                                    (56)</label>
                            </div>
                            <div className="checkbox-box">
                                <input type="checkbox" />
                                <label htmlFor="">GRIFON
                                    (66)</label>
                            </div>
                            <div className="checkbox-box">
                                <input type="checkbox" />
                                <label htmlFor="">Домашний сундук
                                    (166)</label>
                            </div>
                            <div className="checkbox-box">
                                <input type="checkbox" />
                                <label htmlFor="">HELP
                                    (21)</label>
                            </div>
                            <div className="flex-box pokaz">
                                <span className="mute">Показать все</span>
                                <img src={bottom} alt="" className="bottom-img" />
                            </div>
                            <div className="flex-box katlog-btn-box">
                                <div className="katalog-yellow-btn">
                                    <span className='katalog-btn-span'>Показать</span>
                                </div>
                                <div className="del-btn">
                                    <img src={del} alt="" />
                                </div>
                            </div>
                            <span className="smal-span-b">Уход за телом</span>
                            <ul className="katalog-info-list">
                                <li className="katalog-info-li">Эпиляция и депиляция</li>
                                <li className="katalog-info-li">Средства для ванны и душа</li>
                                <li className="katalog-info-li">Скрабы, пилинги и пр.</li>
                                <li className="katalog-info-li">Мочалки и губки для тела</li>
                                <li className="katalog-info-li">Кремы, лосьоны, масла</li>
                                <li className="katalog-info-li">Интимный уход</li>
                                <li className="katalog-info-li">Дезодоранты, антиперспиранты</li>
                                <li className="katalog-info-li">Гели для душа</li>
                            </ul>
                            <hr className="dotted" />
                            <span className="smal-span-b">Уход за руками</span>
                            <ul className="katalog-info-list">
                                <li className="katalog-info-li">Увлажнение и питание</li>
                                <li className="katalog-info-li">Средства для ногтей</li>
                                <li className="katalog-info-li">Мыло твердое</li>
                                <li className="katalog-info-li">Мыло жидкое</li>
                                <li className="katalog-info-li">Крем для рук</li>
                                <li className="katalog-info-li">Жидкость для снятия лака</li>
                            </ul>
                            <hr className="dotted" />
                            <span className="smal-span-b">Уход за ногами</span>
                            <ul className="katalog-info-list">
                                <li className="katalog-info-li">Скрабы, пилинги</li>
                                <li className="katalog-info-li">Пилки, ролики</li>
                                <li className="katalog-info-li">Крем для ног</li>
                                <li className="katalog-info-li">Дезодоранты для ног</li>
                            </ul>
                            <hr className="dotted" />
                            <span className="smal-span-b">Уход за лицом</span>
                            <ul className="katalog-info-list">
                                <li className="katalog-info-li">Тональные средства</li>
                                <li className="katalog-info-li">Средства для снятия макияжа</li>
                                <li className="katalog-info-li">Средства для очищения</li>
                                <li className="katalog-info-li">Маски, скрабы, сыворотки</li>
                                <li className="katalog-info-li">Крем для лица</li>
                                <li className="katalog-info-li">Крем для век</li>
                                <li className="katalog-info-li">Жидкость для снятия макияжа</li>
                                <li className="katalog-info-li">Гигиеническая помада</li>
                            </ul>
                            <hr className="dotted" />
                            <span className="smal-span-b">Уход за волосами</span>
                            <ul className="katalog-info-list">
                                <li className="katalog-info-li">Шампуни</li>
                                <li className="katalog-info-li">Средства для укладки</li>
                                <li className="katalog-info-li">Маски, сыворотки, масла</li>
                                <li className="katalog-info-li">Кондиционеры, бальзамы</li>
                                <li className="katalog-info-li">Кондиционеры, бальзамы</li>
                            </ul>
                            <hr className="dotted" />
                            <span className="smal-span-b">Средства для загара</span>
                            <ul className="katalog-info-list">
                                <li className="katalog-info-li">Средства после загара</li>
                            </ul>
                            <hr className="dotted" />
                            <span className="smal-span-b">Средства для бритья</span>
                            <ul className="katalog-info-list">
                                <li className="katalog-info-li">Станки и кассеты</li>
                                <li className="katalog-info-li">После бритья</li>
                                <li className="katalog-info-li">Для бритья</li>
                            </ul>
                            <hr className="dotted" />
                            <span className="smal-span-b">Подарочные наборы</span>
                            <ul className="katalog-info-list">
                                <li className="katalog-info-li">Для мужчин</li>
                                <li className="katalog-info-li">Для женщин</li>
                            </ul>
                            <hr className="dotted" />
                            <span className="smal-span-b">Бренды</span>
                            <div className="katalog-brand-box">
                                <div className="brand-top-box flex-box">
                                    <div className="brand-img-box">
                                        <img src={brand1} alt="" />
                                    </div>
                                    <div className="brand-img-box">
                                        <img src={brand2} alt="" />
                                    </div>
                                </div>
                                <div className="brand-center-img">
                                <div className="brand-img-box">
                                        <img src={brand3} alt="" />
                                    </div>
                                </div>
                                <div className="brand-bottom-box flex-box">
                                <div className="brand-img-box">
                                    <img src={brand4} alt="" />
                                </div>
                                <div className="brand-img-box">
                                    <img src={brand5} alt="" />        
                                </div>
                                </div>
                            </div>
                            <div className="flex-box">
                                <span className="mute">Показать все</span>
                                <img src={bottom} alt="" className="bottom-img" />
                            </div>
                        </div>
                    </div>
                    <div className="katalog-right-box">
                        <KatalogCard3/>
                        <KatalogCard3/>
                        <KatalogCard3/>
                        <KatalogCard3/>
                        <KatalogCard3/>
                        <div className="pages-box">
                            <button className="slide-btn-left slide-btn"><img src={left} alt="" /></button>
                            <ul className="page-list">
                                <li className="page-n active">1</li>
                                <li className="page-n">2</li>
                                <li className="page-n">3</li>
                                <li className="page-n">4</li>
                                <li className="page-n">5</li>
                            </ul>
                            <button className="slide-btn-right slide-btn"><img src={right} alt="" /></button>
                        </div>
                        <div className="katalog-main-bottom-span-box">                           
                            <span className="katalog-main-bottom-span">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
