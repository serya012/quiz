document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o número de tentativas excedeu 3
    const tentativas = localStorage.getItem('tentativas');
    if (tentativas && parseInt(tentativas) >= 3) {
        // Remove o botão de aceitar
        const aceitarBtn = document.querySelector('.aceitar-btn');
        if (aceitarBtn) {
            aceitarBtn.remove();
        }
    }
});

// Função para obter uma mensagem não repetida
function obterMensagemNaoRepetida(frases, mensagensExibidas) {
    // Filtra as mensagens que ainda não foram exibidas
    const mensagensDisponiveis = frases.filter(frase => !mensagensExibidas.includes(frase));
    // Se todas as mensagens já foram exibidas, retorna null
    if (mensagensDisponiveis.length === 0) {
        return null;
    }
    // Escolhe uma mensagem aleatória entre as disponíveis
    const indice = Math.floor(Math.random() * mensagensDisponiveis.length);
    return mensagensDisponiveis[indice];
}

let mensagensExibidas = [];

function exibirNaoAceito() {
    const frasesNaoAceito = [
        "Entendo, mas não aceito um não como resposta. 😊",
        "Não é uma opção! 😄",
        "Não aceito um não vindo de você! 💖",
        "Que isso meu amor? quem te enganou dizendo pra vc que vc não namoraria cmg?😉",
        "Vai aceitar sim e acabou : ) ",
        "Bora amor aceita logo cacete", 
        "Que dificuldade pra aceitar em kkkkkkkk",
        "Vai aceitar não?"
    ];

    const mensagem = obterMensagemNaoRepetida(frasesNaoAceito, mensagensExibidas);
    if (mensagem) {
        alert(mensagem);
        mensagensExibidas.push(mensagem);
    } else {
        alert("Todas as mensagens foram exibidas. Não há mais mensagens disponíveis.");
    }
}

function iniciarQuiz() {
    const tentativas = localStorage.getItem('tentativas');
    if (tentativas && parseInt(tentativas) >= 3) {
        alert("Você esgotou suas tentativas. Tente novamente mais tarde.");
    } else {
        window.location.href = "quiz.html"; // Redireciona para a página do quiz
    }
}
