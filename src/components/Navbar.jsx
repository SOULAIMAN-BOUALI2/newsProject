import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid navbar-brand">
    <a className="navbar-brand badge bg-light text-dark fs-4" href="http://127.0.0.1:5173/" >morrocanNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="http://127.0.0.1:5173/">Accueil</a>
      
        <li class="nav-item">
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Catégories
          </a>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Politique</a></li>
            <li><a class="dropdown-item" href="#">sport</a></li>
            <li><a class="dropdown-item" href="#">Économie</a></li>
            <li><a class="dropdown-item" href="#">Technologie</a></li>
            <li><a class="dropdown-item" href="#">Science</a></li>

            
          </ul>
        </li>
        

        <a className="nav-link" href="#">Features</a>
      </div>
     
    </div>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success text-light bg-primary" type="submit">Search</button>
      </form>
  </div>
</nav>
    </div>
  )
}
