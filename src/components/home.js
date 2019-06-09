import React from "react";
import '../css/home.css';
import fire from '../config/fire';

class home extends React.Component {

logout() {
    fire.auth().signOut();
  }
  
  render(){
  return(
          <div className="wrapper row justify-content-left">
              <div className="server-container">
                  <div className="home-local">
                      <button>
                        <i class="fas fa-home"></i>
                      </button>
                  </div>
                  <div className="client-servers ">
                      <button> ACM </button>
                      <button> SWAG </button>
                      <button> DERIC </button>
                      <button> IS </button>
                      <button> c00l </button>
                  </div>
                  <div className="client-local">
                      <button>
                          <i class="fas fa-plus"></i>
                      </button>
                  </div>
              </div>
              <div className="col">
                  <div className="row">
                      <div className="col-md-2 left-container">
                          <div className="server-title-header">
                              <a className="server-title"> ACM @CSULA
                                <i class="fas fa-sort-down"></i>
                              </a>
                              <button onClick = {this.logout}>Logout</button>
                          </div>
                      </div>
                      <div className="col-md-9 right-container"> ur m0m gey </div>
                  </div>
              </div>
          </div>
      );
  }
};

export default home;