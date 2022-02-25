import {CustomSection} from './CustomSection';
import {Type} from 'class-transformer';

export class CustomContainer {
  version: string;
  title: string;
  description: string;

  @Type(() => CustomSection)
  sections: CustomSection[];
}
