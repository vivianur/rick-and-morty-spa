import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  term: string = '';
  searchUpdate = new Subject<string>();
  currentPage: number = 1;
  pages: number = 1;
  next: string | null = '';
  prev: string | null = '';
  loading: boolean = false;
  notFound: boolean = false;

  constructor(private characterService: CharacterService) {
    this.searchUpdate
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.currentPage = 1;
        this.loadCharacters();
      });
  }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.loading = true;
    this.notFound = false;
    this.characterService.getCharacters(this.term, this.currentPage).subscribe((data: any) => {
      this.loading = false;
      this.characters = data.results;
      this.pages = data.info.pages;
      this.prev = data.info.prev;
      this.next = data.info.next;
    },
      (error) => {
        this.characters = [];
        this.loading = false;
        this.notFound = true;
      }
    );
  }

  nextPage() {
    this.currentPage++;
    this.loadCharacters();
  }

  prevPage() {
    this.currentPage--;
    this.loadCharacters();
  }
}
