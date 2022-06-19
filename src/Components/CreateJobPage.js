import './CreateJobPage.css';

const CreateJobPage = () => {
  return (
    <div className="create-job-page-container">
      <h1>Create Job</h1>
      <form>
        <div class="mb-3">
          <label for="jobTitle" class="form-label">
            Job Title
          </label>
          <input type="email" class="form-control" id="jobTitle" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="jobDescription" class="form-label">
            Job Description
          </label>
          <textarea class="form-control" id="jobDescription" />
        </div>
        <div class="mb-3">
          <label for="jobDuration" class="form-label">
            Job Duration
          </label>
          <input type="text" class="form-control" id="jobDuration" />
        </div>
        <div class="mb-3">
          <label for="jobBudget" class="form-label">
            Job Budget
          </label>
          <input type="password" class="form-control" id="jobBudget" />
          <div className="form-text" id="jobBudgetHelp">
            Please enter a numberic value with the curerncy like 100,000 IQD or 100 USD.
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateJobPage;
