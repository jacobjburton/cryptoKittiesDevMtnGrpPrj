import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import carrot from '../../images/icons/carrot.svg';
import cross from '../../images/icons/cross.svg';
import './Header.css';
//import { connect } from 'react-redux';
 
class Header extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            isConnected: false,
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
                this.setState({ isConnected: true, account: accounts[0] })
                console.log('connected!', this.state.isConnected);
                console.log(accounts[0]);
            })
        }
        else
        {
            console.log('MetaMask account not detected');
        }
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
                <div className='navBar'>
                    <div className='logoButton'>
                        <Link to='/'>
                            <div className='logoWord'>
                                CryptoKitties
                            </div>
                        </Link>
                        <div className='networkStatus'>
                            <div className="greenCircle"></div>
                            <div>Network Good</div>
                        </div>
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

// function mapStateToProps(state)
// {
//     return {
//         isConnected: state.isConnected,
//         account: state.account

//     }
// }

export default Header;
//export default connect(mapStateToProps)(Header);