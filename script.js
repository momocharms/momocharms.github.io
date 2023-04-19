let card = document.querySelector('.debit-card');
let cardNumber = document.querySelector('.card-number');
let cardHolder = document.querySelector('.card-holder');

card.addEventListener('click', () => {
  navigator.clipboard.writeText(`${cardNumber.textContent}\n${cardHolder.textContent}`).then(() => {
    card.classList.add('flipped');
    alert('¡Información de tarjeta copiada al portapapeles!');
    setTimeout(() => {
      document.querySelector('header').classList.add('show');
      document.querySelector('footer').classList.add('show');
    }, 2000);
  }).catch((err) => {
    console.log(err);
  });
});
