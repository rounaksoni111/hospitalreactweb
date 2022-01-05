import React, { useEffect, useState } from 'react'
import UserAPI from '../api/user';
import Footer from '../Pages/Footer';
import Googlead from '../Pages/Googlead';
import Header from '../Pages/Header';

const LgRg = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [EmailErrors, setEmailErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const register = async (e) => {
        e.preventDefault();
        setEmailErrors(Emailvalidate(email));
        setIsSubmit(true);
        if (Object.keys(EmailErrors).length === 0 && isSubmit) {
            const res = await UserAPI.register({
                name: name,
                email: email,
                password: password
            }).then((response) => {
                console.log(response);
            });
            alert('you are registered!');
            console.log(res);
            setName("");
            setEmail("");
            setPassword("");
            setIsSubmit(false);
        }
    };

    useEffect(() => {
        console.log(EmailErrors);
        if (Object.keys(EmailErrors).length === 0 && isSubmit) {
            console.log(email);
        }
    }, [EmailErrors]);


    const Emailvalidate = (email) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!email) {
            errors.email = "Email is required!";
            // alert("Email is required!")
        } else if (!regex.test(email)) {
            errors.email = "This is not a valid email format!";
            // alert("This is not a valid email format!")
        }
        return errors;
    };

    return (
        <>
            <Header />
            <div className="page-section">
                <div className="container">
                    <h1 className="text-center wow fadeInUp">Staff Register</h1>
                    <form className="contact-form mt-5">
                        <div className="row mb-3">
                            <div className="col-12 py-2 wow fadeInLeft">
                                <label htmlFor="fullName">Name</label>
                                <input type="text" id="fullName" className="form-control" value={name} placeholder="Full name.." onChange={(event) => { setName(event.target.value) }} />
                            </div>
                            <div className="col-12 py-2 wow fadeInRight">
                                <label htmlFor="emailAddress">Email</label>
                                <input type="email" id="emailAddress" className="form-control" value={email} placeholder="Email address.." onChange={(event) => { setEmail(event.target.value) }} />
                            </div>
                            <p style={{ marginLeft: "20px", color: "red" }}>{EmailErrors.email}</p>
                            <div className="col-12 py-2 wow fadeInUp">
                                <label htmlFor="subject">Password</label>
                                <input type="text" id="subject" className="form-control" value={password} placeholder="Create password.." onChange={(event) => { setPassword(event.target.value) }} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary wow zoomIn" onClick={register} >Register</button>
                    </form>
                </div>
            </div>

            <hr />

            <Googlead />
            <Footer />

        </>
    )
}

export default LgRg;
