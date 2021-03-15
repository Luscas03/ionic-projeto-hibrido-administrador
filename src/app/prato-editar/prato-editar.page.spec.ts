import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PratoEditarPage } from './prato-editar.page';

describe('PratoEditarPage', () => {
  let component: PratoEditarPage;
  let fixture: ComponentFixture<PratoEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PratoEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
