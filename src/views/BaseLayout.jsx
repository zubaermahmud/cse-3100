import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <span>| </span>
          <a href="\">Donate</a><span> | </span>
		      <a href="\AboutUs">About US</a><span> | </span>
			    <a href="\ContactUs">Contact US</a>
          </div>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light">
        <p>© Copyright 2024 </p>
      </footer>
    </div>
  );
};

export default BaseLayout;
