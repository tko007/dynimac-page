import {CustomElement} from './CustomElement';
import {Type} from '@angular/core';
import {Visitor} from './visitor/Visitor';

export class SingleUpload extends CustomElement {
  key: string;
  description: string;
  isVisible: boolean;
  order: number;

  accept(visitor: Visitor): Type<any> {
    return visitor.createSingleUploadComponent();
  }
}
