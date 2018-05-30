import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            isConnected: false
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

    render()
    {
        let discordLinkDisplay = this.state.account ?
            <div className='join'>
                <span role='img'>🍅💕🍇</span>
                <Link to='/profile'>Check out our Kitty couples </Link> 
                and start breeding right meow. <span role='img'>🍇💕🍇</span>
            </div>
            :
            <div className='join'>
                <a 
                    href="https://discordapp.com/invite/cryptokitties" 
                    target='_blank' 
                    rel='noopener noreferrer'
                >Join our Discord server</a> and purr with the CryptoKitties community.
            </div>

        return (
            <div className="banner">
                {discordLinkDisplay}
            </div>
        )
    }
}

export default Banner;