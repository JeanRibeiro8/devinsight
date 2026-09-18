import { insights } from '../data/insights'

function AIInsights() {
  return (
    <section className="insights-card">
      <div className="card-header">
        <div>
          <span className="card-label">AI-powered analysis</span>
          <h3>AI Insights</h3>
        </div>

        <span className="insights-badge">{insights.length} insights</span>
      </div>

      <div className="insights-list">
        {insights.map((insight) => (
          <article className="insight-item" key={insight.id}>
            <div className="insight-icon">✦</div>

            <div className="insight-content">
              <div className="insight-meta">
                <span>{insight.type}</span>
              </div>

              <strong>{insight.title}</strong>
              <p>{insight.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AIInsights
