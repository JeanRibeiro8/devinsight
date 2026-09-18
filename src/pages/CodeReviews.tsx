import { useState } from 'react'
import { codeReviews } from '../data/codeReviews'

function CodeReviews() {
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredReviews = codeReviews.filter(
    (review) =>
      statusFilter === 'All' ||
      review.status === statusFilter,
  )

  return (
    <main className="content">
      <div className="page-header">
        <div>
          <span className="section-label">Code quality</span>
          <h2>Code Reviews</h2>
        </div>

        <span className="repository-count">
          {filteredReviews.length} of {codeReviews.length} reviews
        </span>
      </div>

      <div className="pull-request-filters">
        {['All', 'Awaiting review', 'Completed'].map((status) => (
          <button
            key={status}
            type="button"
            className={
              statusFilter === status
                ? 'filter-button active'
                : 'filter-button'
            }
            onClick={() => setStatusFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <section className="code-reviews-list">
        {filteredReviews.length === 0 ? (
          <div className="empty-state">
            <strong>No code reviews found</strong>
            <span>Try changing the selected filter.</span>
          </div>
        ) : (
          filteredReviews.map((review) => (
            <article className="code-review-item" key={review.id}>
              <div className="code-review-main">
                <strong>{review.pullRequest}</strong>
                <span>
                  {review.repository} · {review.reviewer}
                </span>
              </div>

              <div className="code-review-stats">
                <div>
                  <strong>{review.comments}</strong>
                  <span>Comments</span>
                </div>

                <div>
                  <strong>{review.reviewTime}</strong>
                  <span>Review time</span>
                </div>

                <span className="code-review-status">
                  {review.status}
                </span>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  )
}

export default CodeReviews
