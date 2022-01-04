import '../styles/cookieCarousel.css';
import { useState, Dispatch, SetStateAction } from 'react';
import Carousel from 'react-material-ui-carousel';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

import { Cookie } from './cookie';
import FortuneCookieImage from '../images/fortunecookie.png';
import AnswerCookieImage from '../images/answercookie.png';
import NumbersCookieImage from '../images/numberscookie.png';
import FortuneList from '../data/fortunelist';
import QuestionList from '../data/questionlist';
import HandleNext from '../helpers/handleNext';
import HandlePrev from '../helpers/handlePrev';

type Props = {
    setCookieType: Dispatch<SetStateAction<string>>;
};

export const CookieCarousel: React.FC<Props> = ({ setCookieType }) => {
    const [carouselIndex, setCarouselIndex] = useState(2);
    const [fortuneOpen, setFortuneOpen] = useState(false);
    const [answerOpen, setAnswerOpen] = useState(false);
    const [numbersOpen, setNumbersOpen] = useState(false);

    let Cookies = [
        <Cookie
            cookieClass={'fortune-cookie'}
            cookieImage={FortuneCookieImage}
            cookieData={FortuneList}
            openCookie={fortuneOpen}
            setOpenCookie={setFortuneOpen}
        ></Cookie>,
        <Cookie
            cookieClass={'answer-cookie'}
            cookieImage={AnswerCookieImage}
            cookieData={QuestionList}
            openCookie={answerOpen}
            setOpenCookie={setAnswerOpen}
        ></Cookie>,
        <Cookie
            cookieClass={'numbers-cookie'}
            cookieImage={NumbersCookieImage}
            cookieData={FortuneList}
            openCookie={numbersOpen}
            setOpenCookie={setNumbersOpen}
        ></Cookie>
    ];

    return (
        <div>
            <Carousel
                navButtonsAlwaysVisible
                animation="slide"
                autoPlay={false}
                indicators={false}
                navButtonsWrapperProps={{
                    style: {
                        top: 'calc(50% - 70px)'
                    }
                }}
                NavButton={({ onClick, className, style, next, prev }) => {
                    return (
                        <button
                            className="carousel-button"
                            type="submit"
                            onClick={() => onClick()}
                        >
                            {next && (
                                <ChevronRightOutlinedIcon className="carousel-icon"></ChevronRightOutlinedIcon>
                            )}
                            {prev && (
                                <ChevronLeftOutlinedIcon className="carousel-icon"></ChevronLeftOutlinedIcon>
                            )}
                        </button>
                    );
                }}
                next={() => {
                    HandleNext(
                        carouselIndex,
                        setCarouselIndex,
                        setCookieType,
                        setFortuneOpen,
                        setAnswerOpen,
                        setNumbersOpen
                    );
                }}
                prev={() => {
                    HandlePrev(
                        carouselIndex,
                        setCarouselIndex,
                        setCookieType,
                        setFortuneOpen,
                        setAnswerOpen,
                        setNumbersOpen
                    );
                }}
            >
                {Cookies}
            </Carousel>
        </div>
    );
};
