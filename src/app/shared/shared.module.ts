import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { EpisodePipe } from './pipes/episode.pipe';
import { SeasonPipe } from './pipes/season.pipe';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UrlToIdPipe } from './pipes/url-to-id.pipe';
import { WithoutDimensionPipe } from './pipes/without-dimension.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    SeasonsComponent,
    CharacterComponent,
    LoadingComponent,
    NotfoundComponent,
    HeaderComponent,
    EpisodePipe,
    SeasonPipe,
    UrlToIdPipe,
    WithoutDimensionPipe,
    SidebarComponent,
    SearchBarComponent,
  ],
  exports: [
    SeasonsComponent,
    CharacterComponent,
    LoadingComponent,
    NotfoundComponent,
    HeaderComponent,
    EpisodePipe,
    SeasonPipe,
    UrlToIdPipe,
    WithoutDimensionPipe,
    SidebarComponent,
    SearchBarComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule, HttpClientModule],
})
export class SharedModule {}
