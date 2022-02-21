'use strict';
const title = document.getElementsByTagName('h1')[0],
      startBtn = document.getElementsByClassName('handler_btn')[0],
      resetBtn = document.getElementsByClassName('handler_btn')[1],
      screenBtn = document.querySelector('.screen-btn'),
      otherItemsPercent = document.querySelectorAll('.other-items.percent'),
      otherItemsNumber  = document.querySelectorAll('.other-items.number '),
      typeRange = document.querySelector('.rollback  input'),
      inputRangeValue = document.querySelector('.rollback  .range-value'),
      InputCost = document.getElementsByClassName('total-input')[0],
      TotalCount = document.getElementsByClassName('total-input')[1],
      TotalCountOther = document.getElementsByClassName('total-input')[2],
      TotalFullCount = document.getElementsByClassName('total-input')[3],
      TotalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');


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
    init: function () {
      appData.addTitle();
      startBtn.addEventListener('click', appData.start);
    },
    addTitle: function () {
      document.title = title.textContent;
    },
    start: function() {
      alert('Start');
      // appData.asking();
      // appData.addPrices();
      // appData.getFullPrice();
      // appData.getServicePercentPrices();
      // appData.getTitle();
      // appData.logger();
      // appData.getRollbackMessage();
    },
    isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num) && num != ' ';
    },
    asking: function () {
      appData.title = prompt("Как называется ваш проект?", 'Калькулятор верстки');
            
      for (let i = 0; i < 2; i++) {
          let name = prompt("Какие типы экранов нужно разработать?", 'Простые или сложные');
          let price = 0;
          
          do {
            price = prompt("Сколько будет стоить данная работа?", '20000');
          }
          while (!appData.isNumber(price));
          appData.screens.push({id: i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++) { 
          let name =  prompt("Какой дополнительный тип услуги нужен?", 'Метрика, отправка форм');
          let price = 0;
          
          do {
            price = prompt("Сколько это будет стоить?", '1000');
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
        appData.allServicePrices += appData.services[key];
      }
      
    },
    isString: function(str) {
      return isNaN(parseFloat(str)) && !isFinite(str) && str != ' ';
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
      
    }
    
};
appData.init()
    
  









