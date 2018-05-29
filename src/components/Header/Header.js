import React, { Component } from 'react';
import logo from '../../images/icons/logo.svg';
import gif from '../../images/icons/logo-hover.gif';
import { Link } from 'react-router-dom';
//import Web3 from 'web3';
 
class Header extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            isConnected: false,
            hover: false
        };
        //this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }

    componentDidMount()
    {
        if (window.web3 && window.web3.currentProvider.isMetaMask)
        {
            window.web3.eth.getAccounts((error, accounts) =>
            {
                this.setState({ isConnected: true });
                console.log('connected!', this.state.isConnected);
            })
        }
        else
        {
            console.log('MetaMask account not detected');
        }
    }

    onMouseEnterHandler()
    {
        this.setState({ hover: true })
    }

    onMouseLeaveHandler()
    {
        this.setState({ hover: false })
    }

    render()
    {
        let logoDisplay = this.state.hover ? <img src={gif} alt='gif'/> : <img src={logo} alt="logo"/>

        return (
            <div>
                <div className='join'>
                    <button>Join our Discord server</button> and purr with the CryptoKitties community.
                </div>
                <div className='navBar'>
                    <div className='logoButton'>
                        <Link to='/'
                            // onMouseEnter={this.onMouseEnterHandler}
                            // onMouseLeave={this.onMouseLeaveHandler}
                        >
                            {logoDisplay} CryptoKitties
                        </Link>
                    </div>
                    <div className='middleLinks'>
                        {/* <Link>My Kitties/Start Meow</Link>
                        <Link>Marketplace</Link>
                        <Link>Activity</Link> */}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header;