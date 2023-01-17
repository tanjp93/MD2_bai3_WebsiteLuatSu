// import logo from './logo.svg';
// import './App.css';
import Carousel from "./component/Carousel";
import Header from "./component/Header";
import About from "./component/About";
import Services from "./component/Services";
import Appointment from "./component/Appointment";
import Features from "./component/Features";
import Action from "./component/Action";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <>
  <div className="container-fluid">
<Header/>
  </div>
  {/* Header End */}
  {/* Carousel Start */}
  <div className="container-fluid p-0 mb-5 pb-5">
<Carousel/>
  </div>
  {/* Carousel End */}
  {/* About Start */}
  <div className="container-fluid py-5">
<About/>
  </div>
  {/* About End */}
  {/* Services Start */}
  <div className="container-fluid py-5">
<Services/>
  </div>
  {/* Services End */}
  {/* Appointment Start */}
  <div className="container-fluid py-5">
<Appointment/>
  </div>
  {/* Appointment End */}
  {/* Features Start */}
  <div className="container-fluid py-5">
<Features/>
  </div>
  {/* Features End */}
  {/* Action Start */}
  <div className="container-fluid py-5">
<Action/>
  </div>
  {/* Action End */}
  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center pb-2">
        <h6 className="text-uppercase">Our Attorneys</h6>
        <h1 className="mb-4">Meet Our Attorneys</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="bg-primary rounded" style={{ height: 200 }} />
          <div
            className="owl-carousel team-carousel position-relative"
            style={{ marginTop: "-97px", padding: "0 30px" }}
          >
            <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
              <h5 className="mb-2 px-4">Attorney Name</h5>
              <p className="mb-3 px-4">Practice Area</p>
              <div className="team-img position-relative">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
              <h5 className="mb-2 px-4">Attorney Name</h5>
              <p className="mb-3 px-4">Practice Area</p>
              <div className="team-img position-relative">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
              <h5 className="mb-2 px-4">Attorney Name</h5>
              <p className="mb-3 px-4">Practice Area</p>
              <div className="team-img position-relative">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
              <h5 className="mb-2 px-4">Attorney Name</h5>
              <p className="mb-3 px-4">Practice Area</p>
              <div className="team-img position-relative">
                <img className="img-fluid" src="img/team-4.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
              <h5 className="mb-2 px-4">Attorney Name</h5>
              <p className="mb-3 px-4">Practice Area</p>
              <div className="team-img position-relative">
                <img className="img-fluid" src="img/team-5.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Testimonial Start */}
  <div className="container-fluid py-5">
<Testimonial/>
  </div>
  {/* Testimonial End */}
  {/* Footer Start */}
<Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary px-3 back-to-top">
    <i className="fa fa-angle-double-up" />
  </a>
  {/* JavaScript Libraries */}
</>

    </div>
  );
}
export default App;
