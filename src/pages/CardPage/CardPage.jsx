import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import soap from '../../images/soap.png'
import yashik from '../../images/yashik.png'
import WhiteBasked from '../../images/white-basked.png'
import blackdownload from '../../images/blackdownload.png'
import send from '../../images/podelica.png'
import bottom from '../../images/bottom.png'
import './CardPage.css'
import { ProduktCard2 } from '../../components/ProduktCard2/ProduktCard2'

export const CardPage = () => {
  return (
    <div className='card-page'>
      <Header/>
      <div className="container">
        <hr className='hr'/>
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
              <div className="opacity"></div>
              <li className="card-link">
                <Link className='unstyled' to='/'>Уход за руками</Link>
              </li>
              <div className="opacity"></div>
              <li className="card-link">
                <Link className='unstyled' to='/'>Мыло твердое</Link>
              </li>
              <div className="opacity"></div>
              <li className="card-link">
                <Link  to='/' className='mute unstyled'>BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г</Link>
              </li>
            </ul>
          </div>
          <div className="big-card">
            <div className="left-img-box">
              <img src={soap} alt="" />
            </div>
            <div className="main-right-info-box">
              <div className="card-right-top-box">
                <span className="green-span">В наличии</span>
                <span className='product-name'><b>BioMio BIO-SOAP</b> Экологичное туалетное 
                мыло. Литсея и бергамот</span>
                <div className="gr">
                  <img src={yashik} alt="" />
                  <span className="gr-span">90 г</span>
                </div>
                <div className="pokupka">
                  <div className="flex-box">
                    <span className="price-span">48,76 ₸</span>
                    <div className="count-box">
                      <button className="decrement">-</button>
                      <span className="count">1</span>
                      <button className="decrement">+</button>
                    </div>
                    <button className="yellow-btn23"><span className='btn-span23'>В КОРЗИНУ</span>  <img src={WhiteBasked} alt="" /></button>
                  </div>
                  <div className="flex-box">
                    <div className="send-box">
                      <img className='send-img' src={send} alt="" />
                    </div>
                    <div className="card-page-span-box">
                      <span className="flex-span">При покупке от <b>10 000 ₸</b>  бесплатная доставка по Кокчетаву и области</span>
                    </div>
                    <button className="price-btn">Прайс-лист <img className='btn-img' src={blackdownload} alt="" /></button>
                  </div>
                  <ul className="product-info-list">
                    <li className="product-info-flex"><span className="mute-span">Производитель:</span><span className="vslue">BioMio</span></li>
                    <li className="product-info-flex"><span className="mute-span">Бренд:</span><span className="vslue">BioMio</span></li>
                    <li className="product-info-flex"><span className="mute-span">Артикул:</span><span className="vslue">460404</span></li>
                    <li className="product-info-flex"><span className="mute-span">Кол-во в коробке:</span><span className="vslue">2</span></li>
                    <li className="product-info-flex"><span className="mute-span">Штрихкод:</span><span className="vslue"></span>4604049097548</li>
                    <li className="product-info-flex"><span className="mute-span">Размеры коробки(Д*Ш*В):</span><span className="vslue">10х10х10</span></li>
                    <li className="product-info-flex"><span className="mute-span">Вес коробки:</span><span className="vslue">1020 г</span></li>
                  </ul>
                  <div className="flex-box">
                    <span className="opisanie">Описание</span>
                    <img src={bottom} alt="" />
                  </div>
                  <hr className="hr2" />
                  <div className="flex-box">
                    <span className='opisanie'>Характеристики</span>
                    <img src={bottom} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-tovar-top-box">
                <div className="a-tovar-text-box">
                    <h2 className="a-tovar-text yellow-text">Похожие</h2>
                    <h2 className="a-tovar-text">товары</h2>
                </div>
            </div>
            <div className="p-tovar-bottom-box">
              <ProduktCard2/>
            </div>
            <div className="p-tovar-top-box">
                <div className="a-tovar-text-box">
                    <h2 className="a-tovar-text yellow-text">Недавно  
                    просмотренные </h2>
                    <h2 className="a-tovar-text">товары</h2>
                </div>
            </div>
            <div className="p-tovar-bottom-box">
              <ProduktCard2/>
            </div>
      </div>
      <Footer/>
      </div>
  )
}
