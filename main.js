let mainCard = document.querySelector('.card');
let thankCard = document.querySelector('.thank');
let submit = document.querySelector('.submit');
let rating = document.querySelectorAll('.num');
let dataValue = 0;

rating.forEach((rate) => {
    rate.addEventListener('click', () => {
        dataValue = rate.getAttribute('data-value');
    });
});



submit.addEventListener('click', () => {
    if(dataValue != 0) {
        let span = document.querySelector('span');
        mainCard.classList.add('hidden');
        thankCard.classList.remove('hidden');
        span.textContent = dataValue;
    } else {
        alert('Please choose a rating');
    }
});
