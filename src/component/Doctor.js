import React, { useState } from 'react';
import UserAPI from '../api/user';
import { API_URL } from '../api/config/URLs';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import Googlead from '../Pages/Googlead';
import OurDoctors from '../Pages/OurDoctors';

const Doctor = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [disease, setDisease] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

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

            <Header/>

            <div className="page-banner overlay-dark bg-image" style={{ backgroundImage: `url(${API_URL}/api/get-file?path=bg_image_1.jpg)`}}>
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

            <OurDoctors/>

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

            <Googlead/>
            
            <Footer/>
        </>
    )
}

export default Doctor
