import { PageHeader } from 'antd';
import React, { useEffect, useState } from 'react';
import s from './App.module.scss'
import Main from './components/Main/Main';
import NavMenu from './components/NavMenu/NavMenu';

import Header from './components/Header/Header';

const App = () => {


    


    return (
        <div className={s.root}>
            <NavMenu className={s.menu} place='root' />
            <Header />
            <Main />
        </div>
    )
}

export default App;