import React from 'react'
import Logo from '../../images/logo.png'
import Loc from '../../images/loc.png'
import Katalog from '../../images/katalog.png'
import Email from '../../images/pochta.png'
import search from '../../images/search.png'
import Assist from '../../images/g.png'
import download from '../../images/download.png'
import magaz from '../../images/basked.png'
import './Header.css'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <header>
        <div className="container">
          <div className="header-content">
            <div className="header-top">
              <div className="header-left">
                <div className="ht-left-box">
                  <div className="location">
                    <img src={Loc} alt="" />
                    <div className="loc-text">
                      <span className='bold block'>
                        г. Кокчетав, ул. Ж. Ташенова 129Б 
                      </span>
                      <span className='mute'>
                        (Рынок Восточный)
                      </span>
                    </div>
                  </div>
                  <div className="opacity"></div>
                  <div className="email">
                    <img src={Email} alt="" />
                    <div className="loc-text">
                      <span className='bold block'>
                        opt.sultan@mail.ru 
                      </span>
                      <span className='mute'>
                        На связи в любое время
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ht-right-box">
                <nav className="navbar">
                  <ul className="nav-list">
                    <li className="nav-item">
                      <Link to='/cardpage' className="nav-link mute hover-mix">О компании</Link>
                    </li>
                    <div className="opacity"></div>
                    <li className="nav-item">
                      <Link to="/" className="nav-link mute hover-mix">Доставка и оплата</Link>
                    </li>
                    <div className="opacity"></div>
                    <li className="nav-item">
                      <Link to="/" className="nav-link mute hover-mix">Возврат</Link>
                    </li>
                    <div className="opacity"></div>
                    <li className="nav-item">
                      <Link to="/" className="nav-link mute hover-mix">Контакты</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <hr className='hr'/>
            <div className="header-bottom">
              <div className="header-bot-left">
                <div className="logo-box">
                  <Link to={'/'}>
                   <img src={Logo} alt="logo-site" className='logo-site' />
                  </Link>
                  <Link  to={'/katalog'} className='yellow yellow-button katalog-btn hover-btn'><span className='btn-span'>Каталог</span><img src={Katalog} alt="" /></Link>
                </div>
                <div className="input-box">
                  <input className='header-input hover-mix' placeholder='Поиск...' type="text"/>
                  <button className='input-btn btn' type='submit'><img src={search} alt="" /></button>
                </div>
                <div className="assistant">
                  <span className='bold assistant'>+7 (777) 490-00-91</span>
                  <span className='mute assistant'>время работы: 9:00-20:00</span>
                  <a href='#' className='mute assistant hover-mix'>Заказать звонок</a>
                </div>
                <img className='assist-img' src={Assist} alt="" />
                <div className="online"></div>
                <div className="opacity"></div>
              </div>
              <div className="header-bot-right">
                <div className="">
                  <button className='yellow yellow-button price hover-btn'>Прайс-лист <img className='download-img' src={download} alt="" /></button>
                </div>
                <div className="opacity"></div>
                <Link to={'/korzina'}>
                  <img className='basked-img hover-mix' src={magaz} alt="" />
                </Link>
                <div className="basked-count"><span>3</span></div>              
                <div  className="header-text-box">
                  <span className="mute  header-bottom-text">Корзина</span>
                  <span className='bold'>12 478 ₸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}
