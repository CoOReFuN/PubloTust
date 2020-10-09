let name = 'Телепорт бытовой VZHIH-101';
let price = 10000;
console.log(`Телепорт бытовой VZHIH-101 \n  ${price}  Q`)

//3-я задача
// let priceDiscount = 10;
// let goodsQuantity = prompt('Сколько куплено единиц товара?','');
// let discG = price/100*priceDiscount;
// let summ = (price - discG)*(goodsQuantity);

// if (goodsQuantity >= 2){
//     console.log(`Цена покупки составит ${summ} Q`);
// }else{
//     console.log(`Цена покупки составит ${price*goodsQuantity} Q`);
// }

function a(price, x, z) {
    let discG = price / 100 * z;
    let summ = (price - discG) * (x);

    if (x >= 2) {
        console.log(`Цена покупки составит ${summ} Q`);
    } else {
        console.log(`Цена покупки составит ${price * x} Q`);
    }

}
a(price, 2, 2)

//4-я задача
let c = 52334224;
let d = 6500;
let x = c / d;
let y = c % d;
console.log(`Мы можем закупить ${Math.floor(x)} единиц товара, после закупки на счету станется ${y} Q`);

//1.2 1-я задача


let storageQuantity;
let orderQuantity;
function howMuch(storageQuantity, orderQuantity) {

    if (orderQuantity > storageQuantity) {
        console.log('На складе нет такого количества товаров.')
    } else if (orderQuantity == storageQuantity) {
        console.log('Вы забираете весь товар с нашего склада!')
    } else {
        console.log('Заказ оформлен.')
    }
}
howMuch(100, 200)
howMuch(100, 100)
howMuch(200, 100)


//1.2 2-я задача - дома
//1.2 3-я задача - дома
//1.2 4-я задача - дома

//1.3 Циклы

let positions = [
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)',
    'Машина времени DeLorean',
    'Репликатор домашний STAR-94',
    'Лингвенсор 000-17',
    'Целеуказатель электронный WAY-Y'
]

//1.3 1-я задача

let l = positions.length;
console.log(positions[1].value)
console.log('Список наименований');

for (let i = 0; i < l; i++){
    console.log(i+1 + positions[i]);
    }



function myFunction(){
    let x = document.getElementById("input");
console.log(x.value);
}