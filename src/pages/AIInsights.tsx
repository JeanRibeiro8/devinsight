import { insights } from '../data/insights'

function AIInsights() {
  return (
    <main className="content">
      <div className="page-header">
        <div>
          <span className="section-label">Intelligence</span>
          <h2>AI Insights</h2>
        </div>

        <span className="repository-count">
          {insights.length} recommendations
        </span>
      </div>

      <section className="insights-card">
        <div className="card-header">
          <div>
            <span className="card-label">Actionable analysis</span>
            <h3>Recommendations for your engineering workflow</h3>
          </div>
        </div>

        <div className="insights-list">
          {insights.map((insight) => (
            <article className="insight-item" key={insight.id}>
              <div className="insight-icon">✦</div>

              <div className="insight-content">
                <div className="insight-meta">
                  <span>{insight.type} · {insight.severity}</span>
                </div>

                <strong>{insight.title}</strong>
                <p>{insight.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AIInsights
