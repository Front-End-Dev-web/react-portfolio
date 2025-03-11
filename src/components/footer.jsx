import '../app.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import gImg1 from './assets/gallery/img-gallery-1.jpg'
import gImg2 from './assets/gallery/img-gallery-2.jpg'
import gImg3 from './assets/gallery/img-gallery-3.jpg'
import gImg4 from './assets/gallery/img-gallery-4.jpg'
import gImg5 from './assets/gallery/img-gallery-5.jpg'
import gImg6 from './assets/gallery/img-gallery-6.jpg'

export default function Footer(){
   return(<>
   <footer>
            <div className="footer container">
              <div className="footer-heading">
                <h2>INSTAGRAM</h2>
              </div>
              <div className="footer-content">
                <div className="row row-cols-4 row-cols-md-5 row-cols-lg-6 g-4">
                  <div className="col">
                    <div className="card">
                      <img src={gImg1} className="card-img-top img-fluid" alt="..." />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <img src={gImg2} className="card-img-top img-fluid" alt="..." />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <img src={gImg3} className="card-img-top img-fluid" alt="..." />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <img src={gImg4} className="card-img-top img-fluid" alt="..." />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <img src={gImg5} className="card-img-top img-fluid" alt="..." />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <img src={gImg6} className="card-img-top img-fluid" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                  <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted">© 2024 All Rights Reserved</span>
                  </div>
                  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#" style={{textDecoration: 'none'}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                        </svg>Top</a></li>
                  </ul>
                </footer>
                </div>
                </div>
                </footer>
                </>
   ) ;
};