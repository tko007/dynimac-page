import {Type} from '@angular/core';
import {Component} from './visitor/Component';
import {Visitor} from './visitor/Visitor';

export abstract class CustomElement implements Component {
  type: string;

  // check out: https://github.com/microsoft/TypeScript/issues/22815
  abstract accept(visitor: Visitor): Type<any>;

}
