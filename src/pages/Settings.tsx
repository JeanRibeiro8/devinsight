import { useState } from 'react'

function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [reviewAlerts, setReviewAlerts] = useState(true)
  const [weeklySummary, setWeeklySummary] = useState(false)

  return (
    <main className="content">
      <div className="page-header">
        <div>
          <span className="section-label">Workspace</span>
          <h2>Settings</h2>
        </div>
      </div>

      <section className="settings-card">
        <div className="card-header">
          <div>
            <span className="card-label">Preferences</span>
            <h3>Notification settings</h3>
          </div>
        </div>

        <div className="setting-row">
          <div>
            <strong>Email notifications</strong>
            <p>Receive important workspace notifications by email.</p>
          </div>

          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={(event) =>
              setEmailNotifications(event.target.checked)
            }
          />
        </div>

        <div className="setting-row">
          <div>
            <strong>Review alerts</strong>
            <p>Notify you when a pull request requires review.</p>
          </div>

          <input
            type="checkbox"
            checked={reviewAlerts}
            onChange={(event) =>
              setReviewAlerts(event.target.checked)
            }
          />
        </div>

        <div className="setting-row">
          <div>
            <strong>Weekly summary</strong>
            <p>Receive a weekly engineering activity summary.</p>
          </div>

          <input
            type="checkbox"
            checked={weeklySummary}
            onChange={(event) =>
              setWeeklySummary(event.target.checked)
            }
          />
        </div>
      </section>
    </main>
  )
}

export default Settings
