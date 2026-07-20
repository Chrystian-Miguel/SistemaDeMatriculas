import { Subject } from './subject.model';

export type ClassSectionStatus = 'OPEN' | 'CLOSED';

export interface ClassSection {
  id: string;
  code: string;
  totalSlots: number;
  availableSlots: number;
  status: ClassSectionStatus;
  subject: Subject;
}
