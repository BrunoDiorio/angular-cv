import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../model/content';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  @Input() experiences: Experience = <Experience>{};
  @Input() language: string = '';

  readonly labels: any =
  {
    "pt": ["anos", "ano", "meses", "mes"],
    "en": ["years", "year", "months", "month"]
  };

  beginDate: Date = new Date('2020-03-01');
  curDate:   Date = new Date();
  diffDate:  Date = this.initDiffDate();
  formatedDiffDate: string = '';

  constructor() {}

  ngOnInit(): void {
    this.formatedDiffDate = this.calcCurrentJobTime();
  }

  initDiffDate(): Date {
    return new Date(this.curDate.getTime() - this.beginDate.getTime());
  }

  dateDiffYears(): number {
    return this.diffDate.getUTCFullYear() - 1970;
  }

  dateDiffMonths(): number {
    return this.diffDate.getUTCMonth();
  }

  calcCurrentJobTime(): string {
    let key = this.language;
    console.log(this.labels[key]);

    let months = this.dateDiffMonths();
    let years  = this.dateDiffYears();
    let retVal = '';

    retVal += years;
    retVal += (years > 1) ? ' anos' : ' ano';
    retVal += (years > 0 && months > 0) ? ' e ' : '';
    retVal += months;
    retVal += (months > 1) ? ' meses' : ' mês';
    return retVal;
  }

  yearsLabel(years: number): string {
    return this.labels[this.language]
  }
}
