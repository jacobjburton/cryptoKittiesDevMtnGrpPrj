import React, {Component} from 'react';
import profile15 from '../../images/images/profile-15.png';
import './Profile.css';

class Profile extends Component {
    render(){
   return (
        <main className="main">
            <div className="profilePage">
                <div className="profileHeader">
                    <div className="container-lg">
                        <div className="profileHeader-container">
                            <img className="profileHeader-image" src={profile15} alt="Profile pic"/>
                            <div className="profileHeader-info">
                                <h1 className="profileHeader-title">Gnomo</h1>
                            </div>
                            <div className="profileHeader-wallet">
                                <span className="copyAddress" role="tooltip">
                                    <button className="profileButton">Copy Address</button>
                                </span>
                                <span className="separator"></span>
                                <div className="reportPage">
                                    <button className="profileButton">Report User</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profilePage-tabs">

                </div>
                <div className="profileMain">

                </div>
            </div>
        </main>
        )
    }
}
export default Profile;