import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import TestJson from '../assets/test.json';
import {CustomContainer} from '../model/CustomContainer';
import {FormElement} from '../components/FormElement';
import {plainToClass} from 'class-transformer';
import {CustomSection} from '../model/CustomSection';
import {CustomElement} from '../model/CustomElement';
import {MappingClass} from '../model/visitor/Visitor';
import {CommonComponent} from '../components/SelectComponent';
import {SingleSelect} from '../model/SingleSelect';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(FormElement, {static: true}) forms: FormElement;
  page: CustomContainer;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    const mapper: MappingClass = new MappingClass();
    const viewContainerRef = this.forms.viewContainerRef;

    try {
      this.page = plainToClass(CustomContainer, TestJson);
      const mainSection: CustomSection = this.page.sections[0];
      const fields: CustomElement[] = mainSection.fields;

      fields.forEach(el => {
        const type = el.accept(mapper);

        if (el.accept(mapper) !== null) {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
          const componentRef = viewContainerRef.createComponent(componentFactory);
          console.log(componentRef);

          // overpass the data from model
          const comp: CommonComponent = (<CommonComponent> componentRef.instance);
          comp.data = el;
          comp.eventEmitter.subscribe(
            (event) => this.eventHandling(event));

        }
      });

    } catch (e) { console.log(e); }

  }

  eventHandling(event: any): void {
    // lookup the component
    console.log(`event occured: ${event}`);
    const selectOne = (<SingleSelect> this.page.sections[0].fields[1]);

    selectOne.description = 'lala';
  }

}
