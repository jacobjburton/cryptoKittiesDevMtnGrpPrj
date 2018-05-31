import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import Accordion from 'react-responsive-accordion';
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
                        <button className="button1">Install MetaMask</button>
                    </div>
                    <div className="faqgroup">
                            <h2 className="faqgroup-title">Getting Started</h2>
                        <div className="faqgroup-questions">
                            {/* <Accordion> */}
                                <div data-trigger="What do I need to play CryptoKitties">
                                    <p>Here's what you need to get started:</p>
                                    <ul><li>A computer or laptop running the desktop version of Chrome or Firefox</li>
                                        <li>MetaMask, a digital wallet used specifically with web apps</li>
                                        <li>Ether, a form of digital payment that powers CryptoKitties</li>
                                    </ul>
                                </div>
                                <div data-trigger="Installing MetaMask, your digital wallet">
                                    <p></p>
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
                            {/* </Accordion> */}
                        </div>
                    </div>
                    <div className="ctafaq">
                        <img src={confused} alt="FAQs"/>
                        <h1 className="ctafaq-title">Still confused?</h1>
                        <Link to='/faq'><button className="orangebutton">View full FAQ</button></Link>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}
export default Sign_in;
