import React from 'react';
import { API_URL } from '../api/config/URLs';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import Googlead from '../Pages/Googlead';
import ChatHealthPharma from '../Pages/ChatHealthPharma';
import OurDoctors from '../Pages/OurDoctors';

const Aboutus = () => {
    return (
        <>

            <div className="back-to-top"></div>

            <Header/>

            <div className="page-banner overlay-dark bg-image" style={{ backgroundImage: `url(${API_URL}/api/get-file?path=bg_image_1.jpg)` }}>
            {/* <div className="page-banner overlay-dark bg-image" style={{ backgroundImage: `url("./assets/img/bg_image_1.jpg")` }}> */}
                <div className="banner-section">
                    <div className="container text-center wow fadeInUp">
                        <nav aria-label="Breadcrumb">
                            <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">About</li>
                            </ol>
                        </nav>
                        <h1 className="font-weight-normal">About Us</h1>
                    </div>
                </div>
            </div>

            <ChatHealthPharma/>

            <div className="page-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 wow fadeInUp">
                            <h1 className="text-center mb-3">Welcome to Your Health Center</h1>
                            <div className="text-lg">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur.</p>
                                <p>Expedita iusto sunt beatae esse id nihil voluptates magni, excepturi distinctio impedit illo, incidunt iure facilis atque, inventore reprehenderit quidem aliquid recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod ad sequi atque accusamus deleniti placeat dignissimos illum nulla voluptatibus vel optio, molestiae dolore velit iste maxime, nobis odio molestias!</p>
                            </div>
                        </div>
                        <OurDoctors/>
                    </div>
                </div>
            </div>

            <Googlead/>

            <Footer/>
        </>
    )
}

export default Aboutus
