// Практическое задания № 5

// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе
// объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны
// получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
// соответствующее сообщение с помощью console.log и вернуть пустой объект.

function Chess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j == 0) {
                flag = !flag;
            }
            block = document.createElement('div');
            if (flag) {
                block.className = 'block black';
            } else {
                block.className = 'block white';
            }
            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}

Chess();