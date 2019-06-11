import React from "react";
import '../css/home.css';
import fire from '../config/fire';

class home extends React.Component {

logout() {
    fire.auth().signOut();
  }
  
  render(){
  return(
        <div className="content">
                      <div className="wrapper row justify-content-left">
              <div className="server-container">
                  <div className="home-local">
                      <button>
                        <i class="fas fa-home"></i>
                      </button>
                  </div>
                  <div className="client-servers ">
                      <button> ACM </button>
                      <button> S </button>
                      <button> D </button>
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
                              <div className="username-stats">
                                <i class="fas fa-circle"></i>
                                <a> morgan freeman </a>
                              </div>
                              <div className="user-menu">
                                <button className="user-stats"> <i class="fas fa-circle"></i> Set a Status.. </button>
                                <button className="account-set"> <i class="fas fa-user"></i>Profile & Account </button>
                                <div className="divider"></div>
                                <button className="server-set"> <i class="fas fa-cog"></i>Server Settings</button>
                                <button className="create-chan"><i class="fas fa-plus"></i>Create Channel</button>
                                <button className="notifi"><i class="far fa-bell"></i>Notifications Settings</button>
                                <div className="divider"></div>
                                <button className="logout-btn" onClick = {this.logout}><i class="fas fa-sign-out-alt"></i>Logout</button>
                              </div>
                          </div>
                          
                      </div>
                      <div className="col-md-8 right-container"> ur m0m gey </div>
                  </div>
              </div>
          </div>
        </div>

      );
  }
};

export default home;