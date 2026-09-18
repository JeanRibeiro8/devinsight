import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const commitsData = [
  { day: 'Mon', commits: 48 },
  { day: 'Tue', commits: 62 },
  { day: 'Wed', commits: 55 },
  { day: 'Thu', commits: 74 },
  { day: 'Fri', commits: 68 },
  { day: 'Sat', commits: 35 },
  { day: 'Sun', commits: 42 },
]

const languageData = [
  { name: 'TypeScript', value: 42 },
  { name: 'JavaScript', value: 28 },
  { name: 'React', value: 18 },
  { name: 'CSS', value: 7 },
  { name: 'Other', value: 5 },
]

function Analytics() {
  return (
    <main className="content">
      <div className="page-header">
        <div>
          <span className="section-label">Engineering metrics</span>
          <h2>Analytics</h2>
        </div>

        <select defaultValue="30">
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>

      <section className="analytics-grid">
        <article className="analytics-card">
          <div className="card-header">
            <div>
              <span className="card-label">Development activity</span>
              <h3>Commits</h3>
            </div>
          </div>

          <div className="analytics-chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={commitsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="commits" name="Commits" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="analytics-card">
          <div className="card-header">
            <div>
              <span className="card-label">Codebase composition</span>
              <h3>Languages</h3>
            </div>
          </div>

          <div className="analytics-chart">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={languageData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {languageData.map((item) => (
                    <Cell key={item.name} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>

      <section className="analytics-card" style={{ marginTop: 20 }}>
        <div className="card-header">
          <div>
            <span className="card-label">Language distribution</span>
            <h3>Repository composition</h3>
          </div>
        </div>

        <div className="language-list">
          {languageData.map((language) => (
            <div className="language-row" key={language.name}>
              <span>{language.name}</span>
              <strong>{language.value}%</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Analytics
