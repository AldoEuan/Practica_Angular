import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalppComponent } from './walpp.component';

describe('WalppComponent', () => {
  let component: WalppComponent;
  let fixture: ComponentFixture<WalppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
