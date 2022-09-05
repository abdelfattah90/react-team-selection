import PageOfHome from './HomePage'
import TeamsPage from './TeamsPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path='/' element={<PageOfHome />}></Route>
          <Route path='/teams' element={<TeamsPage />}></Route>
        </Routes>
      </Router>
    </DataProvider>
  )
}

export default App
