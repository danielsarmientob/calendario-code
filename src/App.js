import React from 'react';
import { Provider } from 'react-redux';



import { HomePage } from './Screen/HomePage';
import { store } from './store/store';

export const App = () => {

    return (
        <Provider store={store}>
            <HomePage/>
        </Provider>
    )
}
