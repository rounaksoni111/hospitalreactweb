import React from 'react';
import { API_URL } from '../api/config/URLs';

const OurDoctorHome = () => {
    return (
        <>
            <div className="page-section">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp">Our Doctors</h1>
                    <div className="owl-carousel wow fadeInUp" id="doctorSlideshow">
                        <div className="item">
                            <div className="card-doctor">
                                <div className="header">
                                    {/* <img src="./assets/img/doctors/doctor_1.jpg" alt="" /> */}
                                    <img src={`${API_URL}/api/get-file?path=doctorImages/doctor_1.jpg`} alt="" />
                                    <div className="meta">
                                        <a href="/"><span className="mai-call"></span></a>
                                        <a href="/"><span className="mai-logo-whatsapp"></span></a>
                                    </div>
                                </div>
                                <div className="body">
                                    <p className="text-xl mb-0">Dr. Stein Albert</p>
                                    <span className="text-sm text-grey">Cardiology</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card-doctor">
                                <div className="header">
                                    {/* <img src="./assets/img/doctors/doctor_2.jpg" alt="" /> */}
                                    <img src={`${API_URL}/api/get-file?path=doctorImages/doctor_2.jpg`} alt="" />
                                    <div className="meta">
                                        <a href="/"><span className="mai-call"></span></a>
                                        <a href="/"><span className="mai-logo-whatsapp"></span></a>
                                    </div>
                                </div>
                                <div className="body">
                                    <p className="text-xl mb-0">Dr. Alexa Melvin</p>
                                    <span className="text-sm text-grey">Dental</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card-doctor">
                                <div className="header">
                                    {/* <img src="./assets/img/doctors/doctor_4.jpg" alt="" /> */}
                                    <img src={`${API_URL}/api/get-file?path=doctorImages/doctor_3.jpg`} alt="" />
                                    <div className="meta">
                                        <a href="/"><span className="mai-call"></span></a>
                                        <a href="/"><span className="mai-logo-whatsapp"></span></a>
                                    </div>
                                </div>
                                <div className="body">
                                    <p className="text-xl mb-0">Dr. Rebecca Steffany</p>
                                    <span className="text-sm text-grey">General Health</span>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="card-doctor">
                                <div className="header">
                                    {/* <img src="./assets/img/doctors/doctor_1.jpg" alt="" /> */}
                                    <img src={`${API_URL}/api/get-file?path=doctorImages/doctor_1.jpg`} alt="" />
                                    <div className="meta">
                                        <a href="/"><span className="mai-call"></span></a>
                                        <a href="/"><span className="mai-logo-whatsapp"></span></a>
                                    </div>
                                </div>
                                <div className="body">
                                    <p className="text-xl mb-0">Dr. Stein Albert</p>
                                    <span className="text-sm text-grey">Cardiology</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card-doctor">
                                <div className="header">
                                    {/* <img src="./assets/img/doctors/doctor_2.jpg" alt="" /> */}
                                    <img src={`${API_URL}/api/get-file?path=doctorImages/doctor_2.jpg`} alt="" />
                                    <div className="meta">
                                        <a href="/"><span className="mai-call"></span></a>
                                        <a href="/"><span className="mai-logo-whatsapp"></span></a>
                                    </div>
                                </div>
                                <div className="body">
                                    <p className="text-xl mb-0">Dr. Alexa Melvin</p>
                                    <span className="text-sm text-grey">Dental</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurDoctorHome
