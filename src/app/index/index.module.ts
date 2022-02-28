import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DescriptionComponent } from './description/description.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormationComponent } from './formation/formation.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    DescriptionComponent,
    ToolbarComponent,
    IndexComponent,
    ExperiencesComponent,
    FormationComponent,
    PersonalDataComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
  ]
})
export class IndexModule { }
