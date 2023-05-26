import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSecundariaComponent } from './pagina-secundaria.component';

describe('PaginaSecundariaComponent', () => {
  let component: PaginaSecundariaComponent;
  let fixture: ComponentFixture<PaginaSecundariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginaSecundariaComponent]
    });
    fixture = TestBed.createComponent(PaginaSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
