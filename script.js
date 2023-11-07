const btnCoffee = document.getElementById('coffee-btn');
const coffeeB = document.getElementById('coffee-black');
const container = document.getElementById('count-container');
const count = document.getElementById('count');
let coffeeNum = 0;

btnCoffee.addEventListener('click', () => {
    coffeeB.style.opacity = '1';
    setTimeout(() => {
        coffeeB.classList.add('coffee-animation');
    }, 500);
    setTimeout(() => {
        coffeeB.style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        container.style.opacity = '1';
    }, 2500);
    setTimeout(() => {
        container.style.opacity = '0'
    }, 4000);
    setTimeout(() => {
        coffeeNum++
        if (coffeeNum <= 10) {
            count.textContent = coffeeNum;
        } else {
            count.textContent = 'SLOW DOWN!'
        }
    }, 3000)
});

