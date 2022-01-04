import { Dispatch, SetStateAction } from 'react';

export default function SetCookie(
    index: number,
    setCookieType: Dispatch<SetStateAction<string>>
) {
    if (index === 0) {
        setCookieType('cookie');
    } else if (index === 1) {
        setCookieType('question');
    } else {
        setCookieType('numbers');
    }
}
