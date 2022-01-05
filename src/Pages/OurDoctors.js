import React from 'react';
import { API_URL } from '../api/config/URLs';
import DoctorDetails from './DoctorBlock';

const OurDoctors = (props) => {
    return (
        <>
            <div className="page-section ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row">
                                <DoctorDetails
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_1.jpg`}
                                    name="Dr. Stein Albert"
                                    specialist='Cardiology'
                                />

                                <DoctorDetails
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_2.jpg`}
                                    name="Dr. Alexa Melvin"
                                    specialist='Dental'
                                />

                                <DoctorDetails
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_3.jpg`}
                                    name="Dr. Rebecca Steffany"
                                    specialist='General Health'
                                />

                                <DoctorDetails
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_1.jpg`}
                                    name="Dr. Stein Albert"
                                    specialist='Cardiology'
                                />

                                <DoctorDetails
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_2.jpg`}
                                    name="Dr. Alexa Melvin"
                                    specialist='Dental'
                                />

                                <DoctorDetails
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_3.jpg`}
                                    name="Dr. Rebecca Steffany"
                                    specialist='General Health'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurDoctors
