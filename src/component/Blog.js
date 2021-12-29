import React from 'react'

const Blog = () => {
    return (
        <>

            <div className="back-to-top"></div>

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

                        <div class="collapse navbar-collapse" id="navbarSupport">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item ">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="aboutus">About Us </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="doctor">Doctors</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="blog">News</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="btn btn-primary ml-lg-3" href="lgrg"> Register</a>
                                </li>
                                <li class="nav-item">
                                    <a class="btn btn-primary ml-lg-3" href="loginn">Login </a>
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
                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                            </ol>
                        </nav>
                        <h1 className="font-weight-normal">News</h1>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-sm-6 py-3">
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

                                <div className="col-sm-6 py-3">
                                    <div className="card-blog">
                                        <div className="header">
                                            <div className="post-category">
                                                <a href="/">Dental</a>
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
                                                        <img src="./assets/img/person/person_4.jpg" alt="" />
                                                    </div>
                                                    <span>Wizdom Jack</span>
                                                </div>
                                                <span className="mai-time"></span> 2 weeks ago
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 py-3">
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
                                            <h5 className="post-title"><a href="blogdetails">Shifting goalposts: Research in the time of the coronavirus</a></h5>
                                            <div className="site-info">
                                                <div className="avatar mr-2">
                                                    <div className="avatar-img">
                                                        <img src="./assets/img/person/person_3.jpg" alt="" />
                                                    </div>
                                                    <span>Adams Collier</span>
                                                </div>
                                                <span className="mai-time"></span> 4 weeks ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-3">
                                    <div className="card-blog">
                                        <div className="header">
                                            <div className="post-category">
                                                <a href="/">Neurology</a>
                                            </div>
                                            <a href="blogdetails" className="post-thumb">
                                                <img src="./assets/img/blog/blog_4.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="body">
                                            <h5 className="post-title"><a href="blogdetails">What are the nonmedical factors most closely linked to death risk?</a></h5>
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
                                <div className="col-sm-6 py-3">
                                    <div className="card-blog">
                                        <div className="header">
                                            <div className="post-category">
                                                <a href="/">Cardiology</a>
                                            </div>
                                            <a href="blogdetails" className="post-thumb">
                                                <img src="./assets/img/blog/blog_5.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="body">
                                            <h5 className="post-title"><a href="blogdetails">Do gut bacteria contribute to ethnic health disparities</a></h5>
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
                                <div className="col-sm-6 py-3">
                                    <div className="card-blog">
                                        <div className="header">
                                            <div className="post-category">
                                                <a href="/">Patient Services</a>
                                            </div>
                                            <a href="blogdetails" className="post-thumb">
                                                <img src="./assets/img/blog/blog_1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="body">
                                            <h5 className="post-title"><a href="blogdetails">The Recovery Room: News beyond the pandemic</a></h5>
                                            <div className="site-info">
                                                <div className="avatar mr-2">
                                                    <div className="avatar-img">
                                                        <img src="./assets/img/person/person_1.jpg" alt="" />
                                                    </div>
                                                    <span>Roger Adams</span>
                                                </div>
                                                <span className="mai-time"></span> 1 month ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-3">
                                    <div className="card-blog">
                                        <div className="header">
                                            <div className="post-category">
                                                <a href="/">General Health</a>
                                            </div>
                                            <a href="blogdetails" className="post-thumb">
                                                <img src="./assets/img/blog/blog_2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="body">
                                            <h5 className="post-title"><a href="blogdetails">Racism in mental healthcare: An invisible barrier</a></h5>
                                            <div className="site-info">
                                                <div className="avatar mr-2">
                                                    <div className="avatar-img">
                                                        <img src="./assets/img/person/person_1.jpg" alt="" />
                                                    </div>
                                                    <span>Roger Adams</span>
                                                </div>
                                                <span className="mai-time"></span> 2 months ago
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 py-3">
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
                                            <h5 className="post-title"><a href="blogdetails">COVID-19 live updates: Total number of cases passes 11.6 million</a></h5>
                                            <div className="site-info">
                                                <div className="avatar mr-2">
                                                    <div className="avatar-img">
                                                        <img src="./assets/img/person/person_2.jpg" alt="" />
                                                    </div>
                                                    <span>Diego Simmons</span>
                                                </div>
                                                <span className="mai-time"></span> 4 weeks ago
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 my-5">
                                    <nav aria-label="Page Navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="/" tabindex="-1" aria-disabled="true">Previous</a>
                                            </li>
                                            <li className="page-item active" aria-current="page">
                                                <a className="page-link" href="/">1 <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/">2</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="/">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-block">
                                    <h3 className="sidebar-title">Search</h3>
                                    <form action="/" className="search-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                                            <button type="submit" className="btn"><span className="icon mai-search"></span></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-block">
                                    <h3 className="sidebar-title">Categories</h3>
                                    <ul className="categories">
                                        <li><a href="/">Food <span>12</span></a></li>
                                        <li><a href="/">Dish <span>22</span></a></li>
                                        <li><a href="/">Desserts <span>37</span></a></li>
                                        <li><a href="/">Drinks <span>42</span></a></li>
                                        <li><a href="/">Ocassion <span>14</span></a></li>
                                    </ul>
                                </div>

                                <div className="sidebar-block">
                                    <h3 className="sidebar-title">Recent Blog</h3>
                                    <div className="blog-item">
                                        <a className="post-thumb" href="/">
                                            <img src="./assets/img/blog/blog_1.jpg" alt="" />
                                        </a>
                                        <div className="content">
                                            <h5 className="post-title"><a href="/">Even the all-powerful Pointing has no control</a></h5>
                                            <div className="meta">
                                                <a href="/"><span className="mai-calendar"></span> July 12, 2018</a>
                                                <a href="/"><span className="mai-person"></span> Admin</a>
                                                <a href="/"><span className="mai-chatbubbles"></span> 19</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <a className="post-thumb" href="/">
                                            <img src="./assets/img/blog/blog_2.jpg" alt="" />
                                        </a>
                                        <div className="content">
                                            <h5 className="post-title"><a href="/">Even the all-powerful Pointing has no control</a></h5>
                                            <div className="meta">
                                                <a href="/"><span className="mai-calendar"></span> July 12, 2018</a>
                                                <a href="/"><span className="mai-person"></span> Admin</a>
                                                <a href="/"><span className="mai-chatbubbles"></span> 19</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <a className="post-thumb" href="/">
                                            <img src="./assets/img/blog/blog_3.jpg" alt="" />
                                        </a>
                                        <div className="content">
                                            <h5 className="post-title"><a href="/">Even the all-powerful Pointing has no control</a></h5>
                                            <div className="meta">
                                                <a href="/"><span className="mai-calendar"></span> July 12, 2018</a>
                                                <a href="/"><span className="mai-person"></span> Admin</a>
                                                <a href="/"><span className="mai-chatbubbles"></span> 19</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-block">
                                    <h3 className="sidebar-title">Tag Cloud</h3>
                                    <div className="tagcloud">
                                        <a href="/" className="tag-cloud-link">dish</a>
                                        <a href="/" className="tag-cloud-link">menu</a>
                                        <a href="/" className="tag-cloud-link">food</a>
                                        <a href="/" className="tag-cloud-link">sweet</a>
                                        <a href="/" className="tag-cloud-link">tasty</a>
                                        <a href="/" className="tag-cloud-link">delicious</a>
                                        <a href="/" className="tag-cloud-link">desserts</a>
                                        <a href="/" className="tag-cloud-link">drinks</a>
                                    </div>
                                </div>

                                <div className="sidebar-block">
                                    <h3 className="sidebar-title">Paragraph</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section banner-home bg-image" style={{ backgroundImage: `url("./assets/img/banner-pattern.svg")` }}>
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
        </>
    )
}

export default Blog
