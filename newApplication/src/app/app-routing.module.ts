import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ApplicationComponent } from '../app/application/application.component'
import { InvoiceGenerateComponent } from '../app/invoice-generate/invoice-generate.component'
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule} from '@angular/router'

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
const routes : Routes = [
  {
    path : 'application',
    component: ApplicationComponent
  },
   {
     path : 'invoice',
     component: InvoiceGenerateComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
