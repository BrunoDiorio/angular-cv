
import { Component, Input, OnInit } from '@angular/core';
import { Formation } from '../model/content';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  @Input() formation: Formation = <Formation>{};

  constructor() { }

  ngOnInit(): void {
  }

}
