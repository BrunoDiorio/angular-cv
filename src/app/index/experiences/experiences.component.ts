import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../model/content';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  @Input() experiences: Experience = <Experience>{};

  constructor() { }

  ngOnInit(): void {
  }

}
