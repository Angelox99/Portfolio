// Botão GitHub na página About e Index
document.addEventListener('DOMContentLoaded', function() {
	const githubBtn = document.getElementById('github-btn');
	if (githubBtn) {
		githubBtn.addEventListener('click', function() {
			window.open('https://github.com/Angelox99?tab=repositories', '_blank');
		});
	}
});
// Pequena animação ou mensagem
console.log("Portfólio carregado com sucesso!");
