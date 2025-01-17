

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  benefits: string[];
  minInvestment?: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  performanceMetric?: string;
}