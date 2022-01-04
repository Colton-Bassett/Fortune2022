import { Dispatch, SetStateAction } from 'react';
import setCookie from './setCookie';

export default function HandlePrev(
    carouselIndex: number,
    setCarouselIndex: Dispatch<SetStateAction<number>>,
    setCookieType: Dispatch<SetStateAction<string>>,
    setFortuneOpen: Dispatch<SetStateAction<boolean>>,
    setAnswerOpen: Dispatch<SetStateAction<boolean>>,
    setNumbersOpen: Dispatch<SetStateAction<boolean>>
) {
    let tempIndex = carouselIndex;
    if (tempIndex === 0) {
        tempIndex = 2;
    } else {
        tempIndex -= 1;
    }

    setCarouselIndex(tempIndex);
    setCookie(tempIndex, setCookieType);
    setFortuneOpen(false);
    setAnswerOpen(false);
    setNumbersOpen(false);
}
