import React from 'react';
import { API_URL } from '../api/config/URLs';


const Googlead = () => {
    return (
        <div>
            {/* <div className="page-section banner-home bg-image" style={{ backgroundImage: `url("./assets/img/banner-pattern.svg")` }}> */}
            <div className="page-section banner-home bg-image" style={{ backgroundImage: `url(${API_URL}/api/get-file?path=banner-pattern.svg)` }}>
                <div className="container py-5 py-lg-0">
                    <div className="row align-items-center">
                        <div className="col-lg-4 wow zoomIn">
                            <div className="img-banner d-none d-lg-block">
                                {/* <img src="./assets/img/mobile_app.png" alt="not avai" /> */}
                                <img src={`${API_URL}/api/get-file?path=mobile_app.png`} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 wow fadeInRight">
                            <h1 className="font-weight-normal mb-3">Get easy access of all features using One Health Application</h1>
                            <a href="/">
                                {/* <img src="./assets/img/google_play.svg" alt="" /> */}
                                <img src={`${API_URL}/api/get-file?path=google_play.svg`} alt="" />
                            </a>
                            <a href="/" className="ml-2">
                                {/* <img src="./assets/img/app_store.svg" alt="not avai" /> */}
                                <img src={`${API_URL}/api/get-file?path=app_store.svg`} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Googlead
