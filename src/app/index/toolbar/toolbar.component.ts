import { Component, OnInit, Input } from '@angular/core';

import { Header } from '../model/content';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() header: Header = <Header>{};

  constructor() {
   }

  ngOnInit(): void {
  }

}
