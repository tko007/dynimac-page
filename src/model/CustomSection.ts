import {CustomElement} from './CustomElement';
import {Type} from 'class-transformer';
import {SingleSelect} from './SingleSelect';
import {SingleText} from './SingleText';
import {SingleUpload} from './SingleUpload';

export class CustomSection {
  id: string;

  @Type(() => CustomElement, {
    discriminator: {
      property: 'type',
      subTypes: [
        { value: SingleSelect, name: 'singleSelect' },
        { value: SingleText, name: 'text' },
        { value: SingleUpload, name: 'upload' }
      ]
    }
  })
  fields: CustomElement[];
}
