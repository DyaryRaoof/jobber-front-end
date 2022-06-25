import './CreateJobPage.css';
import { useState } from 'react';
import { postJob } from '../api/jobs';
import { useNavigate } from 'react-router-dom';

const CreateJobPage = () => {
  const categories = JSON.parse(localStorage.getItem('categories'));
  const [selectedCategory, setSelectedCategory] = useState({});
  const [response, setResponse] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const job = {
      title: e.target.jobTitle.value,
      description: e.target.jobDescription.value,
      duration: e.target.jobDuration.value,
      budget: e.target.jobBudget.value,
      tags: e.target.jobTags.value,
      category_id: selectedCategory ? selectedCategory : categories[0].id,
      user_id: user.id,
    };
    const response = await postJob(job);
    if (response.status === 201) {
      setResponse({ data: 'Job Created' });
      navigate('/categories/' + selectedCategory + '/jobs');
    } else {
      setResponse(response.data);
    }
  };

  const handleSelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="create-job-page-container">
      <h1>Create Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="jobTitle" className="form-label">
            Job Title
          </label>
          <input type="text" className="form-control" id="jobTitle" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="jobDescription" className="form-label">
            Job Description
          </label>
          <textarea className="form-control" id="jobDescription" />
        </div>
        <div className="mb-3">
          <label for="jobDuration" className="form-label">
            Job Duration
          </label>
          <input type="text" className="form-control" id="jobDuration" />
        </div>
        <div className="mb-3">
          <label for="jobTags" className="form-label">
            Tags
          </label>
          <input type="text" className="form-control" id="jobTags" />
        </div>
        <div className="mb-3">
          <label for="jobBudget" className="form-label">
            Job Budget
          </label>
          <input type="text" className="form-control" id="jobBudget" />
          <div className="form-text" id="jobBudgetHelp">
            Please enter a numberic value with the curerncy like 100,000 IQD or 100 USD.
          </div>
        </div>
        <select className="d-block mb-4 p-2" value={selectedCategory} onChange={handleSelect}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {response && <div className="alert alert-warning mt-3">{JSON.stringify(response.data)}</div>}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateJobPage;
