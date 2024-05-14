document.addEventListener('DOMContentLoaded', function() {
    function gerarNumerosAleatorios() {
        const numeros = new Set();
        while (numeros.size < 6) {
            numeros.add(Math.floor(Math.random() * 60) + 1);
        }
        return Array.from(numeros).sort((a, b) => a - b);
    }

    document.getElementById('sorteador').addEventListener('click', () => {

        const numerosSorteados = gerarNumerosAleatorios();

        document.getElementById('numeros').textContent = `${numerosSorteados.join(', ')}`;
        document.querySelector('.resultado').style.display = 'block';
    });
});