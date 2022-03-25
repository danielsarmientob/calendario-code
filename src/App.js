import React from 'react';

import { Header } from './components/Header';
import { MainCalendario } from './components/MainCalendario';
import { Modal } from './components/Modal';
import { SideBar } from './components/SideBar';

export const App = () => {
    return (
        <div>
            <div className='appGrid'>
                <Header/>
                <SideBar/>
                <MainCalendario/>
            </div>
            <Modal/>
        </div>
    )
}
