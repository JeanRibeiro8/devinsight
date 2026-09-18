export interface Repository {
  id: number
  name: string
  language: string
  contributors: number
  pullRequests: number
  lastUpdate: string
  status: 'Active' | 'Archived'
  testCoverage: number
  activityLevel: 'High' | 'Medium' | 'Low'
}
