// tslint:disable-next-line:import-spacing
import {CustomElement} from './CustomElement';
import {Type} from '@angular/core';
import {Visitor} from './visitor/Visitor';

export class SingleItem extends CustomElement {
  key: string;
  description: string;
  isSelected: boolean;
  order: number;

  accept(visitor: Visitor): Type<any> {
    return visitor.createSingleItemComponent();
  }

}
