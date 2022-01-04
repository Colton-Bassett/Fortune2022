import { Dispatch, SetStateAction } from 'react';

export default function HandleCookieType(
    type: string,
    setCookieType: Dispatch<SetStateAction<string>>
) {
    switch (type) {
        case 'cookie':
            setCookieType('cookie');
            break;
        case 'question':
            setCookieType('question');
            break;
        case 'numbers':
            setCookieType('numbers');
            break;
    }
}
