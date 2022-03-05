import './navbar.module.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="https://s3.ap-south-1.amazonaws.com/zo-static/website/img/zostel-logo.png" alt="zostel logo"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                HOSTELS
              </a>
              <ul className="dropdown-menu dropdown-menu-dark opacity-75" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Coorg
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Manali
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Pune
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Mumbai
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Delhi
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Aurangabad
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Ranchi
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Kerela
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Jammu
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ZOSTEL HOMES
              </a>
              <ul className="dropdown-menu dropdown-menu-dark opacity-75" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    MADIKERI, COORG
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    TABO, SPITI
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    LAIDA, JIBHI
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    SHURU, MANALI
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    THEOG, SHIMLA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    CHEOG, SHIMLA
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="/">
                ZO WORLD
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="/">
                LONGSTAYS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                BOOK NOW
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                CAREERS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                FRANCHISE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                BLOGS
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
