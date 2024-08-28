const inputTexto = document.querySelector("#input-texto");
const outputTexto = document.querySelector("#output-texto");
const mensagemValidacao = document.querySelector("#mensagem-validacao");

function criptografar() {
    if (validar(inputTexto.value)) {
        const textoCriptografado = criptografarTexto(inputTexto.value);
        outputTexto.value = textoCriptografado;
        mensagemValidacao.textContent = ""; 
    } else {
        mensagemValidacao.textContent = "Apenas letras minúsculas e sem acento.";
        outputTexto.value = "";
    }
}

function descriptografar() {
    if (validar(inputTexto.value)) {
        const textoDescriptografado = descriptografarTexto(inputTexto.value);
        outputTexto.value = textoDescriptografado;
        mensagemValidacao.textContent = ""; 
    } else {
        mensagemValidacao.textContent = "Apenas letras minúsculas e sem acento.";
        outputTexto.value = "";
    }
}

function criptografarTexto(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let codigoUnicode = texto.charCodeAt(i);
        codigoUnicode += 1; // Desloca o código Unicode em 1 posição
        resultado += String.fromCharCode(codigoUnicode);
    }
    return resultado;
}

function descriptografarTexto(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let codigoUnicode = texto.charCodeAt(i);
        codigoUnicode -= 1; // Desloca o código Unicode de volta em 1 posição
        resultado += String.fromCharCode(codigoUnicode);
    }
    return resultado;
}

function validar(texto) {
    return !/[A-ZÀ-Ú\s\W_]/.test(texto); // Verifica se há letras maiúsculas, acentos, espaços ou caracteres especiais
}
