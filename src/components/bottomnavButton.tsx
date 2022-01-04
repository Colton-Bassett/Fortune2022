import { Dispatch, SetStateAction } from 'react';
import '../styles/bottomnav.css';

import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';

import HandleBottomNavCarousel from '../helpers/handleBottomnavCarousel';

type Props = {
    buttonType: string;
    cookieType: string;
    setCookieType: Dispatch<SetStateAction<string>>;
    handleCookieType: (
        type: string,
        setCookieType: Dispatch<SetStateAction<string>>
    ) => void;
};

export const BottomNavButton: React.FC<Props> = ({
    buttonType,
    cookieType,
    setCookieType,
    handleCookieType
}) => {
    let cookieButtonClass = 'bottom-nav-cookie-button';
    let questionButtonClass = 'bottom-nav-question-button';
    let numbersButtonClass = 'bottom-nav-number-button';

    let cookieTextClass = 'bottom-nav-cookie-text';
    let questionTextClass = 'bottom-nav-question-text';
    let numbersTextClass = 'bottom-nav-numbers-text';

    let ButtonIcon;
    let Text;

    if (buttonType === 'cookie') {
        if (cookieType === buttonType) {
            cookieButtonClass = 'bottom-nav-button-active';
            cookieTextClass = 'bottom-nav-text-active';
        }
        ButtonIcon = (
            <CookieOutlinedIcon
                className={cookieButtonClass}
            ></CookieOutlinedIcon>
        );
        Text = <div className={cookieTextClass}>{buttonType}</div>;
    }

    if (buttonType === 'question') {
        if (cookieType === buttonType) {
            questionButtonClass = 'bottom-nav-button-active';
            questionTextClass = 'bottom-nav-text-active';
        }
        ButtonIcon = (
            <QuestionMarkOutlinedIcon
                className={questionButtonClass}
            ></QuestionMarkOutlinedIcon>
        );
        Text = <div className={questionTextClass}>{buttonType}</div>;
    }

    if (buttonType === 'numbers') {
        if (cookieType === buttonType) {
            numbersButtonClass = 'bottom-nav-button-active';
            numbersTextClass = 'bottom-nav-text-active';
        }
        ButtonIcon = (
            <NumbersOutlinedIcon
                className={numbersButtonClass}
            ></NumbersOutlinedIcon>
        );
        Text = <div className={numbersTextClass}>{buttonType}</div>;
    }

    return (
        <div
            className="bottom-nav-icon-wrapper"
            onClick={() => {
                handleCookieType(buttonType, setCookieType);
                HandleBottomNavCarousel(cookieType, buttonType);
            }}
        >
            {ButtonIcon}
            {Text}
        </div>
    );
};
