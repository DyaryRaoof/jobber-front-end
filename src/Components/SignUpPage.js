import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUpUser } from '../api/users';

const SignUpPage = () => {
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassoword = e.target.confirmPassoword.value;
    const phone = e.target.phone.value;
    const facebook = e.target.facebook.value;

    if (!name || !email || !password || !confirmPassoword || !phone || !facebook) {
      setResponse({ data: 'You Need to fill in all fields' });
      return;
    } else if (e.target.password.value !== e.target.confirmPassoword.value) {
      setResponse({ data: "Passwords don't match" });
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmPassoword,
      phone: phone,
      facebook: facebook,
    };

    const response = await signUpUser(user);
    // localStorage.setItem('token', response.headers.authorization);
    setResponse(response);
    navigate('/log-in');
  };

  return (
    <div className="create-job-page-container">
      <h1>Sign Up</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
          <input type="password" class="form-control" id="password" />
        </div>

        <div class="mb-3">
          <label for="confirmPassoword" class="form-label">
            Confirm Password
          </label>
          <input type="password" class="form-control" id="confirmPassoword" />
        </div>

        <button type="submit" class="btn btn-primary">
          Create Account
        </button>
      </form>
      <div>
        Already have an account?{' '}
        <Link style={{ color: '#E7AB79' }} to="/log-in">
          Login
        </Link>
      </div>
      {response && <div className="alert alert-warning mt-3">{JSON.stringify(response.data)}</div>}
    </div>
  );
};

export default SignUpPage;
