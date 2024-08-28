import React from 'react'
import { Link } from 'react-router-dom'
import './Korzina.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import AOS from '../../images/aos.png'
import butilka from '../../images/butilka.png'
import del from '../../images/delete.png'
import soap from '../../images/soap2.png'
import ariel from '../../images/ariel.png'
import yashik from '../../images/yashik.png'
import { useState } from 'react'

export const Korzina = () => {
    

    const [count, setCount] = useState(1);
    // const [count2, setCount2] = useState(1);
    // const [count3, setCount3] = useState(1);
    const [delet1, setDelet1] = useState();
    const [delet2, setDelet2] = useState();
    const [delet3, setDelet3] = useState();
    const [price, setPrice] = useState(48.76);
    const [overallPrice, setOverallPrice] = useState(0);
    const products = [
        {name:'AOS средство для мытья посуды Crystal', img:AOS, type:butilka, weight:'450 мл', price: 48.76, count: 1},
        {name:'BioMio BIO-SOAP Экологичное туалетное мыло....', img:soap, type:yashik, weight:'90 г', price: 48.76, count: 1},
        {name:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах ...', img:ariel, type:yashik, weight:'15X28.8 г', price: 48.76, count: 1},
    ]

    const handleIncrease = () => {
        setCount(count + 1);
      };
    
      const handleDecrease = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };
    

  return (
    <div className='Korzina'>
        <Header/>
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
                                <Link className='unstyled' to='/korzina'>Корзина</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="katalog-flex-box flex-box">
                    <h2 className="norm-">Корзина</h2>
                </div>
                <hr className='korzina-hr' />
                <div className="korzina-main-content">
                    {
                        products.length > 0 && products?.map((item,index)=> {
                            return(<>
                                 <div className="korzina-product" key={index} onClick={delet1}>
                                <div className="korzina-left-box">
                                    <div className="korzina-img-box">
                                        <img className='korzina-img' src={item?.img} alt="" />
                                    </div>
                                    <div className="korzina-text-box">
                                        <div className="gr-box">
                                            <img src={item?.type} alt="" />
                                            <span className='gr-span'>{item?.weight}</span>
                                        </div>
                                        <h2 className="korzinka-product-name">
                                            {item?.name}
                                        </h2>
                                        <span className="korzina-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.</span>
                                    </div>
                                </div>
                                <div className="korzina-right-content-box">
                                    <div className="opacity2"></div>
                                    <div className="count-box">
                                        <button className="decrement" onClick={handleDecrease}>-</button>
                                        <span className="count">{item?.count}</span>
                                        <button className="decrement" onClick={handleIncrease}>+</button>
                                    </div>
                                    <div className="opacity2"></div>
                                    <span className="product-price">
                                    {item?.price * count} ₸
                                    </span>
                                    <div className="opacity2"></div>
                                    <div className="del-btn" onClick={()=> setDelet1(delet1.classList.add("dn"))}>
                                        <img src={del} alt="" />
                                    </div>
                                </div>
                            </div>
                        <hr className='korzina-hr'/>
                        </>
                        )})
                        }
                    {/* <div className="korzina-product">
                        <div className="korzina-left-box">
                            <div className="korzina-img-box2">
                                <img src={soap} alt="" />
                            </div>
                            <div className="korzina-text-box">
                                <div className="gr-box">
                                    <img src={yashik} alt="" />
                                    <span className='gr-span'>90 г</span>
                                </div>
                                <h2 className="korzinka-product-name">
                                BioMio BIO-SOAP Экологичное туалетное мыло....
                                </h2>
                                <span className="korzina-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.</span>
                            </div>
                        </div>
                        <div className="korzina-right-content-box">
                            <div className="opacity2"></div>
                            <div className="count-box">
                                <button className="decrement" onClick={handleDecrease}>-</button>
                                <span className="count">{count}</span>
                                <button className="decrement" onClick={handleIncrease}>+</button>
                            </div>
                            <div className="opacity2"></div>
                            <span className="product-price">
                            {price * count} ₸
                            </span>
                            <div className="opacity2"></div>
                            <div className="del-btn">
                                <img src={del} alt="" />
                            </div>
                        </div>
                    </div>
                    <hr className='korzina-hr'/>
                    <div className="korzina-product">
                        <div className="korzina-left-box">
                            <div className="korzina-img-box2">
                                <img src={ariel} alt="" />
                            </div>
                            <div className="korzina-text-box">
                                <div className="gr-box">
                                    <img src={yashik} alt="" />
                                    <span className='gr-span'>15X28.8 г</span>
                                </div>
                                <h2 className="korzinka-product-name">
                                ARIEL Автмат Гель СМС жидкое в растворимых капсулах ...
                                </h2>
                                <span className="korzina-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.</span>
                            </div>
                        </div>
                        <div className="korzina-right-content-box">
                            <div className="opacity2"></div>
                            <div className="count-box">
                                <button className="decrement" onClick={handleDecrease}>-</button>
                                <span className="count">{count}</span>
                                <button className="decrement" onClick={handleIncrease}>+</button>
                            </div>
                            <div className="opacity2"></div>
                            <span className="product-price">
                            {price * count} ₸
                            </span>
                            <div className="opacity2"></div>
                            <div className="del-btn">
                                <img src={del} alt="" />
                            </div>
                        </div>
                    </div> */}
                    {/* <hr className='korzina-hr'/> */}
                    <div className="korzina-final">
                        <button className="zakaz-btn">Оформить заказ</button>
                        <span className='full-price'>1 348,76 ₸</span>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}
