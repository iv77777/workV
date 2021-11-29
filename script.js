const consumption = document.querySelector('#consumption');
const gasPrice = document.querySelector('#gas-price');
const WarmingUpTheCar = document.querySelector('#Warming-up-the-car');

const uklonBefore = document.querySelector('#uklon-before');
const uklonAfter = document.querySelector('#uklon-after');

const boltBefore = document.querySelector('#bolt-before');
const boltAfter = document.querySelector('#bolt-after');

const Before838 = document.querySelector('#before838');
const After838 = document.querySelector('#after838');

const cashBefore = document.querySelector('#cash-before');
const cashAfter = document.querySelector('#cash-after');

const beforeKm = document.querySelector('#before-km');
const afterKm = document.querySelector('#after-km');

const privat = document.querySelector('#privat');


// находим кнопку рассчитать
const button = document.querySelector('.button');

// находим поле куда будем вывадить результат
const earned = document.querySelector('#earned');


// запускаем функцию miscalculation при клики по кнопке
button.addEventListener('click', miscalculation);



// Функция которая делает прощот
function miscalculation(){

  // выщитуем разницу по службам и налички
  const uklon = uklonAfter.value.replace(/\s/g, '') - uklonBefore.value.replace(/\s/g, '');
  const bolt = boltAfter.value.replace(/\s/g, '') - boltBefore.value.replace(/\s/g, '');
  const v838 = after838.value.replace(/\s/g, '') - before838.value.replace(/\s/g, '');
  const cash = cashAfter.value.replace(/\s/g, '') - cashBefore.value.replace(/\s/g, '');

  // -----------------------------------------------------------
  // вищитуем сколько km проехал
  let Km = afterKm.value.replace(/\s/g, '') - beforeKm.value.replace(/\s/g, '');

  // Выщитуем сколько потратили на заправку газом
  let priceKm = consumption.value.replace(/\s/g, '') * (Km / 100) * gasPrice.value.replace(/\s/g, '');
  // -----------------------------------------------------------
  
  workValue = uklon + bolt + v838 + Number(privat.value.replace(/\s/g, '')) + cash - priceKm - WarmingUpTheCar.value.replace(/\s/g, '');

  earned.innerHTML = Math.round(workValue);
}

// ==========================================================
// ==========================================================
// ==========================================================
function validity(){
  // находим все импуты
  const inputs = document.querySelectorAll('input');


// для каждого инпута
inputs.forEach(function (input) {

  // при фокусе на input убераем plasholder
  input.onfocus = function () {
     input.placeholder = '';
    };
  });
}


validity();


// ---------------------------------------------------
