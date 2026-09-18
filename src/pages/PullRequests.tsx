import { useState } from 'react'
import { pullRequests } from '../data/pullRequests'

function PullRequests() {
  const [statusFilter, setStatusFilter] = useState('All')
  const [authorFilter, setAuthorFilter] = useState('All')
  const [repositoryFilter, setRepositoryFilter] = useState('All')

  const filteredPullRequests = pullRequests.filter(
    (pullRequest) =>
      (statusFilter === 'All' ||
        pullRequest.status === statusFilter) &&
      (authorFilter === 'All' ||
        pullRequest.author === authorFilter) &&
      (repositoryFilter === 'All' ||
        pullRequest.repository === repositoryFilter),
  )

  function clearFilters() {
    setStatusFilter('All')
    setAuthorFilter('All')
    setRepositoryFilter('All')
  }

  return (
    <main className="content">
      <div className="page-header">
        <div>
          <span className="section-label">Code collaboration</span>
          <h2>Pull Requests</h2>
        </div>

        <span className="repository-count">
          {filteredPullRequests.length} of {pullRequests.length} pull requests
        </span>
      </div>

      <div className="pull-request-filters">
        {['All', 'Open', 'In review', 'Approved', 'Merged', 'Closed'].map(
          (status) => (
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
          ),
        )}

        <select
          value={authorFilter}
          onChange={(event) => setAuthorFilter(event.target.value)}
        >
          <option value="All">All authors</option>
          <option value="Jean Ribeiro">Jean Ribeiro</option>
          <option value="Lucas Martins">Lucas Martins</option>
          <option value="Maria Silva">Maria Silva</option>
          <option value="Carlos Souza">Carlos Souza</option>
        </select>

        <select
          value={repositoryFilter}
          onChange={(event) => setRepositoryFilter(event.target.value)}
        >
          <option value="All">All repositories</option>
          <option value="devinsight-web">devinsight-web</option>
          <option value="devinsight-api">devinsight-api</option>
          <option value="analytics-service">analytics-service</option>
        </select>

        <button
          type="button"
          className="clear-filters-button"
          onClick={clearFilters}
        >
          Clear filters
        </button>
      </div>

      <section className="pull-requests-page-list">
        {filteredPullRequests.length === 0 ? (
          <div className="empty-state">
            <strong>No pull requests found</strong>
            <span>Try changing the selected filters.</span>
          </div>
        ) : (
          filteredPullRequests.map((pullRequest) => (
            <article
              className="pull-request-page-item"
              key={pullRequest.id}
            >
              <div>
                <strong>{pullRequest.title}</strong>
                <span>
                  {pullRequest.repository} · {pullRequest.author}
                </span>
              </div>

              <span className="pull-request-status">
                {pullRequest.status}
              </span>
            </article>
          ))
        )}
      </section>
    </main>
  )
}

export default PullRequests
