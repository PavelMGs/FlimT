import React, { useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, ShoppingCartOutlined, SettingOutlined } from '@ant-design/icons';
import s from './NavMenu.module.scss';
import SubMenu from 'antd/lib/menu/SubMenu';
import CatalogWH from './assets/CatalogWH.png'
import CatalogBL from './assets/CatalogBL.png'
import CartWH from './assets/CartWH.png'
import CartBL from './assets/CartBL.png'
import BasketWH from './assets/BasketWH.png'
import BasketBL from './assets/BasketBL.png'
import UserWH from './assets/UserWH.png'
import UserBL from './assets/UserBL.png'    //В макете иконка разбита на конструктор. нашёл в нете
import BoxWH from './assets/BoxWH.png'
import BoxBL from './assets/BoxBL.png'      //В макете иконка разбита на конструктор. нашёл в нете
import CoinWH from './assets/CoinWH.png'
import CoinBL from './assets/CoinBL.png'
import Logo from './assets/Logo.png'

interface INavMenu {
  className?: string
  place: string
}

const NavMenu: React.FC<INavMenu> = ({place}) => {

  const [catalog, setCatalog] = useState(CatalogWH);
  const [cart, setCart] = useState(CartWH);
  const [basket, setBasket] = useState(BasketWH);
  const [userIMG, setUserIMG] = useState(UserWH);
  const [box, setBox] = useState(BoxWH);
  const [coin, setCoin] = useState(CoinWH);
  const [menuClass, setMenuClass] = useState('menu_text')

  const handleClick = (e: any) => {
    console.log(e)
  }

  return (
    <>
      <Menu
        theme='dark'
        onClick={handleClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[]}
        mode="inline"
        className={s[place as keyof typeof s]}
      >
      <div className={s.logo}>
        <img 
          src={Logo} 
          alt=""
          width='24.4'
          height='28.86'
        />
        <b>Flimcor</b>
      </div>
        <Menu.Item key="1"  className={s.menu_item}
        onMouseEnter={() => {
          setCatalog(CatalogBL);
        }}
        onMouseLeave={() => {
          setCatalog(CatalogWH)
        }}
        >
          <img src={catalog} 
          className={s.menu_icon} 
          width={16}
          height={16}
          alt=""/> 
          <span>Каталог</span>
          </Menu.Item>

          <Menu.Item key="2"  className={s.menu_item}
        onMouseEnter={() => {
          setCart(CartBL)
        }}
        onMouseLeave={() => {
          setCart(CartWH)
        }}
        >
          <img src={cart} 
          className={s.menu_icon} 
          width={16}
          height={16}
          alt=""/> 
          <span>Заказы</span>
          </Menu.Item>

          <Menu.Item key="3"  className={s.menu_item}
        onMouseEnter={() => {
          setBasket(BasketBL)
        }}
        onMouseLeave={() => {
          setBasket(BasketWH)
        }}
        >
          <img src={basket} 
          className={s.menu_icon} 
          width={16}
          height={16}
          alt=""/> 
          <span>Заказы пользователей</span>
          </Menu.Item>

          <Menu.Item key="4"  className={s.menu_item}
        onMouseEnter={() => {
          setUserIMG(UserBL)
        }}
        onMouseLeave={() => [
          setUserIMG(UserWH)
        ]}
        >
          <img src={userIMG} 
          className={s.menu_icon} 
          width={16}
          height={16}
          alt=""/> 
          <span>Пользователи</span>
          </Menu.Item>

          <Menu.Item key="5"  className={s.menu_item}
        onMouseEnter={() =>{
          setBox(BoxBL)
        }}
        onMouseLeave={() => {
          setBox(BoxWH)
        }}
        >
          <img src={box} 
          className={s.menu_icon} 
          width={16}
          height={16}
          alt=""/> 
          <span>Поставщики</span>
          </Menu.Item>

          <Menu.Item key="6"  className={s.menu_item}
        onMouseEnter={() => {
          setCoin(CoinBL)
        }}
        onMouseLeave={() => {
          setCoin(CoinWH)
        }}
        >
          <img src={coin} 
          className={s.menu_icon} 
          width={16}
          height={16}
          alt=""/> 
          <span>Финансы</span>
          </Menu.Item>
       
      </Menu>
    </>
  );
}

export default NavMenu