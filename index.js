let sgUnidad = document.querySelector('.number-sg-unidad');
let sgDecena = document.querySelector('.number-sg-centena');
let min = document.querySelector('.number-min');
let boton = document.querySelector('.btn');
let counter = 0;
let counterSeg = 0;
let counterMin = 0;

boton.addEventListener('click', () => {
    clearInterval(intervalo);
})

let intervalo = setInterval(() => {
    if (counter < 9) {
        counter++;
        sgUnidad.innerHTML = counter;
    } else if (counter == 9) {
        counter = 0;
        counterSeg++
        sgUnidad.innerHTML = counter;
        sgDecena.innerHTML = counterSeg;

        if (counterSeg == 6) {
            counterMin++;
            counterSeg = 0;
            sgDecena.innerHTML = counterSeg;
            min.innerHTML = counterMin;
        }
    }

}, 1000);