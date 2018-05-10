  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { LibraryGridComponent } from './library-grid/library-grid.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {path: 'home', component: LibraryHomeComponent},
  {path: 'bookGrid/:key/:value', component: LibraryGridComponent},
  {path: 'bookDetails' , component: BookDetailsComponent},
  {path: '' , component: LoginComponent},
  {path: 'userInfo/:id_token', component: UserInfoComponent},
  {path: 'userInfo', component: UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LibraryHomeComponent,
                                  LibraryGridComponent,
                                  BookDetailsComponent,
                                  LoginComponent,
                                  UserInfoComponent]
