export type ApprovalType = 'EventRegistration' | 'UserRegistration' | 'SurveySubmission';

export interface ApprovalRequest {
  id: string;
  type: ApprovalType;
  requesterName: string;
  requesterEmail: string;
  createdAt: string; // ISO string
  description: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}
