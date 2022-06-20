import Header from './Components/Header';
import CategoriesPage from './Components/Categories-Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobListPage from './Components/JobListPage';
import CreateJobPage from './Components/CreateJobPage';
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';

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
