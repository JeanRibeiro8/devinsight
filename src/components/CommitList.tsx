import { commits } from '../data/commits'

function CommitList() {
  return (
    <section className="commit-card">
      <div className="card-header">
        <div>
          <span className="card-label">Repository activity</span>
          <h3>Recent Commits</h3>
        </div>
      </div>

      <div className="commit-list">
        {commits.map((commit) => (
          <article className="commit-item" key={commit.id}>
            <div>
              <strong>{commit.message}</strong>
              <span>{commit.author}</span>
            </div>

            <time>{commit.date}</time>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CommitList
