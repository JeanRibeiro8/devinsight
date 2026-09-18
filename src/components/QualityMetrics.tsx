interface QualityMetricsProps {
  testCoverage?: number
  issues?: number
  codeQuality?: string
  technicalDebt?: string
}

function QualityMetrics({
  testCoverage = 82,
  issues = 7,
  codeQuality = 'A',
  technicalDebt = 'Low',
}: QualityMetricsProps) {
  return (
    <section className="quality-card">
      <div className="card-header">
        <div>
          <span className="card-label">Code quality</span>
          <h3>Quality Metrics</h3>
        </div>
      </div>

      <div className="quality-grid">
        <div className="quality-item">
          <span>Test Coverage</span>
          <strong>{testCoverage}%</strong>
        </div>

        <div className="quality-item">
          <span>Code Quality</span>
          <strong>{codeQuality}</strong>
        </div>

        <div className="quality-item">
          <span>Open Issues</span>
          <strong>{issues}</strong>
        </div>

        <div className="quality-item">
          <span>Technical Debt</span>
          <strong>{technicalDebt}</strong>
        </div>
      </div>
    </section>
  )
}

export default QualityMetrics
