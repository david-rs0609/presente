// A data em que o relacionamento começou (Ano, Mês-1, Dia, Hora, Minuto, Segundo)
// Por exemplo, 1º de Janeiro de 2023 às 10:30:00 seria: new Date(2023, 0, 1, 10, 30, 0);
const startDate = new Date('2025-05-04T19:58:00'); // Exemplo: 15 de Janeiro de 2023 às 18:00

function updateCountdown() {
    const now = new Date().getTime(); // Tempo atual em milissegundos
    const distance = now - startDate.getTime(); // Distância de tempo em milissegundos

    // Cálculos para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formata os números para ter sempre dois dígitos (ex: 05, 12)
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

// Atualiza o contador imediatamente ao carregar a página
updateCountdown();

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);