import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicoExcluirPage } from './servico-excluir.page';

describe('ServicoExcluirPage', () => {
  let component: ServicoExcluirPage;
  let fixture: ComponentFixture<ServicoExcluirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoExcluirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicoExcluirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
