import { PersonalData, PersonalDataIcons, Section } from './../model/content';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent implements OnInit {
  @Input() personalData: PersonalData = <PersonalData>{};

  constructor() {}

  public icons = PersonalDataIcons;

  ngOnInit(): void {}

  /* --------------------------------------- type guard -------------------------------------- */
  /* https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards */

  public isSection(param: Section | string): param is Section {
    return (param as Section).title !== undefined;
  }
  /* ----------------------------------  alternativa ----------------------------------*/
  /* https://angular.io/guide/template-expression-operators#the-any-type-cast-function */
}
