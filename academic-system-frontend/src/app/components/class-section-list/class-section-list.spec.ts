import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSectionList } from './class-section-list';

describe('ClassSectionList', () => {
  let component: ClassSectionList;
  let fixture: ComponentFixture<ClassSectionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassSectionList],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassSectionList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
