import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEpComponent } from './list-ep.component';

describe('ListEpComponent', () => {
  let component: ListEpComponent;
  let fixture: ComponentFixture<ListEpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
