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
            
       for (let i = 0; i < 2; i++) {
          let name =  prompt("Какие типы экранов нужно разработать?");
          let price = 0;
          do {
            price = prompt("Сколько будет стоить данная работа?");
          }
          while (!appData.isNumber(price));
          appData.screens.push({id: i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++) { 
          let name = prompt("Какой дополнительный тип услуги нужен?");
          let price = 0;
          do {
            price = prompt("Сколько это будет стоить?");
          }
          while (!appData.isNumber(price));
          appData.services[name] = +price;  
          }
          appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function() {
      for (let screen of appData.screens) {
          appData.screenPrice += +screen.price;
        }

      for (let key in appData.services) {
        appData.allServicePrices += appData.services[key]
      }
    },
    isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num) && num != ' ';
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
      appData.addPrices();
      appData.getFullPrice();
      appData.getServicePercentPrices();
      appData.getTitle();
      appData.logger();
      appData.getRollbackMessage();
    },
    logger: function() {
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      console.log(appData.screens);
    },
}
appData.start();
    
  









