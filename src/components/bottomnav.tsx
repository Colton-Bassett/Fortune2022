import { Dispatch, SetStateAction } from 'react';
import '../styles/bottomnav.css';

import { BottomNavButton } from './bottomnavButton';

type Props = {
    cookieType: string;
    setCookieType: Dispatch<SetStateAction<string>>;
    handleCookieType: (
        type: string,
        setCookieType: Dispatch<SetStateAction<string>>
    ) => void;
};

export const BottomNav: React.FC<Props> = ({
    cookieType,
    setCookieType,
    handleCookieType
}) => {
    return (
        <div className="bottom-nav-container">
            <header className="bottom-nav-wrapper">
                <nav className="bottom-nav">
                    <BottomNavButton
                        buttonType={'cookie'}
                        cookieType={cookieType}
                        setCookieType={setCookieType}
                        handleCookieType={handleCookieType}
                    ></BottomNavButton>
                    <BottomNavButton
                        buttonType={'question'}
                        cookieType={cookieType}
                        setCookieType={setCookieType}
                        handleCookieType={handleCookieType}
                    ></BottomNavButton>
                    <BottomNavButton
                        buttonType={'numbers'}
                        cookieType={cookieType}
                        setCookieType={setCookieType}
                        handleCookieType={handleCookieType}
                    ></BottomNavButton>
                </nav>
            </header>
        </div>
    );
};
