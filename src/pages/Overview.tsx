import ActivityChart from '../components/ActivityChart'
import AIInsights from '../components/AIInsights'
import PullRequestList from '../components/PullRequestList'
import StatsCard from '../components/StatsCard'
import TeamActivity from '../components/TeamActivity'
import { dashboardStats } from '../data/dashboard'

function Overview() {
  return (
    <main className="content dashboard-page">
      <div className="dashboard-header">
        <div>
          <span className="section-label">Engineering overview</span>
          <h2>Overview</h2>
        </div>

        <button type="button" className="date-button">
          Last 7 days
        </button>
      </div>

      <section className="stats-grid">
        {dashboardStats.map((stat) => (
          <StatsCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </section>

      <ActivityChart />

      <div className="dashboard-columns">
        <PullRequestList />
        <TeamActivity />
      </div>

      <AIInsights />
    </main>
  )
}

export default Overview
