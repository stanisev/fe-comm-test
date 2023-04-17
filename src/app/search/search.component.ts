import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  template: `search: {{(route.queryParams | async)?.search}}`
})
export class SearchComponent {
  constructor(readonly route: ActivatedRoute, readonly router: Router) {}
  searchFor(searchText: string) {
    return this.router.navigate([], {queryParams: {'search': searchText}});
  }
}
