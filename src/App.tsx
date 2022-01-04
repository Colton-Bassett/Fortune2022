import { useState } from 'react';
import './App.css';

import { Home } from './components/home';
import { Nav } from './components/nav';
import { BottomNav } from './components/bottomnav';
import HandleCookieType from './helpers/handleCookieType';

function App() {
    const [cookieType, setCookieType] = useState('cookie');

    return (
        <div className="App">
            <Nav cookieType={cookieType}></Nav>
            <Home setCookieType={setCookieType}></Home>
            <BottomNav
                cookieType={cookieType}
                setCookieType={setCookieType}
                handleCookieType={HandleCookieType}
            ></BottomNav>
        </div>
    );
}

export default App;
