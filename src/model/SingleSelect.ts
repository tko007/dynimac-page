import {CustomElement} from './CustomElement';
import {SingleItem} from './SingleItem';
import {Type as classType} from 'class-transformer';
import {Visitor} from './visitor/Visitor';
import {Type} from '@angular/core';

export class SingleSelect extends CustomElement {
  key: string;
  description: string;
  order: number;

  @classType(() => SingleItem)
  fields: SingleItem[];

  accept(visitor: Visitor): Type<any> {
    return visitor.createSingleSelectComponent();
  }
}
