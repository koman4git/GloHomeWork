'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    services: {},
    asking: function () {
      appData.title = prompt("Как называется ваш проект?", "калькулятор верстки");
      // appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
      // do {
      //  appData.screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
      // }
      // while (!appData.isNumber(appData.screenPrice));
      
       for (let i = 0; i < 2; i++) {
          let name =  prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
          let price = 0;
          do {
            price = +prompt("Сколько будет стоить данная работа?", "12000");
          }
          while (!appData.isNumber(price));
          appData.screenPrice.push({id: i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++) { 
          let name = prompt("Какой дополнительный тип услуги нужен?", "хостинг");
          let price = 0;
          do {
            price = +prompt("Сколько это будет стоить?", "1000");
          }
          while (!appData.isNumber(price));
          appData.services[name] = +price;  
          }
          appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num) && num != ' ';
    },
    getAllServicePrices: function() {
      for (let key in appData.services) {
        appData.allServicePrices += appData.services[key]
      }
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
      appData.fullPrice =  appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function(){
      appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },
    getServicePercentPrices: function(){
      appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    start: function() {
      appData.asking();
      appData.getAllServicePrices();
      appData.getFullPrice();
      appData.getServicePercentPrices();
      appData.getTitle();
      appData.logger();
      appData.getRollbackMessage();
    },
    logger: function() {
      for (let key in appData) {
        console.log(key + ': ' + appData[key]);
      }
      console.log(appData.screenPrice);
    },
}
appData.start();
    
  









