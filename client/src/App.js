import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './pages/About'
import AddReviewPage from './pages/AddReviewPage'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/addreview" element={<AddReviewPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
