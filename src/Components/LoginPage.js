import { useNavigate, Link } from 'react-router-dom';
import { logInUser } from '../api/users';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await logInUser({ email, password });
    if (response.status === 200) {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('token', response.headers.authorization);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      navigate('/');
      console.log();
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
    }
  };

  return (
    <div className="create-job-page-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
      <div>
        Don't have an account?{' '}
        <Link style={{ color: '#E7AB79' }} to="/sign-up">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
