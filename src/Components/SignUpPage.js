const SignUpPage = () => {
  return (
    <div className="create-job-page-container">
      <h1>Sign Up</h1>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">
            Phone Number
          </label>
          <input type="text" class="form-control" id="phone" />
        </div>
        <div class="mb-3">
          <label for="facebook" class="form-label">
            Facebook
          </label>
          <input type="text" class="form-control" id="facebook" />
          <div className="form-text" id="jobBudgetHelp">
            Your facebook id will be used so that you can be contacted via messaging.
          </div>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="text" class="form-control" id="password" />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">
            Confirm Password
          </label>
          <input type="text" class="form-control" id="password" />
        </div>

        <button type="submit" class="btn btn-primary">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
