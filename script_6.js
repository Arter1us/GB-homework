//1. Доработать функцию замены картинки в галерее таким образом, 
// чтобы она проверяла наличие картинки по указанному в src адресу.

function func(id) {
    let i = document.getElementById(id);
    let j = i.src.replace('small', 'large');
    console.log(j);

    let s = document.getElementById('large');
    s.src = j;
}

function imageError() {
    document.querySelector('.container').innerHTML = 'нет большой картинки';
}