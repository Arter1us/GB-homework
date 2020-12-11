// 2. Реализовать модуль корзины. Создать блок товаров и блок корзины. 
// У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. 
// Корзина должна уметь считать общую сумму заказа.

var itemsArray = [
    item1 = {
        name: "Assassin's Creed Odyssey",
        imgSrc: "img/AC_Odyssey.jpg",
        price: 1999
    },
    item2 = {
        name: "Cyberpunk 2077",
        imgSrc: "img/Cyberpunk_2077.jpg",
        price: 1999
    },
    item3 = {
        name: "God of War",
        imgSrc: "img/God_of_War.jpg",
        price: 1349
    },
    item4 = {
        name: "The Witcher 3: Wild Hunt",
        imgSrc: "img/The_Witcher_3_Wild_Hunt.png",
        price: 439
    }];

var sum = 0;

function func() {
    var catalog = document.querySelector(".catalog");
    var i, item;
    for (i = 0; i < itemsArray.length; i++) {
        item = document.createElement("div");
        item.setAttribute("class", "div_item");
        item.appendChild(document.createTextNode(itemsArray[i].name));
        item.style.position = "relative";
        item.style.border = "0.5px solid gray";

        itemImg = document.createElement("img");
        itemImg.src = itemsArray[i].imgSrc;
        itemImg.style.display = "block";
        itemImg.style.height = "400px";
        itemImg.style.width = "400px";

        item.appendChild(itemImg);

        item.appendChild(document.createTextNode(itemsArray[i].price + "\u20bd"));

        itemBtn = document.createElement("button");
        itemBtn.style.position = "absolute";
        itemBtn.style.right = "0";
        itemBtn.style.bottom = "0";
        itemBtn.textContent = "buy";
        itemBtn.setAttribute("id", "btn_" + i);
        itemBtn.onclick = addItem;
        item.appendChild(itemBtn);

        catalog.appendChild(item);
    }
}

function addItem(event) {

    var selectedItem = itemsArray[event.target.id.split("_")[1]];
    var products = document.getElementsByClassName("products")[0];
    var tr = products.insertRow(-1);
    var td = tr.insertCell(-1);
    td.appendChild(document.createTextNode(selectedItem.name));
    var td = tr.insertCell(-1);
    td.style.textAlign = "center";
    td.style.width = "100px";
    td.appendChild(document.createTextNode("    " + selectedItem.price + "\u20bd"));

    sum += selectedItem.price;
    document.getElementsByClassName("sum")[0].textContent = "Sum: " + sum + "\u20bd";
}
window.onload = func;