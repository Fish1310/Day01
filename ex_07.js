// let password = "azerty";  // Test temporaire


if (password === "forty-two") {
    document.body.innerHTML = `
        <p>Password entered: ${password}</p>
        <p>Success</p>
    `;
} else {
    document.body.innerHTML = `
        <p>Password entered: ${password}</p>
        <p>Wrong password</p>
    `;
}