import { Dispatch, SetStateAction } from 'react';
import '../styles/home.css';
import { CookieCarousel } from './cookieCarousel';

type Props = {
    setCookieType: Dispatch<SetStateAction<string>>;
};

export const Home: React.FC<Props> = ({ setCookieType }) => {
    return (
        <div className="home-container">
            <div className="home">
                <div className="carousel-container">
                    <CookieCarousel
                        setCookieType={setCookieType}
                    ></CookieCarousel>
                </div>
            </div>
        </div>
    );
};
