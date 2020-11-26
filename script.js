// Практическое задания № 1

// 1. Задать температуру в градусах по Цельсию.
let Tc = prompt('Введите температуру в градусах Цельсия', '');
let Tf = (9 / 5) * Tc + 32;
alert(Tf);

// 2. Работа с переменными.
let name = 'Василий';
let admin = name;
console.log(admin);

// 4. Чему будет равно JS-выражение 1000 + "108"?
// Ответ: 1000108



// Практическое задания № 2

// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
//
// Префиксная форма увеличивает а и возвращает новое значение. Постфиксная форма
// увеличивает b, но возвращает старое значение.

// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// x = 5


// 3.
let a = +prompt('Введите a', ''),
    b = +prompt('Введите b', '');

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}


// 4.
a = +prompt('Введите число от 1 до 15');
switch (a) {
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
        break;
}


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
let one = prompt('Введите число one', ''),
    two = prompt('Введите число two', '');

function plus(one, two) {
    return one + two;
}

function minus(one, two) {
    return one - two;
}

function division(one, two) {
    return one / two;
}

function multiplication(one, two) {
    return one * two;
}


// 6.
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
    }
}


// 7. Сравнить null и 0. Попробуйте объяснить результат
// Причина в том, что нестрогое равенство и сравнения работают по-разному.
// Сравнения преобразуют null в число, рассматривая его как 0.