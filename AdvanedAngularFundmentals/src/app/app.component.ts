import { Component, OnInit} from '@angular/core';
import {GitSearchService} from './git-search.service';
import {GitSearch} from './git-search';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService]
})
export class AppComponent implements OnInit {
  title = 'AdvanedAngularFundmentals';
  constructor(private GitSearchservice: GitSearchService) {}
  ngOnInit() {
    this.GitSearchservice.gitsearch('Angu==lar').then((response: GitSearch) => {
      alert('Total libraries found ' + response.total_count);
    },
    (error) => {
      alert('Error:' + error.statusText);
    });

  }
}
