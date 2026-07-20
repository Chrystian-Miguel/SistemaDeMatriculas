import { Subject } from './subject.model';

export interface Course {
  id: string;
  name: string;
  description?: string;
  subjects?: Subject[];
}
