import { pullRequests } from '../data/pullRequests'

function RepositoryPullRequests() {
  return (
    <section className="repository-pr-card">
      <div className="card-header">
        <div>
          <span className="card-label">Code collaboration</span>
          <h3>Pull Requests</h3>
        </div>
      </div>

      <div className="repository-pr-list">
        {pullRequests.map((pullRequest) => (
          <article className="repository-pr-item" key={pullRequest.id}>
            <div>
              <strong>{pullRequest.title}</strong>
              <span>
                {pullRequest.author} · {pullRequest.repository}
              </span>
            </div>

            <span className="pull-request-status">
              {pullRequest.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RepositoryPullRequests
