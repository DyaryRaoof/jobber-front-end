import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { logOutUser } from '../api/users';

const Header = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();
  const selectEntryMethod = async () => {
    if (isLoggedIn === 'true') {
      const response = await logOutUser();
      if (response.status === 200) {
        localStorage.setItem('isLoggedIn', false);
        localStorage.removeItem('token');
        navigate('/log-in');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      console.log(response);
    } else {
      navigate('/sign-up');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg header">
      <Link className="navbar-brand" to={'/'}>
        JOBBER
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              My Jobs
            </a>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={selectEntryMethod}>
              {isLoggedIn === 'true' ? 'Log Out' : 'Sign Up'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
