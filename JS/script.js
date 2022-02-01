'use strict';
let title = prompt("Как называется ваш проект?", "калькулятор"),
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"),
    screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"),
    adaptive = confirm("Нужен ли адаптив на сайте?"),
    service1 = prompt("Какой дополнительный тип услуги нужен?", "Хостинг"),
    servicePrice1 = +prompt("Сколько это будет стоить?", "2000"),
    service2 = prompt("Какой дополнительный тип услуги нужен?", "Продвижение сайта"),
    servicePrice2 = +prompt("Сколько это будет стоить?", "3000"),
    rollback = +(Math.ceil(Math.random()*100)),
    fullPrice = 0,
    allServicePrices = 0,
    servicePercentPrice = 0;

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}
//конструкция условий расчета
const getRollbackMessage = function(price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0){
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
}

const getAllServicePrices = function(price1, price2) {
  return price1 + price2;
}

const getFullPrice = function(price1, price2) {
  return price1 + price2;
}

const getTitle = function(str){
  str.trim();
  return str.charAt(0).toUpperCase(0) + str.slice(1);
}

const getServicePercentPrices = function(total,sum1){
  return total - sum1;
}

allServicePrices = getAllServicePrices(servicePrice1,servicePrice2);
fullPrice = getFullPrice(screenPrice,allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice,rollback);

console.log(getTitle(title));
showTypeOf(getTitle(title));
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);


