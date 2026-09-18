import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const activityData = [
  { day: 'Mon', commits: 18, pullRequests: 8 },
  { day: 'Tue', commits: 25, pullRequests: 11 },
  { day: 'Wed', commits: 21, pullRequests: 9 },
  { day: 'Thu', commits: 32, pullRequests: 14 },
  { day: 'Fri', commits: 28, pullRequests: 12 },
  { day: 'Sat', commits: 14, pullRequests: 5 },
  { day: 'Sun', commits: 10, pullRequests: 4 },
]

function ActivityChart() {
  return (
    <section className="chart-card">
      <div className="chart-header">
        <div>
          <span className="chart-label">Development activity</span>
          <h3>Commits and Pull Requests</h3>
        </div>

        <span className="chart-period">Last 7 days</span>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={activityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="commits"
              strokeWidth={2}
              dot={false}
              name="Commits"
            />
            <Line
              type="monotone"
              dataKey="pullRequests"
              strokeWidth={2}
              dot={false}
              name="Pull Requests"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default ActivityChart
