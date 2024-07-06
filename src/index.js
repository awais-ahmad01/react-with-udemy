import React from 'react';

import ReactDOM from 'react-dom/client';
import Header from './components/Header';

const App = () => {
    return(
        <div className='salam'>
            <h1>
                Assalam O Alaikom!!
            </h1>

            <Header/>

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)
