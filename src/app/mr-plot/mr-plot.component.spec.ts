import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrPlotComponent } from './mr-plot.component';

describe('MrPlotComponent', () => {
  let component: MrPlotComponent;
  let fixture: ComponentFixture<MrPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MrPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
