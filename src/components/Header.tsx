function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <p>Engineering</p>
        <h1>DevInsight</h1>
      </div>

      <div className="header-actions">
        <button
          type="button"
          className="notification-button"
          aria-label="Notifications"
        >
          🔔
        </button>

        <div className="user-profile">
          <div className="avatar">JR</div>

          <div>
            <strong>Jean Ribeiro</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
