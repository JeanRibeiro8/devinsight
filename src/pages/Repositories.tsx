import { useMemo, useState } from 'react'
import RepositoryCard from '../components/RepositoryCard'
import { repositories } from '../data/repositories'

function Repositories() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [language, setLanguage] = useState('All')

  const filteredRepositories = useMemo(
    () =>
      repositories.filter((repository) => {
        const matchesSearch = repository.name
          .toLowerCase()
          .includes(search.toLowerCase())

        const matchesStatus =
          status === 'All' || repository.status === status

        const matchesLanguage =
          language === 'All' || repository.language === language

        return matchesSearch && matchesStatus && matchesLanguage
      }),
    [search, status, language],
  )

  return (
    <main className="content repositories-page">
      <div className="page-header">
        <div>
          <span className="section-label">Development</span>
          <h2>Repositories</h2>
        </div>

        <span className="repository-count">
          {filteredRepositories.length} of {repositories.length} repositories
        </span>
      </div>

      <div className="search-row">
        <input
          className="search-input"
          type="search"
          placeholder="Search repositories..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          aria-label="Filter by status"
        >
          <option value="All">All statuses</option>
          <option value="Active">Active</option>
          <option value="Archived">Archived</option>
        </select>

        <select
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          aria-label="Filter by language"
        >
          <option value="All">All languages</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Python">Python</option>
          <option value="Node.js">Node.js</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>

      {filteredRepositories.length === 0 ? (
        <div className="empty-state">
          <strong>No repositories found</strong>
          <span>Try changing the search or filters.</span>
        </div>
      ) : (
        <section className="repositories-grid">
          {filteredRepositories.map((repository) => (
            <RepositoryCard
              key={repository.id}
              repository={repository}
            />
          ))}
        </section>
      )}
    </main>
  )
}

export default Repositories
