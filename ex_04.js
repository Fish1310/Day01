
let undefinedVar;                
let booleanVar = true;           
let numberVar = 42;              
let bigintVar = 42n;             
let symbolVar = Symbol("symbole"); 
let objectVar = {};              
let functionVar = function() {}; 

document.body.innerHTML = `
    <p>undefined: ${typeof undefinedVar}</p>
    <p>boolean: ${typeof booleanVar}</p>
    <p>number: ${typeof numberVar}</p>
    <p>bigint: ${typeof bigintVar}</p>
    <p>symbol: ${typeof symbolVar}</p>
    <p>object: ${typeof objectVar}</p>
    <p>function: ${typeof functionVar}</p>
`;
