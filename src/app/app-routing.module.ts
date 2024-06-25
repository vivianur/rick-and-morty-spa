import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodePageComponent } from './components/episode-page/episode-page.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'characters',component: CharacterListComponent},
  { path: 'episodes', component: EpisodeListComponent },
  { path: 'characters/:id', component: CharacterPageComponent },
  { path: 'episodes/:id', component: EpisodePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
