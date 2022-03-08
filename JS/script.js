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
      this.addTitle();
      startBtn.addEventListener('click', this.checkForEmpty.bind(this));
      screenBtn.addEventListener('click', this.addScreenBlock.bind(this));
      typeRange.addEventListener('input', this.changeRange.bind(this));
    },
    addTitle: function () {
      document.title = title.textContent;
    },
    start: function() {
      this.addScreens();
      this.addServises();
      this.addPrices.bind(this);
      
      // appData.logger();
      this.showResult();
    },
    checkForEmpty: function () {
      this.isNotEmpty = true;
      screens.forEach((screen) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');

        if (!select.value || !input.value) {
          this.isNotEmpty = false;
        }
      });
      if (this.isNotEmpty) {
        this.start.call(appData);
        
      } else {
        alert('Заполните все поля в разделе Расчет типов экрана');
      }
    },
    showResult: function () {
      InputCost.value = this.screenPrice;
      TotalCountOther.value = this.servicePricesPersent + this.servicePricesNumber;
      TotalFullCount.value = this.fullPrice;
      TotalCountRollback.value = this.servicePercentPrice;
      TotalCount.value = this.screenCount;
    },
    addScreens: function () {
      this.screens.length = 0;
      screens = document.querySelectorAll('.screen');
      screens.forEach((screen, index) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;
        
        this.screens.push({
          id: index, 
          name: selectName, 
          price: +select.value * +input.value,
          count: +input.value
        });
      });
    },
    addServises: function () {
      otherItemsPercent.forEach((item) => {
        const check = item.querySelector('input[type=checkbox');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text');
        
        if(check.checked) {
          this.servicesPersent[label.textContent] = +input.value;
        }
      });
      otherItemsNumber.forEach(function (item) {
        const check = item.querySelector('input[type=checkbox');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text');
        
        if(check.checked) {
          this.servicesNumber[label.textContent] = +input.value;
        }
      });
      
    },
    addScreenBlock: function () {
      screens[screens.length - 1].after(clonScreen.cloneNode(true));
      screens = document.querySelectorAll('.screen');
    },
    addPrices: function() {
      for (let screen of this.screens) {
        this.screenPrice += +screen.price;
        };

      for (let key in this.servicesNumber) {
        this.servicePricesNumber += this.servicesNumber[key];
      };

      for (let key in this.servicesPersent) {
        this.servicePricesPersent += this.screenPrice * (this.servicesPersent[key] / 100);
      };
      this.fullPrice =  this.screenPrice + this.servicePricesNumber + this.servicePricesPersent;

      this.servicePercentPrice =  Math.floor(this.fullPrice - (this.fullPrice * (this.rollback / 100)));
      
      for (let screen of this.screens) {
        this.screenCount += +screen.count;
        };
    },
    changeRange: function () {
      typeRangeSpan.textContent = typeRange.value + '%';
      this.rollback = typeRange.value;
      this.servicePercentPrice =  Math.floor(this.fullPrice - (this.fullPrice * (this.rollback / 100)));
      this.showResult();
    }
    
    // logger: function() {
    //   console.log(this.fullPrice);
    //   console.log(this.servicePercentPrice);
    //   console.log(this.screens);
    // }
};

appData.init();



    
  









