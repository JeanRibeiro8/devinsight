import { Link } from 'react-router-dom'
import type { Repository } from '../types/repository'

interface RepositoryCardProps {
  repository: Repository
}

function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Link
      to={`/repositories/${repository.id}`}
      className="repository-card-link"
    >
      <article className="repository-card">
        <div className="repository-header">
          <div>
            <span className="repository-language">
              {repository.language}
            </span>

            <h3>{repository.name}</h3>
          </div>

          <span
            className={`repository-status ${repository.status.toLowerCase()}`}
          >
            {repository.status}
          </span>
        </div>

        <div className="repository-info">
          <div>
            <strong>{repository.contributors}</strong>
            <span>Contributors</span>
          </div>

          <div>
            <strong>{repository.pullRequests}</strong>
            <span>Pull Requests</span>
          </div>

          <div>
            <strong>{repository.testCoverage}%</strong>
            <span>Test Coverage</span>
          </div>
        </div>

        <div className="repository-footer">
          <span>Updated {repository.lastUpdate}</span>
          <span>{repository.activityLevel} activity</span>
        </div>
      </article>
    </Link>
  )
}

export default RepositoryCard
