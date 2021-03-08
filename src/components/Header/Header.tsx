import { PageHeader, Menu, Dropdown, Radio } from 'antd'
import React, { useEffect, useState } from 'react';

import Avatar from '../../assets/avatar.png';
import CoinBL from '../NavMenu/assets/CoinBL.png'
import { gql, useQuery, ApolloClient, InMemoryCache } from '@apollo/client';

import s from './Header.module.scss'
import './Head.css'

import NavMenu from '../NavMenu/NavMenu';
import MenuBT from './MenuBT.png'


const Header = () => {


    const [currencies, setCurrencies] = useState<any>();
    const [list, setList] = useState<any>();
    const [current, setCurrent] = useState<any>('USD');


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
        console.log(document.getElementById(`check${e.key}`))
        currencies.map((item: any, index: number) => {
            const mItem: any = document.getElementById(item.code);
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
                                            id={item.code}
                                        />
                                            {item.code} {item.value}</div>)
                                        : (<div><input type='checkbox'
                                            id={item.code}
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
        <PageHeader
            className={s.header}
            onBack={() => null}
            title="Назад"
        >
            <div className={s.head_controls}>
                {
                    //@ts-ignore
                    <Dropdown overlay={list} trigger={['click']}>
                        <a className={s.droplink} onClick={e => e.preventDefault()}>
                            <div>1235 $</div>
                            <img src={CoinBL} alt="" className={s.coin} />
                        </a>
                    </Dropdown>
                }

                <img src={Avatar} className={s.avatar} alt="" />
            </div>

            <div className={s.burg}>
                <Dropdown overlay={() => <NavMenu place="head"/>} trigger={['click']}>
                    <a onClick={e => e.preventDefault()}>
                            <img src={MenuBT} alt="" className={s.coin} />
                        </a>
                </Dropdown>
            </div>
        </PageHeader>
    )
}

export default Header


{/* <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
); */}