'use strict';
const title = document.getElementsByTagName('h1')[0],
      startBtn = document.getElementsByClassName('handler_btn')[0],
      resetBtn = document.getElementsByClassName('handler_btn')[1],
      screenBtn = document.querySelector('.screen-btn'),
      otherItemsPercent = document.querySelectorAll('.other-items.percent'),
      otherItemsNumber  = document.querySelectorAll('.other-items.number '),
      typeRange = document.querySelector('.rollback  input'),
      typeRangeSpan = document.querySelector('.rollback  span'),
      // inputRangeValue = document.querySelector('.rollback  .range-value'),
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
    servicePricesPersent: 0,
    servicePricesNumber: 0,
    servicePercentPrice: 0,
    servicesPersent: {},
    servicesNumber: {},
    init: function () {
      appData.addTitle();
      startBtn.addEventListener('click', appData.start);
      screenBtn.addEventListener('click', appData.addScreenBlock);
      typeRange.addEventListener('click', appData.changeRange);
    },
    addTitle: function () {
      document.title = title.textContent;
    },
    start: function() {
      appData.addscreens();
      appData.addServises();
      appData.changeRange();
      appData.addPrices();
      // appData.getServicePercentPrices();
      // appData.logger();
      // appData.getRollbackMessage();
      appData.showResult();
    },
    showResult: function () {
      InputCost.value = appData.screenPrice;
      TotalCountOther.value = appData.servicePricesPersent + appData.servicePricesNumber;
      TotalFullCount.value = appData.fullPrice;
    },
    addscreens: function () {
      screens = document.querySelectorAll('.screen');
      screens.forEach(function (screen, index) {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;
         appData.screens.push({
          id: index, 
          name: selectName, 
          price: +select.value * +input.value
        });
      });
    },
    addServises: function () {
      otherItemsPercent.forEach(function (item) {
        const check = item.querySelector('input[type=checkbox');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text');
        
        if(check.checked) {
          appData.servicesPersent[label.textContent] = +input.value;
        }
      });
      otherItemsNumber.forEach(function (item) {
        const check = item.querySelector('input[type=checkbox');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text');
        
        if(check.checked) {
          appData.servicesNumber[label.textContent] = +input.value;
        }
      });
      
    },
    addScreenBlock: function () {
      const clonScreen = screens[0].cloneNode(true);
      screens[screens.length - 1].after(clonScreen);
    },
    addPrices: function() {
      for (let screen of appData.screens) {
          appData.screenPrice += +screen.price;
        }

      
      for (let key in appData.servicesNumber) {
        appData.servicePricesNumber += appData.servicesNumber[key];
      }

      for (let key in appData.servicesPersent) {
        appData.servicePricesPersent += appData.screenPrice * (appData.servicesPersent[key] / 100);
      }
      appData.fullPrice =  appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPersent;
    },
    changeRange: function () {
     let arr = [];
     for (let i = 0; i <= 100; i++) {
        arr.push(i);
        typeRange.textContent = parseInt(arr[i]);
        typeRangeSpan.textContent = typeRange.value + '%';
        appData.rollback = typeRange.value;
      }
      console.log(appData.rollback);
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
    
  









