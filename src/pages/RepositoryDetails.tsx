import { Link, useParams } from 'react-router-dom'
import CommitList from '../components/CommitList'
import QualityMetrics from '../components/QualityMetrics'
import RepositoryPullRequests from '../components/RepositoryPullRequests'
import { repositories } from '../data/repositories'

function RepositoryDetails() {
  const { id } = useParams()

  const repository = repositories.find(
    (item) => item.id === Number(id),
  )

  if (!repository) {
    return (
      <main className="content">
        <h2>Repository not found</h2>

        <Link to="/repositories" className="back-link">
          Back to repositories
        </Link>
      </main>
    )
  }

  const quality =
    repository.testCoverage >= 85
      ? 'A+'
      : repository.testCoverage >= 70
        ? 'A'
        : 'B'

  const technicalDebt =
    repository.testCoverage >= 80 ? 'Low' : 'Medium'

  return (
    <main className="content">
      <Link to="/repositories" className="back-link">
        ← Back to repositories
      </Link>

      <section className="repository-details">
        <div className="repository-details-header">
          <div>
            <span className="repository-language">
              {repository.language}
            </span>

            <h2>{repository.name}</h2>

            <p>
              Development activity and repository performance overview.
            </p>
          </div>

          <span
            className={`repository-status ${repository.status.toLowerCase()}`}
          >
            {repository.status}
          </span>
        </div>

        <div className="repository-details-grid">
          <div className="detail-card">
            <span>Contributors</span>
            <strong>{repository.contributors}</strong>
          </div>

          <div className="detail-card">
            <span>Pull Requests</span>
            <strong>{repository.pullRequests}</strong>
          </div>

          <div className="detail-card">
            <span>Test Coverage</span>
            <strong>{repository.testCoverage}%</strong>
          </div>

          <div className="detail-card">
            <span>Activity Level</span>
            <strong>{repository.activityLevel}</strong>
          </div>
        </div>

        <div className="repository-details-section">
          <span className="card-label">Repository information</span>
          <h3>Latest activity</h3>
          <p>Last update: {repository.lastUpdate}</p>
        </div>
      </section>

      <CommitList />
      <RepositoryPullRequests />
      <QualityMetrics
        testCoverage={repository.testCoverage}
        issues={repository.testCoverage < 70 ? 12 : 7}
        codeQuality={quality}
        technicalDebt={technicalDebt}
      />
    </main>
  )
}

export default RepositoryDetails
