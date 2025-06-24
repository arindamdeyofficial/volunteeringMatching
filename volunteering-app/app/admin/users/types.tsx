export type UserRole = 'Admin' | 'Vip' | 'Sponsor' | 'Exhibitor' | 'BasicUser';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
  group: string;
  role: UserRole;
  hierarchy: string;
}
