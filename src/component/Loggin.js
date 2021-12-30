import React, { useState, useEffect } from 'react'
import UserAPI from '../api/user';
import Footer from '../Pages/Footer';
import Googlead from '../Pages/Googlead';
import Header from '../Pages/Header';
import './tab.css'
import { useNavigate } from "react-router-dom";

const Loggin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [data, setData] = useState([]);
    const [apointdata, setApointdata] = useState([]);
    const [logoutBtn, setlogoutBtn] = useState(true)


    useEffect(() => {
        if (localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", true);
        }
    }, []);


    const showAppointment = async () => {
        UserAPI.showAppointment({}).then((response) => {
            setApointdata(response);
            });
    };

    const getContact = async () => {
        UserAPI.getContact({}).then((response) => {
                setData(response);
            });
    };

   

    const login = async () => {
        const response = await UserAPI.login({
            email: email,
            password: password,
        })
        // console.log(response);
        if (response.loggedIn) {
            localStorage.setItem("LoggedIn", true);
            localStorage.setItem("email", response.email);
            setErrorMessage(response.email);
            UserAPI.getContact({}).then((response) => {
                setData(response);
                setlogoutBtn(false);
            });
            UserAPI.showAppointment({}).then((response) => {
                setApointdata(response);
                });
            setErrorMessage(response.message);
            // Navigate("/");
        } else {
            setErrorMessage(response.message);
            alert("Wrong username/password");
        }
    };

    let Navigate = useNavigate()
    const logout = () => {
        setData([]);
        setApointdata([]);
        setlogoutBtn(true);
        setEmail([]);
        setPassword([]);
        setErrorMessage("");
        Navigate("/loginn");
    }


    return (
        <>
            <Header/>

            <div className="page-section">
                <div className="container">
                    <h1 className="text-center wow fadeInUp">Login</h1>
                    <form className="contact-form mt-5">
                        <div className="row mb-3">
                            <div className="col-12 py-2 wow fadeInRight">
                                <label htmlFor="emailAddress">Email</label>
                                <input type="text" id="emailAddress" className="form-control" value={email} placeholder="Email address.." onChange={(event) => { setEmail(event.target.value); }} />
                            </div>
                            <div className="col-12 py-2 wow fadeInUp">
                                <label >Password</label>
                                <input type="text" id="subject" className="form-control" value={password} placeholder="Enter password.." onChange={(event) => { setPassword(event.target.value); }} />
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary wow zoomIn" onClick={login}>Login</button>
                        <button type="button" className="btn btn-primary wow zoomIn ml-5" disabled={logoutBtn} onClick={logout}>Logout</button>
                        <h1 style={{ color: "red" }}>{errorMessage}</h1>
                    </form>
                </div>
            </div>

            <button className="btn btn-primary wow zoomIn ml-5" onClick={getContact}> Show Contact </button>
            <table id="Table">
                <tbody>
                    <tr>
                        <th style={{width : "30px"}}> Id </th>
                        <th style={{width : "100px"}}> Name </th>
                        <th style={{width : "200px"}}> Email </th>
                        <th style={{width : "80px"}}> Subject</th>
                        <th> Message</th>
                    </tr>
                    {
                        data.map((value, key) => {
                            return (

                                <tr key={key}>
                                    <td style={{textAlign : "center"}}>{value.id}</td>
                                    <td style={{paddingLeft : "10px"}}>{value.name}</td>
                                    <td style={{paddingLeft : "10px"}}>{value.email}</td>
                                    <td style={{paddingLeft : "10px"}}>{value.subject}</td>
                                    <td style={{paddingLeft : "10px", paddingRight : "10px"}}>{value.message}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
                
            <button className="btn btn-primary wow zoomIn ml-5" onClick={showAppointment}> Show Appointment </button>
            <table id="Table">
                <tbody>
                    <tr>
                        <th style={{width : "50px"}}> Id </th>
                        <th style={{width : "130px"}}> Name </th>
                        <th style={{width : "200px"}}> Email </th>
                        <th style={{width : "210px"}}> Date</th>
                        <th style={{width : "110px"}}> Disease</th>
                        <th style={{width : "130px"}}> Number</th>
                        <th style={{width : "auto"}}> Message</th>
                    </tr>
                    {
                        apointdata.map((value, key) => {
                            return (

                                <tr key={key}>
                                    <td style={{textAlign : "center"}}>{value.id}</td>
                                    <td style={{paddingLeft : "10px"}}>{value.name}</td>
                                    <td style={{paddingLeft : "10px"}}>{value.email}</td>
                                    <td style={{paddingLeft : "10px"}}>{value.date}</td>
                                    <td style={{paddingLeft : "10px"}}>{value.disease}</td>
                                    <td style={{paddingLeft : "10px"}}>{value.number}</td>
                                    <td style={{paddingLeft : "10px", paddingRight : "10px"}}>{value.message}</td>
                                    </tr>
                            );
                        })
                    }
                </tbody>
            </table>

            <Googlead/>
            <Footer/>
        </>
    );
}

export default Loggin;
