import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {SingleSelect} from '../model/SingleSelect';

export interface CommonComponent {
  data: any;
  eventEmitter: EventEmitter<any>;
}

@Component({
  selector: 'single-select',
  template: `
              <div class="single-select_class" id="{{ data.key }}">
                {{ data.description }}
                <select name="{{ data.key }}" (change)="changeEv($event)">
                  <!-- Angular longhand ngFor -->
                  <ng-template ngFor let-item [ngForOf]="data.fields" let-i="index">
                    <option value="{{ item.key }}">{{item.description}}</option>
                  </ng-template>
                </select>
              </div>
            `
})
export class SelectComponent implements OnInit, CommonComponent {
  @Input() data: SingleSelect;
  @Output() eventEmitter = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(`Select component data: ${this.data}`);
  }

  changeEv(event: Event) {
    // DO the rule implementation
    this.eventEmitter.emit(event);
  }

}
