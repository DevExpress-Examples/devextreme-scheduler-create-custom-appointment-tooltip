import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface TooltipItem {
  text?: string;
  colorDef: PromiseLike<string>;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'appointment-info',
  template: `
    <div class="tooltip">
      <div class="marker" [style.background]="color"></div>
      <div>
        <p>{{ data.text }}</p>
        <p>{{ data.startDate }} - {{ data.endDate }}</p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: [
    `
      .tooltip {
        display: flex;
        align-items: baseline;
      }

      .marker {
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border-radius: 50%;
      }
    `,
  ],
})
export class AppointmentInfoComponent implements OnInit {
  @Input() data!: TooltipItem;

  color = '';

  ngOnInit(): void {
    this.data.colorDef.then((color) => {
      this.color = color;
    });
  }
}
