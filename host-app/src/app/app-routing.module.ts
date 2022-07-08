import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'my-component', component: MyComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
