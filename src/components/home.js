import React from "react";
import '../css/home.css';

const home =  () => {
    return(
        <div className="wrapper row justify-content-left">
            <div className="server-container">
                <div className="client-servers"></div>
                <div className="client-local-btn"></div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-md-2 left-container">
                        <div className="server-title-header">
                            <a className="server-title"> ACM CSULA </a>
                        </div>
                    </div>
                    <div className="col-md-10 right-container"> ur m0m gey </div>
                </div>
            </div>
        </div>
    );
};

export default home;