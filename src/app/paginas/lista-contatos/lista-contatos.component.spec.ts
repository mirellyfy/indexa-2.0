import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContatosComponent } from './lista-contatos.component';

describe('ListaContatosComponent', () => {
  let component: ListaContatosComponent;
  let fixture: ComponentFixture<ListaContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaContatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
