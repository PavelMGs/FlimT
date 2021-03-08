
import { PageHeader, Menu, Dropdown, Radio } from 'antd'
import React, { useEffect, useState } from 'react';

import { gql, useQuery, ApolloClient, InMemoryCache } from '@apollo/client';

import s from './Currency.module.scss'


import NavMenu from '../NavMenu/NavMenu';
import MenuBT from './MenuBT.png'

import CoinBL from '../NavMenu/assets/CoinBL.png'

interface ICurr {
    place?: string
    className?: string
}


const Currency: React.FC<ICurr> = ({ place }) => {

    const [currencies, setCurrencies] = useState<any>();
    const [list, setList] = useState<any>();
    const [current, setCurrent] = useState<any>('USD');
    const [callPlace, setCallPlace] = useState(place);


    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://dev.flimcor.com/graphql',
            cache: new InMemoryCache()
        });


        client
            .query({
                query: gql`
            query getCurrencies {
              currencies {
                _id
                value
                name
                code
                badge
              }
            }`
            })
            .then(result => {
                setCurrencies(result.data.currencies);
                console.log(result)
            });

    }, [])

    const handleChecks = (e: any) => {
        setCurrent(e.key);
        currencies.map((item: any, index: number) => {
            const mItem: any = document.getElementById("s" + item.code);
            console.log(mItem)
            if (e.key === item.code) {
                mItem.checked = true
                console.log('sd')
            } else {

                if (mItem) {
                    console.log('12')
                    mItem.checked = false
                }
            }
        })
    }


    useEffect(() => {
        if (currencies) {
            
            const list = (
                <Menu
                    selectedKeys={current}
                    onClick={handleChecks}
                    //@ts-ignore
                    theme='dark'
                >
                    {
                        currencies.map((item: any) => {
                            return (
                                <Menu.Item
                                    key={item.code}
                                >
                                    {
                                        item.code === current
                                            ? (<div><input type='checkbox'
                                                checked={true}
                                                id={"s" + item.code}
                                            />
                                                {item.code} {item.value}</div>)
                                            : (<div><input type='checkbox'
                                                id={"s" + item.code}
                                            />
                                                {item.code} {item.value}</div>)
                                    }
                                </Menu.Item>)
                        })
                    }
                </Menu>
            )
            setList(list)
        } else {
            setList('noData')
        }
    }, [currencies])
    return (
        <Dropdown overlay={list} trigger={['click']}
            className={s[callPlace as keyof typeof s]}
        >
            <a className={s[(callPlace + 'droplink') as keyof typeof s]} onClick={e => e.preventDefault()}>
                <div 
                    className={s.sum}
                    >1235 $</div>
                <img src={CoinBL} alt="" className={s.coin} />
            </a>
        </Dropdown>

    )
}

export default Currency
