import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from './model/content';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  content$: Observable<Content> | undefined;
  language: string = '';

  constructor(private dataService: DataService,
              private route: ActivatedRoute) {

    this.route.data.subscribe((data) => {
      this.language = data['language']
    });

    this.content$ = dataService.get(this.language);
  }

  ngOnInit(): void {
  }
}
