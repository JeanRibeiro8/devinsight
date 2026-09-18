import { teamMembers } from '../data/team'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function Team() {
  const totalCommits = teamMembers.reduce(
    (sum, member) => sum + member.commits,
    0,
  )

  const totalPullRequests = teamMembers.reduce(
    (sum, member) => sum + member.pullRequests,
    0,
  )

  const averageContribution =
    teamMembers.reduce(
      (sum, member) => sum + member.contribution,
      0,
    ) / teamMembers.length

  return (
    <main className="content">
      <div className="page-header">
        <div>
          <span className="section-label">Collaboration</span>
          <h2>Team</h2>
        </div>

        <span className="repository-count">
          {teamMembers.length} members
        </span>
      </div>

      <section className="team-page-stats">
        <div className="detail-card">
          <span>Total Members</span>
          <strong>{teamMembers.length}</strong>
        </div>

        <div className="detail-card">
          <span>Total Commits</span>
          <strong>{totalCommits}</strong>
        </div>

        <div className="detail-card">
          <span>Total PRs</span>
          <strong>{totalPullRequests}</strong>
        </div>

        <div className="detail-card">
          <span>Avg. Contribution</span>
          <strong>{averageContribution.toFixed(0)}%</strong>
        </div>
      </section>

      <section className="team-page-card">
        <div className="card-header">
          <div>
            <span className="card-label">Team members</span>
            <h3>Contribution activity</h3>
          </div>
        </div>

        <div className="team-list">
          {teamMembers.map((member) => (
            <article className="team-member" key={member.id}>
              <div className="team-member-info">
                <div className="team-avatar">
                  {getInitials(member.name)}
                </div>

                <div>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
              </div>

              <div className="team-stats">
                <div>
                  <strong>{member.commits}</strong>
                  <span>Commits</span>
                </div>

                <div>
                  <strong>{member.pullRequests}</strong>
                  <span>PRs</span>
                </div>

                <div>
                  <strong>{member.reviews}</strong>
                  <span>Reviews</span>
                </div>

                <div>
                  <strong>{member.contribution}%</strong>
                  <span>Contribution</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Team
