import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {ActivatedRoute, provideRouter, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {RouterTestingHarness} from "@angular/router/testing";

// describe('SearchComponent', () => {
//   let fixture: ComponentFixture<SearchComponent>;
//
//   const activatedRouteStub = {queryParams: new BehaviorSubject<any>({})};
//   const routerStub = jasmine.createSpyObj('router', ['navigate']);
//   routerStub.navigate.and.callFake(
//     (commands: any, navigationExtras: { queryParams: any; }) =>
//       activatedRouteStub.queryParams.next(navigationExtras.queryParams));
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [SearchComponent],
//       providers: [
//         {provide: Router, useValue: routerStub},
//         {provide: ActivatedRoute, useValue: activatedRouteStub},
//       ]
//     });
//     fixture = TestBed.createComponent(SearchComponent);
//   });
//
//   it('should test search functionality', async() => {
//     await fixture.componentInstance.searchFor('books');
//     fixture.detectChanges();
//     expect(fixture.nativeElement.innerHTML).toContain('search: books');
//   });
// });

describe('SearchComponent - Harness', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([{path: '**', component: SearchComponent}])
      ],
    });
  });

  it('should test search with harness', async()=> {
    const harness = await RouterTestingHarness.create();
    const activatedComponent = await harness.navigateByUrl('/', SearchComponent);

    await activatedComponent.searchFor('books');
    harness.detectChanges();
    expect(harness.routeNativeElement?.innerHTML).toContain('search: books');
  });
});
