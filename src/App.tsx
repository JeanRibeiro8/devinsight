import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Overview from './pages/Overview'
import Repositories from './pages/Repositories'
import RepositoryDetails from './pages/RepositoryDetails'
import PullRequests from './pages/PullRequests'
import CodeReviews from './pages/CodeReviews'
import AIInsights from './pages/AIInsights'
import Team from './pages/Team'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="main">
          <Header />

          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/repositories/:id" element={<RepositoryDetails />} />
            <Route path="/pull-requests" element={<PullRequests />} />
            <Route path="/code-reviews" element={<CodeReviews />} />
            <Route path="/ai-insights" element={<AIInsights />} />
            <Route path="/team" element={<Team />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
