import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserAPI from '../api/user'


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    let Navigate = useNavigate();


    const submit = async () => {

        const res = await UserAPI.submit({
            name: name,
            email: email,
            subject: subject,
            message: message
        }).then((response) => {
            console.log(response);
            alert('you are submited');
            Navigate("/");
        }); 
        console.log(res);
    };

    return (
        <div>
            <header>
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 text-sm">
                                <div className="site-info">
                                    <a href="/"><span className="mai-call text-primary"></span> +00 123 4455 6666</a>
                                    <span className="divider">|</span>
                                    <a href="/"><span className="mai-mail text-primary"></span> mail@example.com</a>
                                </div>
                            </div>
                            <div className="col-sm-4 text-right text-sm">
                                <div className="social-mini-button">
                                    <a href="/"><span className="mai-logo-facebook-f"></span></a>
                                    <a href="/"><span className="mai-logo-twitter"></span></a>
                                    <a href="/"><span className="mai-logo-dribbble"></span></a>
                                    <a href="/"><span className="mai-logo-instagram"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                    <div className="container">
                        <a className="navbar-brand" href="/"><span className="text-primary">One</span>-Health</a>

                        <form action="#">
                            <div className="input-group input-navbar">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="icon-addon1"><span className="mai-search"></span></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Enter keyword.." aria-label="Username" aria-describedby="icon-addon1" />
                            </div>
                        </form>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupport">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="aboutus">About Us </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="doctor">Doctors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="blog">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-primary ml-lg-3" href="lgrg"> Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-primary ml-lg-3" href="loginn">Login </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="page-banner overlay-dark bg-image" style={{ backgroundImage: `url("./assets/img/bg_image_1.jpg")` }} >
                <div className="banner-section">
                    <div className="container text-center wow fadeInUp">
                        <nav aria-label="Breadcrumb">
                            <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                        <h1 className="font-weight-normal">Contact</h1>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">
                    <h1 className="text-center wow fadeInUp">Get in Touch</h1>

                    <form className="contact-form mt-5">
                        <div className="row mb-3">
                            <div className="col-sm-6 py-2 wow fadeInLeft">
                                <label htmlFor="fullName">Name</label>
                                <input type="text" id="fullName" className="form-control" placeholder="Full name.." onChange={(event) => { setName(event.target.value) }} />
                            </div>
                            <div className="col-sm-6 py-2 wow fadeInRight">
                                <label htmlFor="emailAddress">Email</label>
                                <input type="text" id="emailAddress" className="form-control" placeholder="Email address.." onChange={(event) => { setEmail(event.target.value) }} />
                            </div>
                            <div className="col-12 py-2 wow fadeInUp">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" className="form-control" placeholder="Enter subject.." onChange={(event) => { setSubject(event.target.value) }} />
                            </div>
                            <div className="col-12 py-2 wow fadeInUp">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" className="form-control" rows="8" placeholder="Enter Message.." onChange={(event) => { setMessage(event.target.value) }}></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary wow zoomIn" onClick={submit}>Send Message</button>
                    </form>
                </div>
            </div>

            <div className="maps-container wow fadeInUp">
                <div id="google-maps"></div>
            </div>

            <div className="page-section banner-home bg-image" style={{ backgroundImage: `url("./assets/img/banner-pattern.svg")` }} >
                <div className="container py-5 py-lg-0">
                    <div className="row align-items-center">
                        <div className="col-lg-4 wow zoomIn">
                            <div className="img-banner d-none d-lg-block">
                                <img src="./assets/img/mobile_app.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 wow fadeInRight">
                            <h1 className="font-weight-normal mb-3">Get easy access of all features using One Health Application</h1>
                            <a href="/"><img src="./assets/img/google_play.svg" alt="" /></a>
                            <a href="/" className="ml-2"><img src="./assets/img/app_store.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="page-footer">
                <div className="container">
                    <div className="row px-md-3">
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>Company</h5>
                            <ul className="footer-menu">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Career</a></li>
                                <li><a href="/">Editorial Team</a></li>
                                <li><a href="/">Protection</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>More</h5>
                            <ul className="footer-menu">
                                <li><a href="/">Terms & Condition</a></li>
                                <li><a href="/">Privacy</a></li>
                                <li><a href="/">Advertise</a></li>
                                <li><a href="/">Join as Doctors</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>Our partner</h5>
                            <ul className="footer-menu">
                                <li><a href="/">One-Fitness</a></li>
                                <li><a href="/">One-Drugs</a></li>
                                <li><a href="/">One-Live</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>Contact</h5>
                            <p className="footer-link mt-2">351 Willow Street Franklin, MA 02038</p>
                            <a href="/" className="footer-link">701-573-7582</a>
                            <a href="/" className="footer-link">healthcare@temporary.net</a>

                            <h5 className="mt-3">Social Media</h5>
                            <div className="footer-sosmed mt-3">
                                <a href="/" target="/"><span className="mai-logo-facebook-f"></span></a>
                                <a href="/" target="/"><span className="mai-logo-twitter"></span></a>
                                <a href="/" target="/"><span className="mai-logo-google-plus-g"></span></a>
                                <a href="/" target="/"><span className="mai-logo-instagram"></span></a>
                                <a href="/" target="/"><span className="mai-logo-linkedin"></span></a>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <p id="copyright">Copyright &copy; 2022 <a href="https://macodeid.com/" target="/">MACode ID</a>. All right reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Contact
