import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietaEditarPage } from './dieta-editar.page';

describe('DietaEditarPage', () => {
  let component: DietaEditarPage;
  let fixture: ComponentFixture<DietaEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietaEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
