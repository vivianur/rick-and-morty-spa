import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoverComponent } from './components/home/cover/cover.component';
// import { TitleComponent } from './components/home/title/title.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodePageComponent } from './components/episode-page/episode-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CoverComponent,
        // TitleComponent,
        CharacterListComponent,
        CharacterPageComponent,
        EpisodeListComponent,
        EpisodePageComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
