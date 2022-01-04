let next = function () {
    let nextButton = document.getElementsByClassName(
        'carousel-button'
    )[0] as HTMLElement;
    nextButton?.click();
};

let prev = function () {
    let prevButton = document.getElementsByClassName(
        'carousel-button'
    )[1] as HTMLElement;
    prevButton?.click();
};

export default function HandleBottomNavCarousel(
    cookieType: string,
    buttonType: string
) {
    switch (cookieType) {
        case 'cookie':
            if (buttonType === 'numbers') {
                prev();
            } else if (buttonType === 'question') {
                next();
            } else {
                // do nothing;
            }
            return;
        case 'question':
            if (buttonType === 'cookie') {
                prev();
            } else if (buttonType === 'numbers') {
                next();
            } else {
                // do nothing
            }
            return;
        case 'numbers':
            if (buttonType === 'question') {
                prev();
            } else if (buttonType === 'cookie') {
                next();
            } else {
                // do nothing;
            }
            return;
    }
}
