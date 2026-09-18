import { NavLink } from 'react-router-dom'

function Sidebar() {
  const navItems = [
    { to: '/', label: 'Overview', end: true },
    { to: '/repositories', label: 'Repositories' },
    { to: '/pull-requests', label: 'Pull Requests' },
    { to: '/code-reviews', label: 'Code Reviews' },
    { to: '/ai-insights', label: 'AI Insights' },
    { to: '/team', label: 'Team' },
    { to: '/analytics', label: 'Analytics' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-mark">D</span>
        <span>DevInsight</span>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive ? 'nav-item active' : 'nav-item'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-settings">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
        >
          Settings
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar
