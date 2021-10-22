// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел 
// пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, 
// уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, 
// то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
const item = document.getElementById('js-btn');

item.addEventListener('click', () => {
    const number = +prompt("Загайте число от 0 до 100, а я попробую его отгадать.");
    let fif = 50;
    let end = 100;
    for (let i = 0; i <= end;) {
        let res;
        if (confirm(`Твое число больше ${fif}?`)) {
            i = fif;
            res = (end - i) / 2;
            fif = Math.floor(i + res);
        }
        else {
            end = fif;
            res = (end - i) / 2;
            fif = Math.floor(i + res);
        }
        if (fif === number) {
            (alert(`Твое число ${fif}.`));
            break;
        }
    }
}, false);