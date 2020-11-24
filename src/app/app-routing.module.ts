import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersPostsComponent } from './customers-posts/customers-posts.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: 'post/:userId',
    component: CustomersPostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
