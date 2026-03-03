import type { Badge } from "./badge.js"

export interface RepositoryReadme {
  title: string
  badges: Badge[]
  imagePath: string | null
  videoUrl: string | null
  learnings: string[]
}