import {CustomElement} from './CustomElement';
import {Type} from '@angular/core';
import {Visitor} from './visitor/Visitor';

export class SingleText extends CustomElement {
  key: string;
  description: string;
  inputType: string;
  isVisible: boolean;
  order: number;

  accept(visitor: Visitor): Type<any> {
    return visitor.createSingleTextComponent();
  }
}
