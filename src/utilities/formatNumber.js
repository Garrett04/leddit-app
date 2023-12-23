import numeral from "numeral"; // npm install numeral

export const formatNumber = (num) => {
    if (num > 1000) {
        // will return a number that's greater than 1000 a single decimal place and an abbreviated letter ('k', 'm', etc.)
        return numeral(num).format('0.0a'); 
    }
    return num;
}