'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    service1: '',
    servicePrice: 0,
    service2: '',
    asking: function () {
      appData.title = prompt("Как называется ваш проект?", "калькулятор верстки");
      appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
      do {
       appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
     }
      while (!isNumber(appData.screenPrice));
      appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    }
}

    
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num != ' ';
};

 

  const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) { 
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }
      do {
        appData.servicePrice = +prompt("Сколько это будет стоить?");
      }
      while (!isNumber(appData.servicePrice));
         sum += appData.servicePrice;
    }
    return sum;
  };

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
};

const getFullPrice = function() {
  return appData.screenPrice + appData.allServicePrices;
};

const getTitle = function(){
  appData.title.trim();
  return appData.title.charAt(0).toUpperCase(0) + appData.title.slice(1);
};

const getServicePercentPrices = function(){
  return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
};

appData.asking();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrices();
appData.title = getTitle();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);



