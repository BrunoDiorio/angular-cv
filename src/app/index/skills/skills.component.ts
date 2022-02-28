import { Section } from './../model/content';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: Section[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
