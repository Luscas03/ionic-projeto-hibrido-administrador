import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietaRemovePage } from './dieta-remove.page';

describe('DietaRemovePage', () => {
  let component: DietaRemovePage;
  let fixture: ComponentFixture<DietaRemovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaRemovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietaRemovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
