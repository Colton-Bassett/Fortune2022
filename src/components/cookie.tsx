import '../styles/cookies.css';
import { Dispatch, SetStateAction } from 'react';

import OpenCookie from '../images/opencookie.png';
import CloseIcon from '@mui/icons-material/Close';

import GetFortune from '../helpers/getFortune';
import HandleOpenCookie from '../helpers/handleOpenCookie';

type Props = {
    cookieClass: string;
    cookieImage: string;
    cookieData: { message: string }[];
    openCookie: boolean;
    setOpenCookie: Dispatch<SetStateAction<boolean>>;
};

export const Cookie: React.FC<Props> = ({
    cookieClass,
    cookieImage,
    cookieData,
    openCookie,
    setOpenCookie
}) => {
    return (
        <div className="cookie-container">
            <div className="cookie-wrapper">
                <CloseIcon
                    className="close-icon"
                    style={{ display: openCookie ? 'block' : 'none' }}
                    onClick={() => {
                        HandleOpenCookie(openCookie, setOpenCookie);
                    }}
                ></CloseIcon>
                <img
                    src={cookieImage}
                    alt="Fortune Cookie"
                    className={cookieClass}
                    style={{ display: openCookie ? 'none' : 'block' }}
                    onClick={() => {
                        HandleOpenCookie(openCookie, setOpenCookie);
                    }}
                ></img>
                <img
                    src={OpenCookie}
                    alt="Open Cookie"
                    className="open-cookie"
                    style={{ display: openCookie ? 'block' : 'none' }}
                    onClick={() => {
                        HandleOpenCookie(openCookie, setOpenCookie);
                    }}
                ></img>
            </div>
            <div
                className="cookie-fortune-container"
                style={{ display: openCookie ? 'flex' : 'none' }}
            >
                <div className="cookie-fortune-paper">
                    <div className="cookie-fortune">
                        {GetFortune(cookieClass, cookieData)}
                    </div>
                </div>
            </div>
        </div>
    );
};
