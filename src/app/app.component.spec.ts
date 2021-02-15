import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixtureDft: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureDft = TestBed.createComponent(AppComponent);
    component = fixtureDft.componentInstance;
    fixtureDft.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'social-media-dashboard'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('social-media-dashboard');
  });

  it('should load dark', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.mode).toEqual('dark')
  });

  it('should set mode value', () => {
    component = fixtureDft.componentInstance;
    component.mode = 'light'
    component.setMode();
    expect(component.mode).toEqual('dark')
  });

  it('should set mode value', () => {
    component = fixtureDft.componentInstance;
    component.mode = 'dark'
    component.setMode();
    expect(component.mode).toEqual('light')
  });

  it('should save mode', () => {
    component = fixtureDft.componentInstance;
    component.mode = 'dark'
    localStorage.setItem('mode', '')
    component.saveMode();
    expect(localStorage.getItem('mode')).toEqual( component.mode)
  });
});
