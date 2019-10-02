import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeviewComponent } from './welcomeview/welcomeview.component';
import { RbacloginComponent } from './rbaclogin/rbaclogin.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeviewComponent},
  {path: 'rbaclogin', component: RbacloginComponent},
  /* samplecode for sub routing */
  // {
  //   path: 'topcomp', 
  //   component: TopcompComponent,
  //   children: [
  //     {path: '', redirectTo: 'subcomp1', pathMatch: 'full'},
  //     {path: 'subcomp1', component: Subcomp1Component},
  //     {path: 'subcomp2', component: Subcomp2Component},
  //     {path: '**', component: Subcomp1Component},
  //   ]
  // },


  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
