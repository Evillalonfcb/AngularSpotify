import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacksPageComponent } from './tacks-page.component';

describe('TacksPageComponent', () => {
  let component: TacksPageComponent;
  let fixture: ComponentFixture<TacksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacksPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
