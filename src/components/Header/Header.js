import React, { Component } from 'react';
import logo from '../../images/icons/logo.svg';
import gif from '../../images/icons/logo-hover.gif';
import { Link } from 'react-router-dom';
import carrot from '../../images/icons/carrot.svg';
import cross from '../../images/icons/cross.svg';
import './Header.css';
//import Web3 from 'web3';
 
class Header extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            isConnected: false,
            hover: false,
            showMenu: false,
            account: null
        };
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

    onMouseEnterHandler = () =>
    {
        this.setState({ hover: true })
    }

    onMouseLeaveHandler = () =>
    {
        this.setState({ hover: false })
    }

    showMenu = () =>
    {
        this.state.showMenu ?
            this.setState({ showMenu: false })
            :
            this.setState({ showMenu: true });
    }

    render()
    {
        let midMenuDisplay = this.state.account ?
            <div>
                <Link to='/profile'>My Kitties</Link>
                <Link to='/marketplace'>Marketplace</Link>
                <Link to='/activity'>Activity</Link>
            </div>
            :
            <div>
                <Link to='/sign-in'>Start Meow</Link>
                <Link to='/marketplace'>Marketplace</Link>
            </div>;

        let discordLinkDisplay = this.state.account ?
            <div className='join'>
                <span role='img'>🍅💕🍇</span>
                <Link to='/profile'>Check out our Kitty couples</Link> 
                and start breeding right meow. <span role='img'>🍇💕🍇</span>
            </div>
            :
            <div className='join'>
                <button>Join our Discord server</button> and purr with the CryptoKitties community.
            </div>

        let logoDisplay = this.state.hover ? 
            <img src={gif} alt='gif'/>
            : 
            <img src={logo} alt="logo"/>;

        let menuShow = this.state.showMenu ?
            <div>
                <Link to='/about'>About</Link>
                <Link to='/newsletter'>Newsletter</Link>
                <Link to='/careers'>Careers</Link>
            </div>
            : null;
        let menuIcon = this.state.showMenu ?
            <img src={cross} alt="cross"/>  
            :
            <img src={carrot} alt="carrot"/>
            
        
        return (
            <div className="header">
                {discordLinkDisplay}
                <div className='navBar'>
                    <div className='logoButton'>
                        <Link to='/'
                            onMouseEnter={this.onMouseEnterHandler}
                            onMouseLeave={this.onMouseLeaveHandler}
                        >
                            <div>
                                {logoDisplay} CryptoKitties
                            </div>
                        </Link>
                        <span className="greenCircle"></span>
                        <div>Network Good</div>
                    </div>
                    <div className='middleLinks'>
                        {midMenuDisplay}
                    </div>
                    <div>
                        <Link to='/faq'>FAQs</Link>
                        <a 
                            href="https://medium.com/cryptokitties" 
                            target='_blank'  
                            rel="noopener noreferrer"
                        >
                            Blog
                        </a>
                        <button onClick={this.showMenu} >More
                            {menuIcon}
                            {menuShow}
                        </button>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header;