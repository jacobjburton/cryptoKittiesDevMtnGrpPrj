import React from 'react';
import './Footer.css';
import paw from '../../images/icons/paw.svg';

function Footer()
{
    return (
        <div className="Footer">
            <div className="Container Container--lg">
                <div className="Footer-primary">
                    <div className="Footer-nav">
                        <ul className="Footer-nav-items">
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--mykitties" href="/profile" aria-current="false">My Kitties</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--activity" href="/activity" aria-current="false">Activity</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--marketplace" href="/marketplace" aria-current="false">Marketplace</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--faq" href="/faq" aria-current="False">FAQs</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--help" href="/help">Help & Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer-nav">
                        <ul className="Footer-nav-items">
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--about" href="/about" aria-current="false">About</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--press" href="/press" aria-current="false">Press</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--technicaldetails" href="/technical-details" aria-current="false">Tech details</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--whitepapurr" href="https://drive.google.com/open?id=1soo-eAaJHzhw_XhFGMJp3VNcQoM43byS" aria-current="false" target="_blank" rel="noopener noreferrer">White Pa-purr</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--updates" href="https://updates.cryptokitties.co" target="_blank" rel="noopener noreferrer" aria-current="false">Latest updates</a>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer-nav">
                        <ul className="Footer-nav-items">
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/CryptoKitties/">Facebook</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--reddit" target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/CryptoKitties/">Reddit</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/cryptokitties">Twitter</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--youtube" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UClUgQBJcxAmHjOQgV4QgVXg">YouTube</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cryptokitties/">Instagram</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--discord" target="_blank" rel="noopener noreferrer" href="https://discord.gg/3GvT66U">Discord</a>
                            </li>
                            <li className="Footer-nav-item">
                                <a className="Footer-nav-link Footer-nav-link--email" target="_blank" rel="noopener noreferrer" href="/contact">Email us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer-primary-az">
                        <div>
                            <span>Pick of the litter at 
                                <a href="https://www.axiomzen.com/" target="_blank" rel="noopener noreferrer"> Axiom Zen</a>
                                <img src={paw} alt="Purrr"/>
                            </span>
                        </div>
                        <div class="Footer-career">
                            <span>View our 
                                <a href="/careers" aria-current="false"> job openings</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="Footer-secondary">
                    <a className="Footer-secondary-link" aria-current="false" href="/terms-of-use">Terms of Use</a>
                    <a className="Footer-secondary-link" aria-current="false" href="/privacy-policy">Privacy policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;