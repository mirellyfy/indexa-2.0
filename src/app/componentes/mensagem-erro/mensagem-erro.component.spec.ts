import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemErroComponent } from './mensagem-erro.component';

describe('MensagemErroComponent', () => {
  let component: MensagemErroComponent;
  let fixture: ComponentFixture<MensagemErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensagemErroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensagemErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
