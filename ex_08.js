// let breadCount = 8;
// let hamCount = 9;
// let tunaCount = 9;

if (breadCount >= 2 && hamCount >= 1 && tunaCount >= 1) {
    document.body.innerHTML = "I can make a royal sandwich!";
} else if (breadCount >= 2 && hamCount >= 1) {
    document.body.innerHTML = "I can make a ham sandwich!";
} else if (breadCount >= 2 && tunaCount >= 1) {
    document.body.innerHTML = "I can make a tuna sandwich!";
} else {
    document.body.innerHTML = "I'd rather be fasting tonight...";
}
