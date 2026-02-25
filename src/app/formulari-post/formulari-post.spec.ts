import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariPost } from './formulari-post';

describe('FormulariPost', () => {
  let component: FormulariPost;
  let fixture: ComponentFixture<FormulariPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
