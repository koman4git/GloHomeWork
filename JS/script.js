'use strict';
let screens = document.querySelectorAll('.screen');
const title = document.getElementsByTagName('h1')[0],
      startBtn = document.getElementsByClassName('handler_btn')[0],
      resetBtn = document.getElementsByClassName('handler_btn')[1],
      screenBtn = document.querySelector('.screen-btn'),
      otherItemsPercent = document.querySelectorAll('.other-items.percent'),
      otherItemsNumber  = document.querySelectorAll('.other-items.number '),
      typeRange = document.querySelector('.rollback  input'),
      typeRangeSpan = document.querySelector('.rollback  span'),
      InputCost = document.getElementsByClassName('total-input')[0],
      TotalCount = document.getElementsByClassName('total-input')[1],
      TotalCountOther = document.getElementsByClassName('total-input')[2],
      TotalFullCount = document.getElementsByClassName('total-input')[3],
      TotalCountRollback = document.getElementsByClassName('total-input')[4],
      clonScreen = screens[0].cloneNode(true);
      



const appData = {
    title: '',
    screens: [],
    screenCount: 0,
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePricesPersent: 0,
    servicePricesNumber: 0,
    servicePercentPrice: 0,
    servicesPersent: {},
    servicesNumber: {},
    isNotEmpty: true,
    init: function () {
      appData.addTitle();
      startBtn.addEventListener('click', appData.checkForEmpty);
      screenBtn.addEventListener('click', appData.addScreenBlock);
      typeRange.addEventListener('input', appData.changeRange);
    },
    addTitle: function () {
      document.title = title.textContent;
    },
    checkForEmpty: function () {
      appData.isNotEmpty = true;
      screens.forEach(function (screen) {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');

        if (!select.value || !input.value) {
          appData.isNotEmpty = false;
        }
      });
      if (appData.isNotEmpty) {
        appData.start();
      } else {
        alert('Заполните все поля в разделе Расчет типов экрана');
      }
    },
    start: function() {
        appData.addScreens();
        appData.addServises();
        appData.addPrices();
      // appData.logger();
        appData.showResult();
    },
    showResult: function () {
      InputCost.value = appData.screenPrice;
      TotalCountOther.value = appData.servicePricesPersent + appData.servicePricesNumber;
      TotalFullCount.value = appData.fullPrice;
      TotalCountRollback.value = appData.servicePercentPrice;
      TotalCount.value = appData.screenCount;
    },
    addScreens: function () {
      appData.screens.length = 0;
      screens = document.querySelectorAll('.screen');
      screens.forEach(function (screen, index) {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;
        
         appData.screens.push({
          id: index, 
          name: selectName, 
          price: +select.value * +input.value,
          count: +input.value
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
      screens[screens.length - 1].after(clonScreen.cloneNode(true));
      screens = document.querySelectorAll('.screen');
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

      appData.servicePercentPrice =  Math.floor(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
      
      for (let screen of appData.screens) {
          appData.screenCount += +screen.count;
        }
    },
    changeRange: function () {
      typeRangeSpan.textContent = typeRange.value + '%';
      appData.rollback = typeRange.value;
      appData.servicePercentPrice =  Math.floor(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
      appData.showResult();
    },
    
    logger: function() {
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      console.log(appData.screens);
    }
    
};
appData.init()
    
  









