import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserAPI from '../api/user'
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import Googlead from '../Pages/Googlead';
import { API_URL } from '../api/config/URLs';


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
            <Header/>

            <div className="page-banner overlay-dark bg-image" style={{ backgroundImage: `url(${API_URL}/api/get-file?path=bg_image_1.jpg)`}} >
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

            {/* <div className="maps-container wow fadeInUp">
                <div id="google-maps"></div>
            </div> */}

            <Googlead/>

            <Footer/>
        </div>
    )
}

export default Contact
