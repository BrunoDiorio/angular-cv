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

  curDate:   Date = new Date();

  readonly labels: any =
  {
    "pt": ["anos", "ano", "e", "meses", "mes"],
    "en": ["years", "year", "and", "months", "month"]
  };

  constructor() {}

  ngOnInit(): void {

    this.experiences.data.forEach(experience => {
      experience.currentJobStartDate = this.calcCurrentJobTime(experience.currentJobStartDate);
    });
  }

  initDiffDate(beginDate: Date): Date {
    return new Date(this.curDate.getTime() - beginDate.getTime());
  }

  dateDiffYears(diffDate: Date): number {
    return diffDate.getUTCFullYear() - 1970;
  }

  dateDiffMonths(diffDate: Date): number {
    return diffDate.getUTCMonth();
  }

  calcCurrentJobTime(beginDateStr: string): string {

    let beginDate: Date = new Date(beginDateStr);
    let diffDate:  Date = this.initDiffDate(beginDate);

    let key = this.language;
    let label = this.labels[key];

    let months = this.dateDiffMonths(diffDate);
    let years  = this.dateDiffYears(diffDate);
    let retVal = '';


    if (years > 1) {
      retVal += years;
      retVal += ' ' + label[0];

    } else if (years > 0) {
      retVal += years;
      retVal += ' ' + label[1];
    }

    retVal += (years > 0 && months > 0) ? ' ' + label[2] + ' ' : '';

    if (months > 1) {
      retVal += months;
      retVal += ' ' + label[3];

    } else if (months > 0) {
      retVal += months;
      retVal += ' ' + label[4];
    }

    return retVal;
  }

  yearsLabel(years: number): string {
    return this.labels[this.language]
  }
}
