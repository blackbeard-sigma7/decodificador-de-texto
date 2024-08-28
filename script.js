const inputTexto = document.querySelector("#input-texto");
const outputTexto = document.querySelector("#output-texto");
const mensagemValidacao = document.querySelector("#mensagem-validacao");

function criptografar() {
    if (validar(inputTexto.value)) {
        // Lógica de criptografia (implementar)
        outputTexto.value = inputTexto.value; // Substituir pela lógica real
        mensagemValidacao.textContent = ""; 
    } else {
        mensagemValidacao.textContent = "Apenas letras minúsculas e sem acento.";
        outputTexto.value = "";
    }
}

function descriptografar() {
    if (validar(inputTexto.value)) {
        // Lógica de descriptografia (implementar)
        outputTexto.value = inputTexto.value; // Substituir pela lógica real
        mensagemValidacao.textContent = ""; 
    } else {
        mensagemValidacao.textContent = "Apenas letras minúsculas e sem acento.";
        outputTexto.value = "";
    }
}

function validar(texto) {
    // Lógica de validação (implementar)
    return true; // Substituir pela lógica real
}