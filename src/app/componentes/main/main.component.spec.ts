import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';

describe('MainComponent', () => {  // <-- Aqui estava errado?
  let component: MainComponent; // <-- Aqui também
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent]  // <-- Verifique aqui também
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
