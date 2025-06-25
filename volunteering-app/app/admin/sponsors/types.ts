export interface Sponsor {
  id: number;
  name: string;
  email: string;
  isIndividual: boolean;
  eventsSponsored: string[];
  isActive: boolean;
}
