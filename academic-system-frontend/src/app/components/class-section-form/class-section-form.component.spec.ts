import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ClassSectionFormComponent } from './class-section-form.component';
import { ClassSectionService } from '../../services/class-section.service';

describe('ClassSectionFormComponent', () => {
  let component: ClassSectionFormComponent;
  let fixture: ComponentFixture<ClassSectionFormComponent>;
  let classSectionService: ClassSectionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassSectionFormComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'section-1',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassSectionFormComponent);
    component = fixture.componentInstance;
    classSectionService = TestBed.inject(ClassSectionService);

    spyOn(classSectionService, 'getClassSection').and.returnValue(of({
      id: 'section-1',
      code: 'CS-101',
      totalSlots: 20,
      availableSlots: 10,
      status: 'OPEN',
      subject: { id: 'sub-1', name: 'Math', classHours: 4, course: { id: 'c-1', name: 'Computer Science', description: '' } },
    }));

    spyOn(classSectionService, 'updateClassSection').and.returnValue(of({} as any));

    fixture.detectChanges();
  });

  it('should preserve the original code when saving an edited class section', () => {
    expect(component.form.get('code')?.value).toBe('CS-101');
    expect(component.form.get('subjectId')?.value).toBe('sub-1');

    component.form.patchValue({ totalSlots: 25, status: 'CLOSED' });
    component.onSubmit();

    expect(classSectionService.updateClassSection).toHaveBeenCalledWith('section-1', jasmine.objectContaining({
      code: 'CS-101',
      totalSlots: 25,
      status: 'CLOSED',
    }));
  });
});
