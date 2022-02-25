import {Visitor} from './Visitor';
import {Type} from '@angular/core';

export interface Component {
  accept(visitor: Visitor): Type<any>;
}
