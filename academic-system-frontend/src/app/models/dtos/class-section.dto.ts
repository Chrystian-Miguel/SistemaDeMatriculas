export type ClassSectionStatus = 'OPEN' | 'CLOSED';

export interface ClassSectionCreateRequestDTO {
  code: string;
  totalSlots: number;
  subjectId: string;
  status: ClassSectionStatus;
}

export interface ClassSectionUpdateRequestDTO {
  code: string;
  totalSlots: number;
  status: ClassSectionStatus;
}
