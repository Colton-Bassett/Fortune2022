import { Dispatch, SetStateAction } from 'react';

export default function HandleOpenCookie(
    openCookie: boolean,
    setOpenCookie: Dispatch<SetStateAction<boolean>>
) {
    let tempOpenCookie = openCookie;
    // opening cookie
    if (tempOpenCookie === false) {
        // do nothing
    }

    tempOpenCookie = !tempOpenCookie;
    setOpenCookie(tempOpenCookie);
}
