import { pullRequests } from '../data/pullRequests'

function PullRequestList() {
  return (
    <section className="pull-request-card">
      <div className="card-header">
        <div>
          <span className="card-label">Code collaboration</span>
          <h3>Recent Pull Requests</h3>
        </div>

        <button type="button" className="view-button">
          View all
        </button>
      </div>

      <div className="pull-request-list">
        {pullRequests.map((pullRequest) => (
          <article className="pull-request-item" key={pullRequest.id}>
            <div className="pull-request-info">
              <strong>{pullRequest.title}</strong>
              <span>
                {pullRequest.repository} · {pullRequest.author}
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

export default PullRequestList
