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
                      <button> U </button>
                      <button> C </button>
                      <button> K </button>
                      <button> S </button>
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
                      <div className="col-md-10 right-container"> 
                        <div className="chan-header d-flex">
                          <h1> #</h1>
                          <h3> general </h3> 
                          <p> u can post any kind of dankmemes but no normie memes allowed though or you will be burned alive.</p>
                        </div>
                        <div className="message-container">
                          <div className="user-input">
                            <img src="#" className="user-profile-pic"/>
                            <a className="username-message"> deric </a>
                            <a className="mess-timestamp"> Today at 4:20am </a>
                            <p> urm0m is fattt</p>
                          </div>
                        </div>
                        <div className="bottom-container">
                          <div className="sender-container">
                            <input className="message-field" placeholder="Message #general" type="text"/>
                          </div>
                        </div>
                      
                      </div>
                  </div>
              </div>
          </div>
        </div>

      );
  }
};

export default home;