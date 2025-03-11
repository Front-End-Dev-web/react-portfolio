import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../app.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSistrix

} from "@fortawesome/free-brands-svg-icons";
export default function Header(){
    return(
        <>
        
        

  
      <div>
        <div id="header" className>
          <nav className="navbar navbar-expand-lg navbar-light  py-4 w-100">
            <div className="container-fluid">
              <a className="navbar-brand" href="#" />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">HOME</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">FEATURES</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      BLOG 
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">ABOUT US</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="search-bar w-100 d-flex justify-content-center align-items-center">
          <div className="form-floating my-2 w-50">
            <input type="search" style={{width:'100%'}} className="form-control py-0" placeholder="search here..." />
            <span><FontAwesomeIcon icon={faSistrix} style={{fontSize:'20px'}}/></span>
          </div>
        </div>
      </div>
  
        
        
        </>
    )
}