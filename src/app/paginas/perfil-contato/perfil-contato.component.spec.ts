import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContatoComponent } from './perfil-contato.component';

describe('PerfilContatoComponent', () => {
  let component: PerfilContatoComponent;
  let fixture: ComponentFixture<PerfilContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilContatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
