import Header from './Components/Header';
import CategoriesPage from './Components/Categories-Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobListPage from './Components/JobListPage';
import CreateJobPage from './Components/CreateJobPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<CategoriesPage />} />
          <Route path="/categories/:id/jobs" element={<JobListPage />} />
          <Route path="/create-job" element={<CreateJobPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
