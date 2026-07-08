function enviarMensagem(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Criação do elemento de notificação (Toast)
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast success';
    toast.innerHTML = `<span>✨</span> Olá <strong>${name}</strong>, sua mensagem foi enviada com sucesso!`;

    // Adiciona o toast à tela
    toastContainer.appendChild(toast);

    // Limpa os campos do formulário
    document.getElementById('contact-form').reset();

    // Remove o toast do DOM após a conclusão da animação (4 segundos total)
    setTimeout(() => {
        toast.remove();
    }, 4000);
}