import { Component } from '@angular/core';
import { DxSchedulerModule, DxSchedulerTypes } from 'devextreme-angular/ui/scheduler';
import { DxListModule } from 'devextreme-angular/ui/list';
import { AppointmentInfoComponent, TooltipItem } from './appointment-info.component';
import { data, employees } from './data';

@Component({
    selector: 'app-root',
    imports: [DxSchedulerModule, DxListModule, AppointmentInfoComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource = data;

  resourcesDataSource = employees;

  currentDate = new Date(2021, 5, 2);

  tooltipItems: TooltipItem[] = [];

  onAppointmentTooltipShowing(e: DxSchedulerTypes.AppointmentTooltipShowingEvent): void {
    e.cancel = true;
    const { appointments } = e;
    this.tooltipItems = (appointments ?? []).map((item) => ({
      text: item.appointmentData.text,
      colorDef: item.color,
      startDate: this.formatDate(item.appointmentData.startDate as Date),
      endDate: this.formatDate(item.appointmentData.endDate as Date),
    }));
  }

  private formatDate(date: Date): string {
    return `${date.getHours()}:${date.getMinutes()}`;
  }
}
