function criptografarTexto(texto, chave) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        const charCode = char.charCodeAt(0);

        // Aplica a criptografia apenas a caracteres alfabéticos
        if (charCode >= 65 && charCode <= 90) {
            const novoCharCode = ((charCode - 65 + chave) % 26) + 65;
            resultado += String.fromCharCode(novoCharCode);
        } else if (charCode >= 97 && charCode <= 122) {
            const novoCharCode = ((charCode - 97 + chave) % 26) + 97;
            resultado += String.fromCharCode(novoCharCode);
        } else {
            resultado += char; // Mantém outros caracteres inalterados
        }
    }
    return resultado;
}

function descriptografarTexto(texto, chave) {
    return criptografarTexto(texto, -chave); // Desloca na direção oposta
}

// Funções para interagir com o HTML
function criptografar() {
    const inputTexto = document.querySelector("#input-texto");
    const outputTexto = document.querySelector("#output-texto");
    const mensagemValidacao = document.querySelector("#mensagem-validacao");

    if (!/[A-ZÀ-Ú\s\W_]/.test(inputTexto.value)) {
        const textoCriptografado = criptografarTexto(inputTexto.value, 3); // Use a chave desejada
        outputTexto.value = textoCriptografado;
        mensagemValidacao.textContent = "";
    } else {
        mensagemValidacao.textContent = "Apenas letras minúsculas e sem acento.";
        outputTexto.value = "";
    }
}

function descriptografar() {
    const inputTexto = document.querySelector("#input-texto");
    const outputTexto = document.querySelector("#output-texto");
    const mensagemValidacao = document.querySelector("#mensagem-validacao");

    if (!/[A-ZÀ-Ú\s\W_]/.test(inputTexto.value)) {
        const textoDescriptografado = descriptografarTexto(inputTexto.value, 3); // Use a mesma chave
        outputTexto.value = textoDescriptografado;
        mensagemValidacao.textContent = "";
    } else {
        mensagemValidacao.textContent = "Apenas letras minúsculas e sem acento.";
        outputTexto.value = "";
    }
}
