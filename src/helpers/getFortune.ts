export default function GetFortune(
    cookieClass: string,
    cookieData: { message: string }[]
) {
    let fortune;
    // number cookie
    if (cookieClass === 'numbers-cookie') {
        fortune = '';
        // 0 - 10
        let lessThanTen = Math.floor(Math.random() * (11 - 1) + 1);
        fortune += lessThanTen.toString() + `\u00a0 `;

        // 11 - 39
        let lessThanForty = Math.floor(Math.random() * (40 - 11) + 11);
        fortune += lessThanForty.toString() + `\u00a0 `;

        let num = Math.floor(Math.random() * (100 - 11) + 11);
        fortune += num.toString() + `\u00a0 `;

        let numtwo = Math.floor(Math.random() * (100 - 11) + 11);
        fortune += numtwo.toString();
        return fortune;
    } else {
        // fortune cookie & answer cookie
        fortune =
            cookieData[Math.floor(Math.random() * cookieData.length)].message;
    }

    return fortune;
}
