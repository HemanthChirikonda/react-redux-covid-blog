import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store';
import App from './App'


// window.store= MainDashboardStore;

// MainDashboardStore.subscribe=()=>{
//     console.log(MainDashboardStore.getState())
// }


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.querySelector('#root')); 