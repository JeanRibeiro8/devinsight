import { teamMembers } from '../data/team'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function TeamActivity() {
  return (
    <section className="team-card">
      <div className="card-header">
        <div>
          <span className="card-label">Team contributions</span>
          <h3>Team Activity</h3>
        </div>

        <button type="button" className="view-button">
          View team
        </button>
      </div>

      <div className="team-list">
        {teamMembers.slice(0, 4).map((member) => (
          <article className="team-member" key={member.id}>
            <div className="team-member-info">
              <div className="team-avatar">{getInitials(member.name)}</div>

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
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TeamActivity
