import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../app.css";
import postImage1 from "../assets/post/img-post-1.jpg";
import postImage2 from "../assets/post/img-post-2.jpg";
import postImage3 from "../assets/post/img-post-3.jpg";
import postImage4 from "../assets/post/img-post-4.jpg";
import postImage5 from "../assets/post/img-post-5.jpg";

import latestPost from "../assets/latest-post/latest-posts-1.jpg";
import latestPost1 from "../assets/latest-post/latest-posts-2.jpg";
import latestPost3 from "../assets/latest-post/latest-posts-3.jpg";
import latestPost4 from "../assets/latest-post/latest-posts-4.jpg";
import aboutImg from "../assets/about-img/about-me.jpg";
import signupImg from "../assets/background-img/signing.png";
import pic from "../assets/350x300.png";
import React from "react";


{
  /*-------some Code---------*/
}

export default function Main() {
  return (
    <>

      <div>
        <section id="hero">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="carousel-text"
                  style={{ position: "absolute", top: 0 }}
                >
                  <h1>MAECENAS CONSECTETUR</h1>
                  <span>
                    Lorem<span id="color"> ipsum dolor</span>sit amet
                  </span>
                  <button>READ ME</button>
                </div>
                <img src={postImage1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <div
                  className="carousel-text"
                  style={{ position: "absolute", top: 0 }}
                >
                  <h1>AENEAN AC DIAM</h1>
                  <span>
                    VIVAMUS<span id="color"> TINCIDUNT</span>FERMENTUM
                  </span>
                  <button>TEXT BUTTON</button>
                </div>
                <img src={postImage2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <div
                  className="carousel-text"
                  style={{ position: "absolute", top: 0 }}
                >
                  <h1>AENEAN AC DIAM</h1>
                  <span>
                    VIVAMUS<span id="color"> TINCIDUNT</span>FERMENTUM
                  </span>
                  <button>TEXT BUTTON</button>
                </div>
                <img src={postImage3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <div
                  className="carousel-text"
                  style={{ position: "absolute", top: 0 }}
                >
                  <h1>AENEAN AC DIAM</h1>
                  <span>
                    VIVAMUS<span id="color"> TINCIDUNT</span>FERMENTUM
                  </span>
                  <button>TEXT BUTTON</button>
                </div>
                <img src={postImage4} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon "
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section id="blog-posts">
          <div className="row  my-3">
            <div className="col-12 col-lg-8 col-md-12  section-1">
              <div className="card my-card gy-2">
                <img src={postImage1} className="card-img-top" alt="..." />
                <div className="card-body mt-4 fist-text-body-section px-4">
                  <small className="card-text ">07 Jun 2016</small>
                  <h5 className="card-title">
                    <a href="#">MAECENAS CONSECTETUR</a>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim ad minim veniam. Nunc maximus arcu sit amet
                    accumsan imperdiet. Aliquam elementum efficitur ipsum nec
                    blandit. Pellentesque posuere vitae metus sed auctor. Nullam
                    accumsan fringilla ligula non pellentesque.{" "}
                  </p>
                </div>
                <div className="card-body second-text-body-section px-5">
                  <div id="text">
                    {" "}
                    <span>Post By AD-Theme</span>
                  </div>
                  <div id="link" className="d-flex">
                    <div className="cols">
                      {" "}
                      <a href="#" className="gap-2">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>{" "}
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="px-3">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="gap-2">
                        <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="px-3">
                        <FontAwesomeIcon icon={faGithubAlt} />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card my-card gy-2">
                <img src={postImage2} className="card-img-top" alt="..." />
                <div className="card-body mt-4 fist-text-body-section px-4">
                  <small className="card-text ">07 Jun 2016</small>
                  <h5 className="card-title">
                    <a href="#">MAECENAS CONSECTETUR</a>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim ad minim veniam. Nunc maximus arcu sit amet
                    accumsan imperdiet. Aliquam elementum efficitur ipsum nec
                    blandit. Pellentesque posuere vitae metus sed auctor. Nullam
                    accumsan fringilla ligula non pellentesque.{" "}
                  </p>
                </div>
                <div className="card-body second-text-body-section px-5">
                  <div id="text">
                    {" "}
                    <span>Post By AD-Theme</span>
                  </div>
                  <div id="link" className="d-flex">
                    <div className="cols">
                      {" "}
                      <a href="#" className="gap-2">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>{" "}
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="px-3">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="gap-2">
                        <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="px-3">
                        <FontAwesomeIcon icon={faGithubAlt} />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card my-card gy-2">
                <img src={postImage3} className="card-img-top" alt="..." />
                <div className="card-body mt-4 fist-text-body-section px-4">
                  <small className="card-text ">07 Jun 2016</small>
                  <h5 className="card-title">
                    <a href="#">MAECENAS CONSECTETUR</a>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim ad minim veniam. Nunc maximus arcu sit amet
                    accumsan imperdiet. Aliquam elementum efficitur ipsum nec
                    blandit. Pellentesque posuere vitae metus sed auctor. Nullam
                    accumsan fringilla ligula non pellentesque.{" "}
                  </p>
                </div>
                <div className="card-body second-text-body-section px-5">
                  <div id="text">
                    {" "}
                    <span>Post By AD-Theme</span>
                  </div>
                  <div id="link" className="d-flex">
                    <div className="cols">
                      {" "}
                      <a href="#" className="gap-2">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>{" "}
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="px-3">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="gap-2">
                        <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="px-3">
                        <FontAwesomeIcon icon={faGithubAlt} />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card my-card gy-2">
                <img src={postImage4} className="card-img-top" alt="..." />
                <div className="card-body mt-4 fist-text-body-section px-4">
                  <small className="card-text ">07 Jun 2016</small>
                  <h5 className="card-title">
                    <a href="#">MAECENAS CONSECTETUR</a>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim ad minim veniam. Nunc maximus arcu sit amet
                    accumsan imperdiet. Aliquam elementum efficitur ipsum nec
                    blandit. Pellentesque posuere vitae metus sed auctor. Nullam
                    accumsan fringilla ligula non pellentesque.{" "}
                  </p>
                </div>
                <div className="card-body second-text-body-section px-5">
                  <div id="text">
                    {" "}
                    <span>Post By AD-Theme</span>
                  </div>
                  <div id="link" className="d-flex">
                    <div className="cols">
                      {" "}
                      <a href="#" className="gap-2">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>{" "}
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="px-3">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="gap-2">
                        <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    </div>
                    <div className="cols">
                      {" "}
                      <a href="#" className="px-3">
                        <FontAwesomeIcon icon={faGithubAlt} />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div id="buttons-group">
                <button className="btn">&lt;</button>
                <button className="btn">&gt;</button>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-12 col-sm-12 mt-3 section-2">
              <div className="card about-card">
                <img src={aboutImg} className="card-img-top" alt="..." />
                <div className="card-body text-center col-11 mx-auto">
                  <p className="card-text">
                    Lorem ipsum dolor sit consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <h5 className="card-title">
                    <img src={signupImg} alt="" />
                  </h5>
                </div>
              </div>
              <div id="posts" className="mt-5">
                <div id="post-heading">LATEST POSTS</div>
                <div className="card-groups">
                  <div
                    className="card mb-3 cards"
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={latestPost}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">MAECENAS CONSECTETUR</h5>
                          <p className="card-text">07 JUNE 2016</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card mb-3 cards"
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={latestPost1}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">MAURIS SIT AMET</h5>
                          <p className="card-text">06 JUNE 2016</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card mb-3 cards"
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={latestPost3}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">NAM EGET PULVINAR ANTE</h5>
                          <p className="card-text">05 JUNE 2016</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card mb-3 cards"
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={latestPost4}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            VIVAMUS ET TURPIS LACINIA
                          </h5>
                          <p className="card-text">04 JUNE 2016</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tags" className="mt-5">
                <div id="tags-heading">FOLLOW US</div>
                <div id="tags-links" className="mt-2">
                  <div className="containers">
                    <div className="rows d-flex">
                      <div className="cols">
                        {" "}
                        <a href="#" className="gap-2">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>{" "}
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="px-3">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="gap-2">
                          <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="px-3">
                          <FontAwesomeIcon icon={faGithubAlt} />
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="btn-tags" className="mt-5">
                <div id="btn-tags-heading">TAGS</div>
                <div id="btn-tags-links" className="mt-2">
                  <div className="containers">
                    <div className="rows">
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          AUDIO
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          TRAVEL
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          FOOD
                        </a>{" "}
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          EVENT
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          WORDPRESS
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          VIDEO
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          DESIGN
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          SPORT
                        </a>{" "}
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          BLOG
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          POST
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          IMG
                        </a>
                      </div>
                      <div className="cols">
                        {" "}
                        <a href="#" className="btn ">
                          MASONRY
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="banner">
                <div className="banner mt-4">
                  <div className="card " style={{ width: "100%" }}>
                    <img
                      src={pic}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div id="newsletter" className="mt-5">
                <div id="newsletter-heading">Newsletter</div>
                <div id="newsletter-cont" className="mt-2">
                  <div className="containers">
                    <div id="form-text">
                      <div id="inner-text">
                        <h5>DO NOT MISS OUR NEWS</h5>
                        <span>
                          Sign up and receive the latest news of our company
                        </span>
                      </div>
                    </div>
                    <form>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control text-center"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Your email address..."
                        />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        SEND
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
