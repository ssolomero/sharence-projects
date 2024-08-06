import { Component, OnInit, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import 'add-to-calendar-button';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timesAvailable = ["09:00", "10:00", "11:00", "02:00", "03:00"];


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
    select: (info) => {this.onSelect(info);},
    // dateClick: (info) => {this.onSelect(info);}
  }

  meetingDetails:any = {
    scheduler: 'ACME Sales',
    event: 'Pricing Review',
    duration: 15,
    description: 'Our team will meet with you to review pricing options.',
    date: new Date(),
    startTime: "9:00",
    endTime: "9:15",
    startTimeTxt: "",
    attendees: []
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

  timesAvailable = ["09:00 am", "10:00 am", "11:00 am", "2:00 pm", "3:00 pm"];

  showTimes = false;
  showConfirmBtn = false;
  dateSelected = '';
  schedulerView = 'CALENDAR';
  lastConfirmBtn?:any;

  userName?:string;
  userEmail?:any;

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

    const containerDiv = document.getElementsByClassName("container")[0];
    const calendlySectionDiv = document.getElementById("calendar-section");

    if (daySelected >= currentDay) {
      this.showTimes = true;
      containerDiv.classList.add("time-div-active");
      calendlySectionDiv!.style.flex = "2";
    } else {
      this.showTimes = false;
      containerDiv.classList.remove("time-div-active");
      calendlySectionDiv!.style.flex = "1";
      alert("Sorry that date has already past. Please select another date.");
    }
  }

  onSelectTime(event:any) {
    // this.showConfirmBtn = true;
    if (this.lastConfirmBtn != null) {
      console.log(this.lastConfirmBtn);
      this.lastConfirmBtn.target.parentNode.removeChild(
        this.lastConfirmBtn.target.parentNode.lastChild
      );
    }
    let confirmBtn = document.createElement("button");
    let confirmTxt = document.createTextNode("Confirm");
    confirmBtn.classList.add("confirm-btn");
    confirmBtn.style.cssText = 
      "height: 50px; background-color: dodgerblue;color: white; font-size: 1rem; font-weight: 500; border-radius: 5px; border: none; flex: 1; width: 100%; margin-left: 5px;&:hover {opacity: 0.5;}&:focus {outline: 0;opacity: 0.5;}"
    confirmBtn.appendChild(confirmTxt);
    event.target.parentNode?.appendChild(confirmBtn);
    this.meetingDetails.startTimeTxt = event.target.textContent;
    this.meetingDetails.startTime = this.convertTime(event.target.textContent, this.meetingDetails.duration);
    confirmBtn.addEventListener("click", () => { 
      this.meetingDetails.date = this.dateSelected;
      sessionStorage.setItem("eventObj", JSON.stringify(this.meetingDetails));
      console.log(this.meetingDetails);
      this.schedulerView = 'REGISTER';
    });
    this.lastConfirmBtn = event;
  }

  submitDetails() {
    if (this.userName && this.userEmail)
      this.schedulerView = 'CONFIRM';
  }

  convertTime(timeStr: any, minutesToAdd:number) {
    // Extracting hours, minutes, and am/pm parts
    let [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    
    // Converting hours to 24-hour format
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);

    if (period.toLowerCase() === 'pm' && hours !== 12) {
      hours += 12;
    } else if (period.toLowerCase() === 'am' && hours === 12) {
      hours = 0;
    }
    
    // Formatting the result as a 24-hour time string
    let time24hr = ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2);

    // Set end time

    minutes += minutesToAdd;
    hours += Math.floor(minutes / 60);
    minutes %= 60;
    
    this.meetingDetails.endTime = ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2);

    return time24hr;
  }

}
