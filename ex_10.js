//let breadCount = 77;
//let hamCount = 44;
//let tunaCount = 2;
//let tomatoCount = 42;
//let saladCount = 3;


let hamSandwichCount = Math.min(Math.floor(breadCount / 2), hamCount);
let tunaSandwichCount = Math.min(Math.floor(breadCount / 2), tunaCount, Math.floor(saladCount / 2));
let vegetarianSandwichCount = Math.min(Math.floor(breadCount / 2), saladCount, Math.floor(tomatoCount / 2));

function displayingredients() {
    document.body.innerHTML = `
        <p>Number of ham sandwich(es): ${hamSandwichCount}</p>
        <p>Number of tuna sandwich(es): ${tunaSandwichCount}</p>
        <p>Number of vegetarian sandwich(es): ${vegetarianSandwichCount}</p>
    `;
}

displayingredients();
