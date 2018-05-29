import React, {Component} from 'react';
import './Sign-in.css';
import confused from '../../images/images/kitty-confused.svg';

class Sign_in extends Component {
    render(){
   return (
       <div className="main">
            <div className="hero">
                <div className="container">
                    <div className="u-center">
                        <h1 className="hero-h1">Wanna play?</h1>
                        <p className="hero-description">You'll need a safe place to store all of your adorable CryptoKitties! The perfect place is in a secure wallet like MetaMask. This will also act as your login to the game (no extra password needed).</p>
                        <button>Install MetaMask</button>
                    </div>
                    <div className="faqgroup">
                            <h2 className="faqgroup-title">Getting Started</h2>
                        <div className="faqgroup-questions">
                            <div className="collapse" role="button" id="What-do-I-need-to-play-CryptoKitties">
                                <div className="collapse-header">
                                    <span>Installing MetaMask, your digital wallet</span>
                                </div>
                                <div className="collapse-header">
                                    <span>Why is MetaMask locked?</span>
                                </div>
                                <div className="collapse-header">
                                    <span>Reinstalling MetaMask</span>
                                </div>
                                <div className="collapse-header">
                                    <span>Getting Ether, your digital currency</span>
                                </div>
                                <div className="collapse-header">
                                    <span>How to send ETH to MetaMask</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ctafaq">
                        <img src={confused} alt="FAQs"/>
                        <h1 className="ctafaq-title">Still confused?</h1>
                        <button className="orangebutton">View full FAQ</button>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}
export default Sign_in;
