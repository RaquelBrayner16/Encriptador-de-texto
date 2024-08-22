// Função para criptografar a mensagem
function btEncriptar() {
    const inputText = document.getElementById('inputTextArea').value;
    const encryptedText = encrypt(inputText);

    // Atualiza o texto criptografado na área de saída
    document.querySelector('.mensagem').textContent = encryptedText;
    updateUIForOutput();
}

// Função para descriptografar a mensagem
function btDescriptografar() {
    const inputText = document.getElementById('inputTextArea').value;
    const decryptedText = decrypt(inputText);

    // Atualiza o texto descriptografado na área de saída
    document.querySelector('.mensagem').textContent = decryptedText;
    updateUIForOutput();
}

// Função de criptografia simples (substituição de caracteres)
function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função de descriptografia 
function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Atualização para mostrar ou esconder o contêiner de imagem e mensagens padrão
function updateUIForOutput() {
    const imageContainer = document.getElementById('imageContainer');
    const outputContainer = document.querySelector('.output-container');
    const inputTextArea = document.getElementById('inputTextArea').value;
    const outputTextArea = document.querySelector('.mensagem').value;

    if (inputTextArea || outputTextArea) {
        imageContainer.style.display = 'none'; 
        outputContainer.style.display = 'block'; 
    } else {
        imageContainer.style.display = 'block'; 
        outputContainer.style.display = 'none'; 
    }
}


document.getElementById('copyBtn').addEventListener('click', () => {
    const messageTextArea = document.querySelector('.mensagem');
    messageTextArea.select();
    document.execCommand('copy');
});

// Adiciona eventos de clique para os botões
document.getElementById('cript').addEventListener('click', btEncriptar);
document.getElementById('descript').addEventListener('click', btDescriptografar);



document.getElementById('copyBtn').addEventListener('click', function() {
    const mensagemElement = document.querySelector('.mensagem');

    // Cria um elemento de textarea temporário para segurar o texto
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = mensagemElement.textContent; 
    document.body.appendChild(tempTextarea); 

    // Seleciona o conteúdo do textarea temporário
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    
    document.body.removeChild(tempTextarea);

});
















