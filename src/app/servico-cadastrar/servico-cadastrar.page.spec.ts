import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicoCadastrarPage } from './servico-cadastrar.page';

describe('ServicoCadastrarPage', () => {
  let component: ServicoCadastrarPage;
  let fixture: ComponentFixture<ServicoCadastrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoCadastrarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicoCadastrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
