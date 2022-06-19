import Header from './Components/Header';
import CategoriesPage from './Components/Categories-Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './Components/JobList';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<CategoriesPage />} />
          <Route path="/categories/:id/jobs" element={<JobList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
