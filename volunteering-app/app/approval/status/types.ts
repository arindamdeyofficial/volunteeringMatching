export type ApprovalStatusType =
  | 'UserRegistration'
  | 'EventRegistration'
  | 'SurveySubmission';

export interface UserApprovalStatus {
  id: string;
  type: ApprovalStatusType;
  description: string;
  createdAt: string; // ISO date string
  status: 'Pending' | 'Approved' | 'Rejected';
}
