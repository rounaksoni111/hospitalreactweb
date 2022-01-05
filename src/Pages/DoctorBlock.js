import React from 'react';

export default function DoctorDetails(props) {
    return (
        <>
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
                <div className="card-doctor">
                    <div className="header">
                        {/* <img src="./assets/img/doctors/doctor_1.jpg" alt="" /> */}
                        <img src={props.imgsrc} alt="" />
                        <div className="meta">
                            <a href="/"><span className="mai-call"></span></a>
                            <a href="/"><span className="mai-logo-whatsapp"></span></a>
                        </div>
                    </div>
                    <div className="body">
                        <p className="text-xl mb-0">{props.name}</p>
                        <span className="text-sm text-grey">{props.specialist}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
