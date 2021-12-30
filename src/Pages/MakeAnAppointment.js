import React, { useState } from 'react'
import UserAPI from '../api/user';




const MakeAnAppointment = () => {
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
        <div>
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
            </div> <div className="page-section">
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
        </div>
    )
}

export default MakeAnAppointment
