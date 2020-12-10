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