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
       appData.screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
     }
      while (!appData.isNumber(appData.screenPrice));
      appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num) && num != ' ';
    },
    getAllServicePrices: function() {
      let sum = 0;
      for (let i = 0; i < 2; i++) { 
        if (i === 0) {
          appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "хостинг");
        } else if (i === 1) {
          appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "продвижение сайта");
        }
        do {
          appData.servicePrice = +prompt("Сколько это будет стоить?", "1000");
        }
        while (!appData.isNumber(appData.servicePrice));
          sum += appData.servicePrice;
      }
      return sum;
    },
    getRollbackMessage: function(price) {
      if (price >= 30000) {
        return "Даем скидку в 10%";
      } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
      } else if (price < 15000 && price >= 0){
        return "Скидка не предусмотрена";
      } else {
        return "Что то пошло не так";
      }
    },
    getFullPrice: function() {
      return appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function(){
      return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },
    getServicePercentPrices: function(){
      return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    start: function() {
      appData.asking();
      appData.allServicePrices = appData.getAllServicePrices();
      appData.fullPrice = appData.getFullPrice();
      appData.servicePercentPrice = appData.getServicePercentPrices();
      appData.title = appData.getTitle();
      appData.logger();
      appData.getRollbackMessage();
    },
    logger: function() {
      for (let key in appData) {
        console.log(key + ': ' + appData[key]);
      }
    },
}
appData.start();
    
  









