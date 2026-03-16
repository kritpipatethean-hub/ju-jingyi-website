import { Navigate, Route, Routes } from 'react-router-dom'
import { actorDirectory } from './data/actorDirectory'
import ActorDraftPage from './pages/ActorDraftPage'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {actorDirectory.map((actor) => {
        const Page = actor.page

        return (
          <Route
            key={actor.slug}
            path={actor.route}
            element={Page ? <Page /> : <ActorDraftPage actor={actor} />}
          />
        )
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
