

// Função para calcular a média final
function calcularMediaFinal() {
    var total = 0;
    for (var i = 1; i <= 4; i++) {
        total += parseFloat(localStorage.getItem("media" + i));
    }
    var mediaFinal = total / 4; // Dividir a soma das médias dos bimestres por 4
    localStorage.setItem("mediaFinal", mediaFinal.toFixed(2)); // Armazena a média final
    alert("Média Final calculada: " + mediaFinal.toFixed(2));
}


// Função para registrar as notas de um bimestre e calcular a média
function registrarNotas(bimestre) {
    var nota1 = parseFloat(document.getElementById("nota" + bimestre + "_1").value);
    var nota2 = parseFloat(document.getElementById("nota" + bimestre + "_2").value);
    var nota3 = parseFloat(document.getElementById("nota" + bimestre + "_3").value);

    // Verifica se todas as notas foram preenchidas
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        var media = (nota1 + nota2 + nota3) / 3;
        localStorage.setItem("media" + bimestre, media.toFixed(2)); // Armazena a média
        document.getElementById("resultado" + bimestre).innerText = "Resultado: " + media.toFixed(2); // Exibe o resultado
        alert("Notas registradas com sucesso para o Bimestre " + bimestre + ".");
    } else {
        alert("Por favor, preencha todas as notas para o Bimestre " + bimestre + ".");
    }
}

// Função para somar todas as médias dos bimestres e calcular a média final
function somarNotas() {
    var total = 0;
    var numBimestresComMedia = 0; // Variável para contar o número de bimestres com médias válidas
    for (var i = 1; i <= 4; i++) {
        var media = parseFloat(localStorage.getItem("media" + i));
        if (!isNaN(media)) {
            total += media; // Adiciona a média do bimestre ao total
            numBimestresComMedia++; // Incrementa o contador
        }
    }
    if (numBimestresComMedia > 0) {
        var mediaFinal = total; // A média final será a soma das médias dos bimestres
        document.getElementById("resultado").innerText = "Média Total: " + mediaFinal.toFixed(2);
    } else {
        document.getElementById("resultado").innerText = "Nenhuma média registrada ainda.";
    }
}














// Função para atualizar o estado do botão de soma das notas
function atualizarBotaoSomar() {
    var btnSomarNotas = document.getElementById("btnSomarNotas");
    btnSomarNotas.disabled = !verificarMediasRegistradas(); // Desabilita o botão se as médias estiverem faltando
}

// Função para verificar se todas as médias foram registradas
function verificarMediasRegistradas() {
    for (var i = 1; i <= 4; i++) {
        var media = localStorage.getItem("media" + i);
        if (media === null) {
            return false; // Retorna falso se alguma média estiver faltando
        }
    }
    return true; // Retorna verdadeiro se todas as médias estiverem presentes
}

// Evento de carregamento da página
window.onload = function() {
    atualizarBotaoSomar();
};
