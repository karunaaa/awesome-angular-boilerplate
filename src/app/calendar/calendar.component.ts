import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import {
  MatCalendarCellClassFunction,
  MatDatepickerModule,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule],
  providers: [MatDatepickerModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  selectedDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  dateClass: MatCalendarCellClassFunction<Date> = (date: Date) => {
    // Example function to add custom CSS classes to dates
    const highlightDate = new Date();
    return date.getTime() === highlightDate.getTime()
      ? 'example-custom-date-class'
      : '';
  };

  onDateSelected(date: Date | null): void {
    console.log('Selected date: ', date);
  }
}
