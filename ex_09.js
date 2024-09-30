
function checkVariableType(input_var) {
    let type = typeof input_var;

    if (type === "number") {
        if (Number.isInteger(input_var)) {
            type = "Integer";
        } else {
            type = "Float";
        }
    } else if (type === "boolean") {
        type = "Boolean";
    } else if (type === "string") {
        type = "String";
    }

    document.body.innerHTML = `The variable value is '${input_var}'.<br>Its type is '${type}'.<br>`;

    if (input_var == 42) {
        document.body.innerHTML += "It is the meaning of life.";
    }
}

//let input_var = 42; 

checkVariableType(input_var);
