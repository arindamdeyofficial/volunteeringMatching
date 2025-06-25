export type QuestionType = 'multiple-choice' | 'yes-no' | 'rating';

export interface Question {
  id: number;
  question: string;
  type: QuestionType;
  isActive: boolean;
  isPublished: boolean;
}
