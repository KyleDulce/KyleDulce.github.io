import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "posts", component: PostsComponent},
  {path: "projects", component: ProjectsComponent},

  {path: "not-found", component: NotFoundComponent},
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "**", redirectTo: "not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
