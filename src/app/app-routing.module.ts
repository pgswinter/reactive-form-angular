import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { TrainFormComponent } from './train-form/train-form.component';
import { UploaderComponent} from './train-form/uploader/uploader.component';

const routes: Routes = [
  {path: '', component: HeroesComponent},
  {path: 'reactive-form', component: TrainFormComponent},
  {path: 'uploader', component: UploaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
