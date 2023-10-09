import { Component, OnInit, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timesAvailable = ["9:00am", "10:00am", "11:00am", "2:00pm", "3:00pm"];


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class SchedulerComponent implements OnInit, AfterViewChecked {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    showNonCurrentDates: false,
    selectable: true,
    headerToolbar: {
      left: 'title',
      right: 'prev, next'
    },
    plugins: [dayGridPlugin, interactionPlugin],
    select: (info) => {
      this.onSelect(info);
    }
  }

  meetingDetails:any = {
    scheduler: 'ACME Sales',
    event: 'Pricing Review',
    duration: 15,
    description: 'Our team will meet with you to review pricing options.'
  }

  event = {
    name: "Pricing Review",
    organizer: "ACME Sales",
    duration: 15,
    description: "Our team will meet with you to review pricing options.",
    date: new Date(),
    time: "9:00",
    attendees: []
  };

  timesAvailable = ["9:00am", "10:00am", "11:00am", "2:00pm", "3:00pm"];

  showTimes = false;
  showConfirmBtn = false;
  dateSelected = '';
  schedulerView = 'CALENDAR';

  constructor() {
    sessionStorage.setItem("eventObj", JSON.stringify(event));
    // document.getElementById("event")!.textContent = this.event.name;
    // document.getElementById("scheduler")!.textContent = this.event.organizer;
    // document.getElementById("duration")!.textContent = this.event.duration + "min";
    // document.getElementById("description")!.textContent = this.event.description;
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
  }

  private onSelect(info:any) {
    const currentDay = new Date();
    let daySelected = info.start;

    this.dateSelected = `${days[daySelected.getDay()]}, ${months[daySelected.getMonth()]} ${daySelected.getDate()}`

    if (daySelected >= currentDay) {
      this.showTimes = true;
    } else {alert("Sorry that date has already past. Please select another date.");}

    const containerDiv = document.getElementsByClassName("container")[0];
    containerDiv.classList.add("time-div-active");

    const calendlySectionDiv = document.getElementById("calendar-section");
    calendlySectionDiv!.style.flex = "2";
  }

  onSelectTime(event:any) {
    // this.showConfirmBtn = true;
    let last:any = null;
    if (last != null) {
      console.log(last);
      last.parentNode.removeChild(last.parentNode.lastChild);
    }
    let confirmBtn = document.createElement("button");
    let confirmTxt = document.createTextNode("Confirm");
    confirmBtn.classList.add("confirm-btn");
    confirmBtn.style.cssText = 
      "height: 50px; background-color: dodgerblue;color: white; font-size: 1rem; font-weight: 500; border-radius: 5px; border: none; flex: 1; width: 100%; margin-left: 5px;&:hover {opacity: 0.5;}&:focus {outline: 0;opacity: 0.5;}"
    confirmBtn.appendChild(confirmTxt);
    event.target.parentNode?.appendChild(confirmBtn);
    this.event.time = event.textContent;
    confirmBtn.addEventListener("click", () => { 
      this.event.date = new Date(this.dateSelected);
      sessionStorage.setItem("eventObj", JSON.stringify(this.event));
      console.log(this.event);
      this.schedulerView = 'REGISTER';
    });
    last = event;
  }


}
