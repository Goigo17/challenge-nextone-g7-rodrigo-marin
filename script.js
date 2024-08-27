function encodeText() {
    const inputText = document.getElementById("inputText").value;
    let encodedText = inputText        
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    const outputTextArea = document.getElementById('outputText');
    outputTextArea.value = encodedText;
    outputTextArea.classList.add("no-imagen");
    botonCopiar.style.display = "block";
}

function decodeText() {
    const inputText = document.getElementById("inputText").value;
    let decodedText = inputText
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")
        .replace(/ai/g, "a");

    const outputTextArea = document.getElementById("outputText");
    outputTextArea.value = decodedText;
    outputTextArea.classList.add("no-imagen"); 
    botonCopiar.style.display = "block"; 
}

function copyText() {
    const outputText = document.getElementById("outputText").value;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("⚽ ¡Tu texto de ha copiado al portapapeles! ⚽");
        
    }).catch(err => {
    });

    

}




