import React from "react";

import fire from '../config/fire';

//css
import '../css/home.css';

//Images
import pfp from '../images/blank_pfp.png';

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
                              {/* MENU BAR*/}
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
                          <div className="channel-container">
                            <h6 className="title-channel"> Channels 
                              <button>
                                <i class="fas fa-plus"></i>
                              </button>
                            </h6>
                            <div className="channel-btns row">
                              <button className="channel-btn">
                                <i class="fas fa-hashtag"></i> 
                                <a> general </a>
                              </button>
                            </div>
                            <div className="channel-btns row">
                              <button className="channel-btn">
                                <i class="fas fa-hashtag"></i> 
                                <a> random </a>
                              </button>
                            </div>
                          </div>
                          <div className="dm-container">
                            <h6 className="title-channel"> Direct Messages </h6>
                              <div className="user-dm-container">
                                <a className="dm-user">
                                  <i class="fas fa-circle"></i>
                                  deric
                                </a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-8 middle-container"> 
                        <div className="chan-header d-flex">
                          <h1> #</h1>
                          <h3> general </h3> 
                          <p> u can post any kind of dankmemes but no normie memes allowed though or you will be burned alive.</p>
                        </div>
                        <div className="message-container">
                          <div className="user-input">
                            <div className="profile-pic-container">
                              <img src={ pfp } className="user-profile-pic"/>
                            </div>
                            <div className="inner-userInput-content">
                              <a className="username-message"> Morgan Freeman </a>
                              <a className="mess-timestamp"> Today at 4:20am </a>
                              <p> dank memessssaksdmakmdad dsncdsknscskndsfds fs fsfsa fdsf saf afsa fadfjsa fajsf sjf sjv svsjv avljnalknca cads dlksfdsfs fsalfsad fsaflf saflsf dsafskf daf dsf dsf dsakf dsf asfasdjfnsfnsdsfdsf sdfdsfbcdv daskfsd fc</p>
                            </div>
                          </div>
                          <div className="user-input">
                            <div className="profile-pic-container">
                              <img src={ pfp } className="user-profile-pic"/>
                            </div>
                            <div className="inner-userInput-content">
                              <a className="username-message"> deric </a>
                              <a className="mess-timestamp"> Today at 4:20pm </a>
                              <p> dank sknalkn</p>
                            </div>
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