import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import carrot from '../../images/icons/carrot.svg';
import cross from '../../images/icons/cross.svg';
import './Header.css';
// import dots from '../../images/icons/group.svg';
// import iconCancel from '../../images/icons/icon-cancel.svg';
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
            showToolTip: false,
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
        this.setState({ showMenu: !this.state.showMenu })
    }

    render()
    {
        let midMenuDisplay = this.state.account ?
            <div className="Header-group">
                <a className="Header-navigation-item" aria-current="false" href='/profile'>My Kitties</a>
                <a className="Header-navigation-item" aria-current="false" href='/marketplace'>Marketplace</a>
                <a className="Header-navigation-item" aria-current="false" href='https://etherscan.io/tx/0xa02b9b74fff73fe44d46833e0f0f630d81e2e0ebf0578105fbf1c3d87f5ca136' target="_blank" rel="noopener noreferrer">Activity</a>
            </div>
            :
            <div className="Header-group">
                <a className="Header-navigation-item" aria-current="false" href='/sign-in'>Start Meow</a>
                <a className="Header-navigation-item" aria-current="false" href='/marketplace'>Marketplace</a>
            </div>;

        let menuDisplay = this.state.showMenu ?
            <div className="Dropdown Dropdown--isOpen" role="button" onClick={this.showMenu}>
                <div className="Dropdown-toggle Dropdown-toggle--close">
                    <div className="Header-navigation-item">
                        More
                        <img src={cross} alt="less" className="Header-more-toggleIcon"/>
                    </div>
                </div>
                <div className="Dropdown-content u-slide--up">
                    <a href="/about" className="Header-navigation-item Header-navigation-dropdown-item">About</a>
                    <a href="/newsletter" className="Header-navigation-item Header-navigation-dropdown-item">Newsletter</a>
                    <a href="/careers" className="Header-navigation-item Header-navigation-dropdown-item">Careers</a>
                </div>
            </div>
            :
            <div className="Dropdown Dropdown--isOpen" role="button" onClick={this.showMenu}>
                <div className="Dropdown-toggle Dropdown-toggle--open">
                    <div className="Header-navigation-item">
                        More
                        <img src={carrot} alt="more" className="Header-more-toggleIcon"/>
                    </div>
                </div>
            </div>;

        // let tooltipShow = this.state.showToolTip ?
        //     <div className="TooltipNew-content TooltipNew-content--bottom">
        //         <p>Looks like the network is functioning at optimal cat-pacity!</p>
        //     </div>
        //     :
        //     null;
            
        
        return (
            <div className="Header-container">
                <div className='Header'>
                    <div className='Header-group Header-group-home'>
                        <a className="Header-home" href='/' aria-current="false">
                            <div className='Header-logoWrapper'>
                                <div className="Header-logo"></div>
                            </div>
                            <h1 className="Header-wordmark">CryptoKitties</h1>                            
                        </a>
                        <div className='Header-networkStatus'>
                            <div className="NetworkStatus NetworkStatus--1"
                                onMouseEnter={() => this.setState({ showToolTip: true })}
                                onMouseLeave={() => this.setState({ showToolTip: false })}
                            >
                                <div className="TooltipNew">
                                    <span className="TooltipNew-wrapper">
                                        <span className="NetworkStatus-message">
                                            <span className="NetworkStatus-badge"></span>
                                            <span className="NetworkStatus-status">Network Good</span>
                                        </span>
                                    </span>
                                    {/* {tooltipShow} */}
                                    {/* <div className="TooltipNew-content TooltipNew-content--bottom">
                                        <p>Looks like the network is functioning at optimal cat-pacity!</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {midMenuDisplay}

                    <div className="Header-group">
                        <div className="Header-secondaryNav-wide">
                            <a className="Header-navigation-item" href='/faq' aria-current="false">FAQs</a>
                            <a
                                className="Header-navigation-item" 
                                href="https://medium.com/cryptokitties" 
                                target='_blank'  
                                rel="noopener noreferrer"
                            >
                                Blog
                            </a>
                            {menuDisplay}
                        </div>
                        {/* <div className="Header-secondaryNav-narrow">
                             <div className="Dropdown" role="button">
                                <div className="Dropdown-toggle Dropdown-toggle--open">
                                    <img src={dots} alt="dotmenu"/>
                                </div>
                                <div className="Dropdown-toggle Dropdown-toggle--close">
                                    <img src={iconCancel} alt="cancelMenu"/>
                                </div>
                             </div>   
                        </div> */}
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