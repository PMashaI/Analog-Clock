import { Component, OnInit } from '@angular/core';
import { TimeDate } from '../common/TimeDate';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit {
  public hoursArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  currentTime = 0;
  hoursDegrees = 0;
  minutesDegrees = 0;
  secondsDegrees = 0;

  //constructor(private clockService: ClockService) {  }

  ngOnInit(): void {
    this.getCurrentTime();
    //this.clockService.getCurrentTime().subscribe();
  }

  private getCurrentTime() {
    return setInterval(() => {
      const { seconds, minutes, hours } = new TimeDate(new Date());
      this.minutesDegrees = minutes * 6;
      this.secondsDegrees = seconds * 6;
      this.hoursDegrees = hours * 30 + Math.round(this.minutesDegrees / 12);
    }, 1000);
  }
}
