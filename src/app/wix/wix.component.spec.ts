import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WixComponent } from './wix.component';

describe('WixComponent', () => {
  let component: WixComponent;
  let fixture: ComponentFixture<WixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
