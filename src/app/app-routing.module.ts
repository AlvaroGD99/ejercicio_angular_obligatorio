import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'new' },
  { path: 'blog', component: BlogComponentComponent },
  { path: 'new', component: FormularioComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
