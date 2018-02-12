import { async, ComponentFixture, TestBed , fakeAsync} from '@angular/core/testing';
import { AuthorService} from '../authorService';
import { AuthorsComponent } from './authors.component';
import { AUTHORSNAMES, test } from './data.mock'
import { Observable } from 'rxjs/Rx';

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  let dataStub: test;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsComponent ]
    }).overrideComponent(AuthorsComponent, {
      set: {
        providers: [
          { provide: AuthorService, useClass: test },
        ]
      }
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AuthorsComponent);
      component = fixture.componentInstance;
      dataStub = fixture.debugElement.injector.get(AuthorService);
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tests that it gets something and prints the response', fakeAsync(() => {
    const spy = spyOn(component, 'loadAll()').and.returnValue(
      Observable.of(AUTHORSNAMES)
    );
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.authorarray).toEqual(AUTHORSNAMES);
    expect(spy.calls.any()).toEqual(true);
    
    //expect(console.log).toHaveBeenCalledWith('The resonse is', AUTHORSNAMES);
  }));
});
