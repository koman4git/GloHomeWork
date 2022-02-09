'use strict';
const title = document.getElementsByTagName('h1'),
      handlerBtn = document.getElementsByClassName('.handler_btn'),
      screenBtn = document.querySelector('.screen-btn'),
      otherItemsPercent = document.querySelectorAll('.other-items.percent'),
      otherItemsNumber  = document.querySelectorAll('.other-items.number '),
      typeRange = document.querySelector('.rollback  input'),
      spanRangeValue = document.querySelector('.rollback  span'),
      totalInput = document.getElementsByClassName('total-input'),
      totalInput1 = totalInput[0],
      totalInput2 = totalInput[1],
      totalInput3 = totalInput[2],
      totalInput4 = totalInput[3],
      totalInput5 = totalInput[4];

let screen = document.querySelectorAll('.screen');


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
      do {
        appData.title = prompt("Как называется ваш проект?", 'Калькулятор верстки');
      } while (!appData.isString(appData.title));
      
      for (let i = 0; i < 2; i++) {
          let name;
          let price = 0;
          do {
            name =  prompt("Какие типы экранов нужно разработать?", 'Простые или сложные');
          } while (!appData.isString(name));
          do {
            price = prompt("Сколько будет стоить данная работа?", '20000');
          }
          while (!appData.isNumber(price));
          appData.screens.push({id: i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++) { 
          let name;
          let price = 0;
          do {
            name =  prompt("Какой дополнительный тип услуги нужен?", 'Метрика, отправка форм');
          } while (!appData.isString(name));
          do {
            price = prompt("Сколько это будет стоить?", '1000');
          }
          while (!appData.isNumber(price));
          appData.services[name + ' ' + i] = +price;  
          }
          appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function() {
      for (let screen of appData.screens) {
          appData.screenPrice += +screen.price;
        }

      
      for (let key in appData.services) {
        appData.allServicePrices += appData.services[key];
      }
      
    },
    isString: function(str) {
      return isNaN(parseFloat(str)) && !isFinite(str) && str != ' ';
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
    logger: function() {
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      console.log(appData.screens);
      console.log(appData.services);
    },
    start: function() {
      appData.asking();
      appData.addPrices();
      appData.getFullPrice();
      appData.getServicePercentPrices();
      appData.getTitle();
      appData.logger();
      appData.getRollbackMessage();
    }
    
}
appData.start();
    
  









