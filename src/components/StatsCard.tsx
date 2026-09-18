interface StatsCardProps {
  label: string
  value: string | number
  change: string
}

function StatsCard({ label, value, change }: StatsCardProps) {
  return (
    <article className="stats-card">
      <span className="stats-label">{label}</span>
      <strong className="stats-value">{value}</strong>
      <span className="stats-change">{change}</span>
    </article>
  )
}

export default StatsCard
