import { templates,select } from './../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking{
  constructor(element){
    const thisBooking = this;

    thisBooking.element = element;

    thisBooking.render(thisBooking.element);
    thisBooking.getElements();
    thisBooking.initWidgets();
  }

  render(element){
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();
    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;

    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    thisBooking.dom.dateWrapper = document.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourWrapper = document.querySelector(select.widgets.hourPicker.wrapper);
  }

  getElements(){
    const thisBooking = this;

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector('.people-amount');
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);

    new DatePicker(thisBooking.dom.dateWrapper);
    thisBooking.dom.dateWrapper.addEventListener('update', function(){
    });

    new HourPicker(thisBooking.dom.hourWrapper);
    thisBooking.dom.hourWrapper.addEventListener('update', function(){

    });

  }

  initWidgets(){
    const thisBooking = this;
    
    new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.peopleAmount.addEventListener('update', function(){});
    
    new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.hoursAmount.addEventListener('update', function(){});
  }
}
    
export default Booking;

