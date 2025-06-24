export type QuestionType = 'text' | 'yesno' | 'multiple' | 'rating';

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[]; // for 'multiple' or 'yesno'
}
