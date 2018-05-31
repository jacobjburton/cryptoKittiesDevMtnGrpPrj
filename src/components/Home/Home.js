import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import kitty01 from '../../images/images/home-page/landing-kitty01.svg';
import kitty02 from '../../images/images/home-page/landing-kitty02.svg';
import kitty03 from '../../images/images/home-page/landing-kitty03.svg';
import kitty06 from '../../images/images/home-page/landing-kitty06.svg';
import kitty07 from '../../images/images/home-page/landing-kitty07.svg';
import kitty08 from '../../images/images/home-page/landing-kitty08.svg';
import kitty11 from '../../images/images/home-page/landing-kitty11.svg';
import kitty12 from '../../images/images/home-page/landing-kitty12.svg';
import kitty13 from '../../images/images/home-page/landing-kitty13.svg';
import ethkitty from '../../images/images/home-page/kitty-eth.svg';
import kittylove1 from '../../images/images/home-page/kitty-love-1.svg';
import kittylove2 from '../../images/images/home-page/kitty-love-2.svg';
import kittylove3 from '../../images/images/home-page/kitty-love-3.svg';
import heart from '../../images/images/home-page/heartPinkLargest.svg';
import equals from '../../images/images/home-page/equals.svg';
import etherdiamond from '../../images/images/ether-diamond.gif';


 class Home extends Component {

     constructor(){
         super()
         this.state = {
             isConnected: false,
             showMenu: false,
             account: null
         }
    }
    componentDidMount()
   {
       if (window.web3 && window.web3.currentProvider.isMetaMask)
       {
           window.web3.eth.getAccounts((error, accounts) =>
           {
               this.setState({ isConnected: true, account: accounts[0] });
               console.log('connected!', this.state.isConnected);
               console.log(accounts[0]);
           })
       }
       else
       {
           console.log('MetaMask account not detected');
       }
   }
     render(){
    return (
        <div>
            <div className="landing">
                <div className="landing-description">
                    <h1 className="landingHeadline">Collectible.</h1>
                    <h1 className="landingHeadline">Breedable.</h1>
                    <h1 className="landingHeadline">Adorable.</h1>
                    <p className="words">Collect and breed digital cats.</p>
                    <Link to='/Sign-in'><button className="button1">Start Meow</button></Link>
                </div>
                <div className="landing-slots">
                    <div className="landing-pattern">
                        <img className="landing-kitty1" src={kitty01} alt="Kitty 01"/>
                        <img className="landing-kitty6" src={kitty06} alt="Kitty 06"/>
                        <img className="landing-kitty11" src={kitty11} alt="Kitty 11"/>
                        <img className="landing-kitty2" src={kitty02} alt="Kitty 02"/>
                        <img className="landing-kitty7" src={kitty07} alt="Kitty 07"/>
                        <img className="landing-kitty12" src={kitty12} alt="Kitty 12"/>
                        <img className="landing-kitty3" src={kitty03} alt="Kitty 03"/>
                        <img className="landing-kitty8" src={kitty08} alt="Kitty 08"/>
                        <img className="landing-kitty13" src={kitty13} alt="Kitty 13"/>
                    </div>
                </div>
            </div>
            <div className="explainer-bg">
                <div className="container">
                    <div className="explainer-what">
                        <div className="explainer-ethkitty">
                            <img className="ethkitty" src={ethkitty} alt='ethkitty'/>
                            <img className="ethdiamond" src={etherdiamond} alt='ethdiamond'/>
                        </div>
                        <div className="explainer-what-text">
                            <h2 className="explainer-headline">What is CryptoKitties?</h2>
                            <p className="explainer-description">CryptoKitties is a game centered around breedable, collectable, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-center">
                <div className="explainer-why">
                    <h2 className="explainer-headline2">What's the big deal?</h2>
                    <p className="explainer-description3">CryptoKitties is one of the world's first games to be built on blockchain technology - the same breakthrough that makes things like Bitcoin and Ethereum possible.  Bitcoin and ether are cryptocollectibles.  You can buy, sell, or trade your CryptoKitty like it was a traditional collectable, secure in the knowledge that blockchain will track ownership securely.</p>
                </div>
            </div>
            <div className="explainer-bg">
                <div className="container-breed">
                    <div className="explainer-breed">
                        <div className="explainer-breedkitty1"><img src={kittylove1} alt="explanation"/></div>
                        <div className="heart"><img className="heart-img" src={heart} alt="explanation"/></div>
                        <div className="explainer-breedkitty2"><img src={kittylove2} alt="explanation"/></div>
                        <div className="equals"><img className="equals-img" src={equals} alt="explanation"/></div>
                        <div className="explainer-breedkitty3"><img src={kittylove3} alt="explanation"/></div>
                    </div>
                </div>
            </div>
            <div className="container-bottom">
                <div className="explainer-cta">
                    <p className="explainer-description2">But, unlike traditional collectables, you can breed two CryptoKitties to create a brand-new, genetically unique offspring.</p>
                    <p className="explainer-description4">It results in something special-just like you!</p>
                    <Link to='/Sign-in'><button className="button1">Start Meow</button></Link>
                </div>
            </div>
        </div>
        )
    }   
} 
export default Home;