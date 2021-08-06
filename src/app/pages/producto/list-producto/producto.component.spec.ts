import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductoComponent } from './producto.component';

describe('ProductoComponent', () => {
  let component: ListProductoComponent;
  let fixture: ComponentFixture<ListProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
