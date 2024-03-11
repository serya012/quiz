document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const respostasCorretas = ['a', 'a', 'a', 'c', 'b']; // Respostas corretas
    const formData = new FormData(this);
    let pontuacao = 0;

    // Verifica as respostas do usuário
    for (let i = 1; i <= 5; i++) {
        const respostaSelecionada = formData.get('pergunta' + i);
        if (respostaSelecionada === respostasCorretas[i - 1]) {
            pontuacao++;
        }
    }

    // Se todas as respostas estiverem corretas, redireciona para nmr2.html
    if (pontuacao === 5) {
        window.location.href = "nmr2.html";
    } else {
        alert("Ops! Algumas respostas estão incorretas. Tente novamente!");
    }
});
