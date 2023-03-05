import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventdateComponent } from './eventdate/eventdate.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'matchname', component: EventdateComponent },
    
    { path: '**', redirectTo: 'login' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
