const LoginPage = () => {
  return (
    <div className="create-job-page-container">
      <h1>Login</h1>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input type="text" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
