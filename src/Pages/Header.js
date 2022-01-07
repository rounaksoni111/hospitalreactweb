import React from 'react';

const Header = (props) => {
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

                        <form action="/">
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
                                    <a className={`nav-link ${props.status}`} href="/">Home</a>
                                </li>
                                <li className="nav-item ">
                                    <a className={`nav-link ${props.status2}`} href="aboutus">About Us </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${props.status3}`} href="doctor">Doctors</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${props.status4}`} href="blog">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${props.status5}`} href="contact">Contact</a>
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
        </div>
    )
}

export default Header
