import React, { useState, useEffect } from 'react';
import UserAPI from '../api/user';
import { API_URL } from '../api/config/URLs';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import Googlead from '../Pages/Googlead';
import ChatHealthPharma from '../Pages/ChatHealthPharma';
import OurDoctorHome from '../Pages/OurDoctorHome';


const Home = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [disease, setDisease] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("loggedIn", true);
  }, []);

  const appointment = async () => {
    const res = await UserAPI.appointment({
      name: name,
      email: email,
      date: date,
      disease: disease,
      number: number,
      message: message
    }).then((response) => {
      console.log(response);
      alert('appointment received');
    });
    console.log(res);
  };

  return (
    <>


      <div className="back-to-top"></div>


      <Header />

      <div className="page-hero bg-image overlay-dark" style={{ backgroundImage: `url(${API_URL}/api/get-file?path=bg_image_1.jpg)` }}>
        <div className="hero-section">
          <div className="container text-center wow zoomIn">
            <span className="subhead">Let's make your life happier</span>
            <h1 className="display-4">Healthy Living</h1>
            <a href="/" className="btn btn-primary">Let's Consult</a>
          </div>
        </div>
      </div>


      <div className="bg-light">
        <ChatHealthPharma />

        <div className="page-section pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 py-3 wow fadeInUp">
                <h1>Welcome to Your Health <br /> Center</h1>
                <p className="text-grey mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!</p>
                <a href="aboutus" className="btn btn-primary">Learn More</a>
              </div>
              <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                <div className="img-place custom-img-1">
                  {/* <img src="./assets/img/bg-doctor.png" alt="" /> */}
                  <img src={`${API_URL}/api/get-file?path=bg-doctor.png`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurDoctorHome/>

      <div className="page-section bg-light">
        <div className="container">
          <h1 className="text-center wow fadeInUp">Latest News</h1>
          <div className="row mt-5">
            <div className="col-lg-4 py-2 wow zoomIn">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="/">Covid19</a>
                  </div>
                  <a href="blogdetails" className="post-thumb">
                    <img src="./assets/img/blog/blog_1.jpg" alt="" />
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blogdetails">List of Countries without Coronavirus case</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="./assets/img/person/person_1.jpg" alt="" />
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 1 week ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 py-2 wow zoomIn">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="/">Covid19</a>
                  </div>
                  <a href="blogdetails" className="post-thumb">
                    <img src="./assets/img/blog/blog_2.jpg" alt="" />
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blogdetails">Recovery Room: News beyond the pandemic</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="./assets/img/person/person_1.jpg" alt="" />
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 4 weeks ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 py-2 wow zoomIn">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="/">Covid19</a>
                  </div>
                  <a href="blogdetails" className="post-thumb">
                    <img src="./assets/img/blog/blog_3.jpg" alt="" />
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blogdetails">What is the impact of eating too much sugar?</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="./assets/img/person/person_2.jpg" alt="" />
                      </div>
                      <span>Diego Simmons</span>
                    </div>
                    <span className="mai-time"></span> 2 months ago
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 text-center mt-4 wow zoomIn">
              <a href="blog" className="btn btn-primary">Read More</a>
            </div>

          </div>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          <h1 className="text-center wow fadeInUp">Make an Appointment</h1>
          <form className="main-form">
            <div className="row mt-5 ">
              <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
                <input type="text" className="form-control" placeholder="Full name" onChange={(event) => { setName(event.target.value) }} />
              </div>
              <div className="col-12 col-sm-6 py-2 wow fadeInRight">
                <input type="text" className="form-control" placeholder="Email address.." onChange={(event) => { setEmail(event.target.value) }} />
              </div>
              <div className="col-12 col-sm-6 py-2 wow fadeInLeft" data-wow-delay="300ms">
                <input type="date" className="form-control" onChange={(event) => { setDate(event.target.value) }} />
              </div>
              <div className="col-12 col-sm-6 py-2 wow fadeInRight" data-wow-delay="300ms" onChange={(event) => { setDisease(event.target.value) }}>
                <select name="departement" id="departement" className="custom-select" onChange={(event) => { setDisease(event.target.value) }}>
                  <option value="general">General Health</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dental">Dental</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopaedics">Orthopaedics</option>
                </select>
              </div>
              <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                <input type="text" className="form-control" placeholder="Number.." onChange={(event) => { setNumber(event.target.value) }} />
              </div>
              <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                <textarea name="message" id="message" className="form-control" rows="6" placeholder="Enter message.." onChange={(event) => { setMessage(event.target.value) }}></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3 wow zoomIn" onClick={appointment}>Submit Request</button>
          </form>
        </div>
      </div>

      <Googlead />

      <Footer />
    </>
  );
}

export default Home
