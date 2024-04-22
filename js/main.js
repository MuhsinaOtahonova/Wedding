const calendarDates = document.querySelector('.calendar-dates');

function generateCalendar() {
    const date = new Date(2024, 3, 1); // April 2024

    // Clear previous dates
    calendarDates.innerHTML = '';

    // Add empty cells for preceding days
    for (let i = 0; i < date.getDay(); i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('day');
        calendarDates.appendChild(emptyCell);
    }

    // Add dates
    while (date.getMonth() === 3) {
        const day = document.createElement('div');
        day.textContent = date.getDate();
        day.classList.add('day');
        if (date.getDate() === 12) {
            day.classList.add('highlighted');
        }
        calendarDates.appendChild(day);
        date.setDate(date.getDate() + 1);
    }
}

generateCalendar();

// Countdown hesaplaması
function startCountdown(endDate, elementId) {
    const countdownElement = document.getElementById(elementId);

    const timerInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const distance = endDate - currentTime;

        const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.querySelector('.months').innerText = months + '\n ай';
        countdownElement.querySelector('.days').innerText = days + '\n күні';
        countdownElement.querySelector('.hours').innerText = hours + '\n сағат';
        countdownElement.querySelector('.minutes').innerText = minutes + '\n минут';

        if (distance < 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = 'Expired';
        }
    }, 1000);
}

// Başlangıç ve bitiş tarihleri
const startDate = new Date(''); // Başlangıç tarihi, şu an
const endDate = new Date('2024-07-12T18:00:00'); // Bitiş tarihi, istediğiniz tarih

// Countdown timer'ları başlat
startCountdown(endDate, 'countdown1');




