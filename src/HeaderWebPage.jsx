export function HeaderWebPage() {
  return (
    

    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-navbar container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbar-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <a className="navbar-brand" href="#">
            <img src="/code-slash.svg" alt="logo pagina web" height={30} />
            
          </a>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Acerca de mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="false" href="#">
                Testimonios 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="false" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>



  );
}
