import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiObtnerDetallesYear } from '../actions/uiActions';

import { Header } from '../components/Header';
import { MainCalendario } from '../components/MainCalendario';
import { Modal } from '../components/Modal';
import { SideBar } from '../components/SideBar';


export const HomePage = () => {
    const dispatch = useDispatch();
    const {  yearSelecc } = useSelector(state => state.ui);
    useEffect( () => {
        const currentTime = new Date();
        dispatch( uiObtnerDetallesYear(currentTime.getFullYear()));
    }, [dispatch])
    if(yearSelecc === 0 ) return <div></div>
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
