import React from 'react';

import { API_URL } from '../api/config/URLs';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import Googlead from '../Pages/Googlead';
import OurDoctors from '../Pages/OurDoctors';
import MakeAnAppointment from '../Pages/MakeAnAppointment';

const Doctor = () => {



    return (
        <>
            <div className="back-to-top"></div>

            <Header />

            <div className="page-banner overlay-dark bg-image" style={{ backgroundImage: `url(${API_URL}/api/get-file?path=bg_image_1.jpg)` }}>
                <div className="banner-section">
                    <div className="container text-center wow fadeInUp">
                        <nav aria-label="Breadcrumb">
                            <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Doctors</li>
                            </ol>
                        </nav>
                        <h1 className="font-weight-normal">Our Doctors</h1>
                    </div>
                </div>
            </div>

            <OurDoctors />
            <MakeAnAppointment />
            <Googlead />
            <Footer />
        </>
    )
}

export default Doctor
