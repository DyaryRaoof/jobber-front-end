import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg header">
      <a className="navbar-brand" href="#">
        JOBBER
      </a>
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
              Job List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              My Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
