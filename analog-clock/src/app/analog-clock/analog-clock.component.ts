import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, interval, map, Observable, shareReplay, Subject, takeUntil } from 'rxjs';
import { TimeDate } from '../common/TimeDate';

const DEGREES_PER_MINUTES_AND_SECONDS = 360 / 60;
const DEGREES_PER_HOURS = 360 / 12;
const TOTAL_HOURS = 12;

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit {
  hoursArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  destroy$: Subject<void> = new Subject();
  currentTime$!: Observable<Date>;
  hourDegrees$!: Observable<number>;
  minuteDegrees$!: Observable<number>;
  secondDegrees$!: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.currentTime$ = interval(1000).pipe(
      map(() => new Date())
    );

    const time$ = interval(1000).pipe(
      takeUntil(this.destroy$),
      map(() => new TimeDate(new Date())),
      shareReplay()
    );

    this.hourDegrees$ = time$.pipe(
      map(time => time.hours * DEGREES_PER_HOURS + Math.round((time.minutes * DEGREES_PER_MINUTES_AND_SECONDS) / TOTAL_HOURS)),
      distinctUntilChanged()
    );

    this.minuteDegrees$ = time$.pipe(
      map(time => time.minutes * DEGREES_PER_MINUTES_AND_SECONDS),
      distinctUntilChanged()
    );

    this.secondDegrees$ = time$.pipe(
      map(time => time.seconds * DEGREES_PER_MINUTES_AND_SECONDS),
      distinctUntilChanged()
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
