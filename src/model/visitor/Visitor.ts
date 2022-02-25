import {Type} from '@angular/core';
import {SelectComponent} from '../../components/SelectComponent';

export interface Visitor {
  createSingleSelectComponent(): Type<any>;
  createSingleItemComponent(): Type<any>;
  createSingleTextComponent(): Type<any>;
  createSingleUploadComponent(): Type<any>;
}

export class MappingClass implements Visitor {
  createSingleItemComponent(): Type<any> {
    return null;
  }

  createSingleSelectComponent(): Type<any> {
    return SelectComponent;
  }

  createSingleTextComponent(): Type<any> {
    return null;
  }

  createSingleUploadComponent(): Type<any> {
    return null;
  }

}
