import { Button, Input, InputNumber, Table } from 'antd';
import React, { useState } from 'react';
import { Data } from '../../data/Data';
import s from './Main.module.scss';
import CartWH from '../NavMenu/assets/CartWH.png'

const Main = () => {

    const [cart, setCart] = useState(5);

    const dataSource = [
        {
            key: '1',
            property: 'Категорії',
            value: Data.categories.join(', '),
        },
        {
            key: '2',
            property: 'Матеріали',
            value: Data.materials.join(', '),
        },
        {
            key: '3',
            property: 'Бренд',
            value: Data.brand,
        },
        {
            key: '4',
            property: 'Область застосування',
            value: Data.app_area,
        },
        {
            key: '5',
            property: `Об'єм(м³)`,
            value: Data.volume,
        },
        {
            key: '6',
            property: 'Вага(kg)',
            value: Data.weight,
        },
        {
            key: '7',
            property: 'Час доставки(днів)',
            value: Data.ship_time,
        },
        {
            key: '8',
            property: 'Сезон',
            value: Data.season,
        },
        {
            key: '9',
            property: 'Артикул',
            value: Data.code,
        },
        {
            key: '10',
            property: 'Номер товару',
            value: Data.number,
        },
    ];

    const columns = [
        {
            title: '',
            dataIndex: 'property',
            key: 'property',
            className: s.column
        },
        {
            title: '',
            dataIndex: 'value',
            key: 'value',
            className: s.column
        },
    ];
    

    return (
        <div className={s.root}>
            <div className={s.addTo}>
                <span>{Data.price * cart} <div className={s.icon}> ₴</div> </span>
                <div>
                    <button 
                        className={s.actionInp}
                        onClick={() => setCart(cart-1)}
                    >
                        -
                    </button>
                    <input type="number" value={cart} onChange={(e) => setCart(+e.target.value)}/>
                    <button 
                        className={s.actionInp}
                        onClick={() => setCart(cart+1)}
                    >
                        +
                    </button>
                    <Button 
                        type="primary"
                        className={s.toCart}
                    >
                        <img src={CartWH} alt=""/>
                    </Button>
                </div>
            </div>
            <img className={s.image} src={Data.img} alt="sweatshirt" />
            <div className={s.info}>
                <h2>{Data.name}</h2>

                <div className={s.prices}>
                    <div className={s.price}>
                        <span>
                            Ціна закупки
                            <div title='Инфо' className={s.icon}>
                                🛈
                            </div>
                        </span>
                        <div>
                            {Data.price}
                            <span className={s.icon}>₴</span>
                        </div>
                    </div>

                    <div className={s.price}>
                        <span>
                            Ціна продажу
                            <div title='Инфо' className={s.icon}>
                                🛈
                            </div>
                        </span>
                        <div className={s.icon}>
                            {Data.retail}
                            <span className={s.icon}>₴</span>
                        </div>
                    </div>

                    <div className={s.price}>
                        <span>
                            Рентабельність
                            <div title='Инфо' className={s.icon}>
                                🛈
                            </div>
                        </span>
                        <div style={{ color: '#4E9616' }}>
                            {Math.ceil((Data.retail - Data.price) / Data.price * 100)}
                            <span className={s.icon}>%</span>
                        </div>
                    </div>
                </div>

                <p className={s.description}>
                    {Data.description}
                </p>
            </div>

            <div className={s.card}>
                <span className={s.code}>Артикул: <div>{Data.code}</div></span>

                <h3>{Data.name}</h3>

                <span className={s.card_price}>
                    {Data.price}
                    <span>₴</span>
                </span>

                <div className={s.shipping}>
                    <span>Мінімальна кількість замовлення: <b>5 шт</b> </span>
                    <span>Час доставки: <b>12 днів</b> </span>
                    <span>Розміщення товару: <b>склад, Україна</b></span>
                </div>

                <div className={s.add}>
                    <div className={s.sum}>
                        Сума
                        <span>{Data.price * cart} <div className={s.icon}>₴</div></span>
                    </div>

                    <div className={s.cart_count}>
                        Кількість
                        <InputNumber
                            className={s.numberInput}
                            value={cart}
                            size='large'
                            onChange={(value) => setCart(value)}
                        />
                    </div>

                    <Button
                        type="primary"
                        size="large"
                        className={s.button}
                        
                    >
                        <img src={CartWH} alt="" />
                        Buy
                    </Button>
                </div>
            </div>

            <div className={s.properties}>
                <h3>Характеристики товару</h3>

                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                />
            </div>

        </div>
    )
}

export default Main;