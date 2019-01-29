import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
    {path: 'business', component: UserGetComponent},
    {path: 'business/create', component: UserAddComponent},
    {path: 'business/edit/:id', component: UserEditComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {

}
