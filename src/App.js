import Header from './components/Header';
import CategoriesPage from './components/Categories-Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobListPage from './components/JobListPage';
import CreateJobPage from './components/CreateJobPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<CategoriesPage />} />
          <Route path="/categories/:id/jobs" element={<JobListPage />} />
          <Route path="/create-job" element={<CreateJobPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/log-in" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
