import React, { useState } from 'react'
import UserAPI from '../api/user';
import Footer from '../Pages/Footer';
import Googlead from '../Pages/Googlead';
import Header from '../Pages/Header';

const LgRg = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const register = async () => {
        const res = await UserAPI.register({
            name: name,
            email: email,
            password: password
        }).then((response) => {
            console.log(response);

        });
        alert('you are registered');
        console.log(res);
    };


    return (
        <>
            <Header/>


            <div className="page-section">
                <div className="container">
                    <h1 className="text-center wow fadeInUp">Staff Register</h1>
                    <form className="contact-form mt-5">
                        <div className="row mb-3">
                            <div className="col-12 py-2 wow fadeInLeft">
                                <label htmlFor="fullName">Name</label>
                                <input type="text" id="fullName" className="form-control" placeholder="Full name.." onChange={(event) => { setName(event.target.value) }} />
                            </div>
                            <div className="col-12 py-2 wow fadeInRight">
                                <label htmlFor="emailAddress">Email</label>
                                <input type="text" id="emailAddress" className="form-control" placeholder="Email address.." onChange={(event) => { setEmail(event.target.value) }} />
                            </div>
                            <div className="col-12 py-2 wow fadeInUp">
                                <label htmlFor="subject">Password</label>
                                <input type="text" id="subject" className="form-control" placeholder="Create password.." onChange={(event) => { setPassword(event.target.value) }} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary wow zoomIn" onClick={register} >Register</button>
                    </form>
                </div>
            </div>

            <hr />
            
            <Googlead/>
            <Footer/>
            
        </>
    )
}

export default LgRg;
