import React from 'react';
import { API_URL } from '../api/config/URLs';
import DoctorBlock from './DoctorBlock';

const OurDoctors = () => {
    return (
        <>
            <div className="page-section ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row">
                                <DoctorBlock
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_1.jpg`}
                                    name="Dr. Stein Albert"
                                    specialist='Cardiology'
                                />

                                <DoctorBlock
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_2.jpg`}
                                    name="Dr. Alexa Melvin"
                                    specialist='Dental'
                                />

                                <DoctorBlock
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_3.jpg`}
                                    name="Dr. Rebecca Steffany"
                                    specialist='General Health'
                                />

                                <DoctorBlock
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_1.jpg`}
                                    name="Dr. Stein Albert"
                                    specialist='Cardiology'
                                />

                                <DoctorBlock
                                    imgsrc={`${API_URL}/api/get-file?path=doctorImages/doctor_2.jpg`}
                                    name="Dr. Alexa Melvin"
                                    specialist='Dental'
                                />

                                <DoctorBlock
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
