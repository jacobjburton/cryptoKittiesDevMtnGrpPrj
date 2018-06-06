import React, { Component } from 'react';
import info from '../../images/icons/info.svg';
import { connect } from 'react-redux';
import './Kitty.css';
import { getUser, getKitty } from '../../ducks/reducer.js';
import _ from 'lodash';
import diamond from '../../images/images/cattributes/diamond.svg';
import gold from '../../images/images/cattributes/gold.svg';
import silver from '../../images/images/cattributes/silver.svg';
import bronze from '../../images/images/cattributes/bronze.svg';

class Kitty extends Component {

    constructor(props) {
        super(props);

        this.state = {
            account: null
        }
    }

    componentDidMount() {
        if (window.web3 && window.web3.currentProvider.isMetaMask) {

            window.web3.eth.getAccounts((error, accounts) => {
                
                this.setState({ account: accounts[0] });
                //console.log(`received accounts[0]> `, accounts[0]);
                //console.log(`this.setState> this.state.account> `, this.state.account);
                this.props.getUser(accounts[0])
        })} else {
            console.log(`MetaMask account not detected`);
        }
        this.state.account && this.props.getUser(this.state.account)
//        console.log(this.props.myKitties)
//        console.log(this.props.user)
        //this.props.getKitty(this.props.kittyId)
        console.log(this.props.kitty.id)

        ////////////////////////////////////////////////////////////
        // comment the below code out before final build!!!!!!!!! //
        ////////////////////////////////////////////////////////////
        if (_.isEmpty(this.props.kitty))
        {
            this.props.history.push(`/profile/${this.state.account}`);
        }
    }

    handleClick = (e) => {
        this.props.getKitty(e);
        this.props.history.push(`/kitty/${e}`);
    }
    
    render () {

        


        let { kitty, user } = this.props;
        let { enhanced_cattributes } = this.props.kitty;
        console.log(kitty)
        console.log(enhanced_cattributes);
        // kitty.id ? console.log(kitty.enhanced_cattributes[0].description) : console.log('no kitty');
        
        var kittyBannerDisplay;

        // if (this.props.kitty.color === 'gold')
        {
            kittyBannerDisplay =
                <div className="KittyBanner KittyBanner--bg-gold">
                    <div className="Container Container--full">
                        <div className="KittyBanner-container KittyBanner-container--shadow-gold">
                            <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                <img style={{background: '#faf4cf'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                            </a>
                        </div>
                    </div>
                </div>
        }
        
        switch (this.props.kitty.color) {
            case 'strawberry':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-strawberry">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-strawberry">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#ffe0e5'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'sizzurp':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-sizzurp">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-sizzurp">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#dfdffa'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'mintgreen':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-mintgreen">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-mintgreen">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#cdf5d4'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'topaz':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-topaz">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-topaz">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#d1eeeb'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'gold':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-gold">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-gold">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#faf4cf'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'chestnut':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-chestnut">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-chestnut">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#efe1da'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'sapphire':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-sapphire">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-sapphire">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#d3e8ff'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'thundergrey':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-thundergrey">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-thundergrey">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#eee9e8'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'limegreen':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-limegreen">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-limegreen">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#d9f5cb'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'coralsunrise':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-coralsunrise">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-coralsunrise">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#fde9e4'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'cyan':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-cyan">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-cyan">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#c5eefa'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'bubblegum':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-bubblegum">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-bubblegum">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#fadff4'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'forgetmenot':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-forgetmenot">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-forgetmenot">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#dcebfc'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'parakeet':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-parakeet">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-parakeet">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#e5f3e2'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'pumpkin':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-pumpkin">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-pumpkin">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#fae1ca'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'doridnudibranch':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-doridnudibranch">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-doridnudibranch">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#faeefa'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'twilightsparkle':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-twilightsparkle">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-twilightsparkle">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#ede2f5'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'eclipse':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-eclipse">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-eclipse">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#e5e7ef'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'babypuke':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-babypuke">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-babypuke">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#eff1e0'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'dahlia':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-dahlia">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-dahlia">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#e6eafd'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'palejade':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-palejade">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-palejade">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#e7f1ed'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            case 'autumnmoon':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-autumnmoon">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-autumnmoon">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#fdf3e0'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                break;
            default:
                return null;
        }
            
            
            
        let nameDisplay = kitty.name ?
            <h1 className="KittyHeader-name-text KittyHeader-name-text--editable">{kitty.name}</h1>
            :
            <h1 className="KittyHeader-name-text KittyHeader-name-text--editable">Kitty #{kitty.id}</h1>

        let userNameDisplay = _.isEmpty(kitty.auction) ?
            <a className="KittyHeader-owner-name" aria-current="false" href={`/profile/${kitty.id && kitty['owner'].address}`}>
                {kitty.id && kitty['owner'].nickname}{ kitty.id && kitty['owner'].address === this.state.account ? ' (you)' : null }
            </a>
            :
            <a className="KittyHeader-owner-name" aria-current="false" href={`/profile/${kitty.id && kitty['auction']['seller'].address}`}>
                {kitty.id && kitty['auction']['seller'].nickname}{ kitty.id && kitty['auction']['seller'].address === this.state.account ? ' (you)' : null }   
            </a>
            
        if (!_.isEmpty(enhanced_cattributes)) {
            var eachCattribute = enhanced_cattributes.map((e, i) =>
            {
                var gemDisplay;
                if (enhanced_cattributes[i].position === -1)
                {
                    gemDisplay = 
                        <a href={`/kitty/${enhanced_cattributes[i].kittyId}`}></a>
                }
                if (enhanced_cattributes[i].position === 1)
                {
                    gemDisplay = 
                        <a className="Cattribute-icon" href={`/kitty/${enhanced_cattributes[i].kittyId}`}>
                            <i className="Cattribute-icon-img" style={{backgroundImage: diamond}}></i>
                        </a>
                }
                if (enhanced_cattributes[i].position1 > 1 && enhanced_cattributes[i].position <= 10)
                {
                    gemDisplay = 
                        <a className="Cattribute-icon" href={`/kitty/${enhanced_cattributes[i].kittyId}`}>
                            <i className="Cattribute-icon-img" style={{backgroundImage: gold}}></i>
                        </a>
                }
                if (enhanced_cattributes[i].position1 > 10 && enhanced_cattributes[i].position <= 100)
                {
                    gemDisplay = 
                        <a className="Cattribute-icon" href={`/kitty/${enhanced_cattributes[i].kittyId}`}>
                            <i className="Cattribute-icon-img" style={{backgroundImage: silver}}></i>
                        </a>
                }
                if (enhanced_cattributes[i].position1 > 100 && enhanced_cattributes[i].position <= 500)
                {
                    gemDisplay = 
                        <a className="Cattribute-icon" href={`/kitty/${enhanced_cattributes[i].kittyId}`}>
                            <i className="Cattribute-icon-img" style={{backgroundImage: bronze}}></i>
                        </a>
                }
                

                return (
                    <span className="KittyCattribute">
                        <div className="Cattribute Cattribute--size-small Cattribute--icon-gold">
                            {gemDisplay}
                            <a href={`/marketplace?include=sale,sire,other&search=${kitty.id && enhanced_cattributes[i]}`} className="Cattribute-content">
                                <h3 className="Cattribute-title">{kitty.id && enhanced_cattributes[i].description}</h3>
                                <span className="Cattribute-type">{kitty.id && enhanced_cattributes[i].type}</span>
                            </a>
                        </div>
                    </span>
                );
            });
        }

        let cattributesDisplay = (kitty.id && !kitty.is_fancy) ?
            <div className="KittySection">
                <div className="KittySection-header">
                    <h2 className="KittySection-header-title">Cattributes</h2>
                    <div className="KittySection-header-tooltip">
                        <div className="TooltipNew">
                            <span className="TooltipNew-wrapper">
                                <img src={info} alt="CattributesIcon" className="KittyCattributesTooltip-icon"/>
                            </span>
                        </div>
                    </div>            
                </div>
                <div className="KittySection-content">
                    <div className="KittyCattributes">
                        {eachCattribute}
                    </div>
                </div>
            </div>
            :
            null; //need to add functionality to display fancy type

        var ownerActions;
        var auctionInfo;
    
        if ((kitty.id && kitty.owner.address === this.state.account) || (kitty.id && kitty.auction.seller.address === this.state.account)) {
            if (_.isEmpty(kitty.auction)) {
                ownerActions = (
                    <div className="KittyHeader-ownerActions">
                        <div className="KittyHeader-ownerActions-action">
                            <a href="" className="Button Button--icon" aria-current="false">
                                <span className="Button-icon">
                                    <i className="Icon Icon--eggplant"></i>
                                </span>
                                Breed
                            </a>
                        </div>
                        <div className="KittyHeader-ownerActions-action">
                            <a href="" className="Button Button--icon" aria-current="false">
                                <span className="Button-icon">
                                    <i className="Icon Icon--tag"></i>
                                </span>
                                Sell
                            </a>                    
                        </div>
                        <div className="KittyHeader-ownerActions-action">
                            <span className="Button-icon">
                                <i className="Icon Icon--egglplant"></i>
                            </span>
                            Gift                  
                        </div>
                    </div>
                )
                auctionInfo = null;                
            }

            if (!_.isEmpty(kitty.auction)) {
                if (kitty.auction.type === 'sire') {
                    auctionInfo =
                        <div className="KittyBid KittyBid--sire">
                            <div className="KittyBid-boxes">
                                <div className="KittyBid-box">
                                    <h3 className="KittyBid-box-title">Breed now price</h3>
                                    <span className="KittyBid-box-subtitle">
                                        <em>Ξ</em>
                                        current price of siring
                                    </span>
                                </div>
                                <div className="KittyBid-box KittyBid-box--secondary">
                                    <h3 className="KittyBid-box-title">Time left</h3>
                                    <span className="KittyBid-box-subtitle">
                                        amount of time left before auction hits min price
                                    </span>
                                </div>
                            </div>
                            <div className="KittyBid-action">
                                <button type="button" className="Button Button--icon">
                                    <span>
                                        <i className="Icon Icon--eggplantCancel"></i>
                                    </span>
                                    Cancel siring
                                </button>
                            </div>
                            <div className="KittyBid-auctionGraph">
                                <div className="AuctionGraph AuctionGraph--sire">
                                    <svg className="AuctionGraph-chart" viewBox="0 0 720 180">
                                        <defs>
                                            <linearGradient id="grad" x2="0" y2="1">
                                                <stop offset="0" stop-color="#f5e2f2" stop-opacity="0.4"></stop>
                                                <stop offset="1" stop-color="#fff"></stop>
                                            </linearGradient>
                                        </defs>
                                        <polygon points="5,5 459.0473146219136,70.22838748055555 715,107 715,175 5,175 5,5" fill="url(#grad)"></polygon>
                                        <rect x="5" y="5" width="710" height="170" fill="none" stroke="#f5e2f2" stroke-width="2"></rect>
                                        <line x1="241.66666666666666" x2="241.66666666666666" y1="5" y2="175" stroke="#f5e2f2" stroke-width="2"></line>
                                        <line x1="478.3333333333333" x2="478.3333333333333" y1="5" y2="175" stroke="#f5e2f2" stroke-width="2"></line>
                                        <line x1="5" x2="459.0473146219136" y1="5" y2="70.22838748055555" stroke="#e96bd4" stroke-width="2"></line>
                                        <line x1="459.0473146219136" x2="715" y1="70.22838748055555" y2="107" stroke="#f5e2f2" stroke-width="2"></line>
                                        <circle cx="715" cy="107" r="5" fill="#f5e2f2"></circle>
                                        <circle cx="459.0473146219136" cy="70.22838748055555" r="5" fill="#e96bd4"></circle>
                                        <circle cx="5" cy="5" r="5" fill="#e96bd4"></circle>
                                    </svg>
                                    <div className="AuctionGraph-prices">
                                        <div className="AuctionGraph-price">
                                            Started at
                                            <span className="AuctionGraph-price-fee">
                                                <em>Ξ</em>
                                                starting price
                                            </span>
                                        </div>
                                        <div className="AuctionGraph-price">
                                            Price goes to
                                            <span className="AuctionGraph-price-fee">
                                                <em>Ξ</em>
                                                end price
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                if (kitty.auction.type === 'sale') {
                    auctionInfo =
                    <div className="KittyBid KittyBid--sale">
                        <div className="KittyBid-boxes">
                            <div className="KittyBid-box">
                                <h3 className="KittyBid-box-title">Buy now price</h3>
                                <span className="KittyBid-box-subtitle">
                                    <em>Ξ</em>
                                    current sale price
                                </span>
                            </div>
                            <div className="KittyBid-box KittyBid-box--secondary">
                                <h3 className="KittyBid-box-title">Time left</h3>
                                <span className="KittyBid-box-subtitle">
                                    amount of time left before auction hits min price
                                </span>
                            </div>
                        </div>
                        <div className="KittyBid-action">
                            <button type="button" className="Button Button--icon">
                                <span>
                                    <i className="Icon Icon--tagCancel"></i>
                                </span>
                                Cancel sale
                            </button>
                        </div>
                        <div className="KittyBid-auctionGraph">
                            <div className="AuctionGraph AuctionGraph--sale">
                                <svg class="AuctionGraph-chart" viewBox="0 0 720 180">
                                    <defs><linearGradient id="grad" x2="0" y2="1">
                                        <stop offset="0" stop-color="#f5eae2" stop-opacity="0.4"></stop>
                                        <stop offset="1" stop-color="#fff"></stop></linearGradient>
                                    </defs>
                                    <polygon points="5,5 5.753853182870371,5.040363041955999 715,90 715,175 5,175 5,5" fill="url(#grad)"></polygon>
                                    <rect x="5" y="5" width="710" height="170" fill="none" stroke="#f5eae2" stroke-width="2"></rect>
                                    <line x1="241.66666666666666" x2="241.66666666666666" y1="5" y2="175" stroke="#f5eae2" stroke-width="2"></line>
                                    <line x1="478.3333333333333" x2="478.3333333333333" y1="5" y2="175" stroke="#f5eae2" stroke-width="2"></line>
                                    <line x1="5" x2="5.753853182870371" y1="5" y2="5.040363041955999" stroke="#ff9b6a" stroke-width="2"></line>
                                    <line x1="5.753853182870371" x2="715" y1="5.040363041955999" y2="90" stroke="#f5eae2" stroke-width="2"></line>
                                    <circle cx="715" cy="90" r="5" fill="#f5eae2"></circle>
                                    <circle cx="5.753853182870371" cy="5.040363041955999" r="5" fill="#ff9b6a"></circle>
                                    <circle cx="5" cy="5" r="5" fill="#ff9b6a"></circle>
                                </svg>
                                <div className="AuctionGraph-prices">
                                    <div className="AuctionGraph-price">
                                        Started at
                                        <span className="AuctionGraph-price-fee">
                                            <em>Ξ</em>
                                            starting price
                                        </span>
                                    </div>
                                    <div className="AuctionGraph-price">
                                        Price goes to
                                        <span className="AuctionGraph-price-fee">
                                            <em>Ξ</em>
                                            end price
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            }
        }

        if ((kitty.id && kitty.owner.address !== this.state.account) && (kitty.id && kitty.auction.seller.address !== this.state.account)) {
            if (!_.isEmpty(kitty.auction)) {
                if (kitty.auction.type === 'sire') {
                    auctionInfo =
                    <div class="KittyBid KittyBid--sire">
                        <div class="KittyBid-boxes">
                            <div class="KittyBid-box">
                                <h3 class="KittyBid-box-title">Breed now price</h3>
                                <span class="KittyBid-box-subtitle">
                                    <em>Ξ</em> current price
                                </span>
                            </div>
                            <div class="KittyBid-box KittyBid-box--secondary">
                                <h3 class="KittyBid-box-title">Time left</h3>
                                <span class="KittyBid-box-subtitle">5.6 months</span>
                            </div>
                        </div>
                        <div class="KittyBid-action">
                            <a class="Button Button--larger Button--love" aria-current="false" data-tracking="mxpnl-buypage-breednow" href="/kitty/485792/breed">
                                Breed now
                            </a>
                        </div>
                        <div class="KittyBid-auctionGraph">
                            <div class="AuctionGraph AuctionGraph--sire">
                                <svg class="AuctionGraph-chart" viewBox="0 0 720 180">
                                    <defs>
                                        <linearGradient id="grad" x2="0" y2="1">
                                            <stop offset="0" stop-color="#f5e2f2" stop-opacity="0.4"></stop>
                                            <stop offset="1" stop-color="#fff"></stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon points="5,5 163.82242953787122,43.02790365723013 715,175 715,175 5,175 5,5" fill="url(#grad)"></polygon>
                                    <rect x="5" y="5" width="710" height="170" fill="none" stroke="#f5e2f2" stroke-width="2"></rect>
                                    <line x1="241.66666666666666" x2="241.66666666666666" y1="5" y2="175" stroke="#f5e2f2" stroke-width="2"></line>
                                    <line x1="478.3333333333333" x2="478.3333333333333" y1="5" y2="175" stroke="#f5e2f2" stroke-width="2"></line>
                                    <line x1="5" x2="163.82242953787122" y1="5" y2="43.02790365723013" stroke="#e96bd4" stroke-width="2"></line>
                                    <line x1="163.82242953787122" x2="715" y1="43.02790365723013" y2="175" stroke="#f5e2f2" stroke-width="2"></line>
                                    <circle cx="715" cy="175" r="5" fill="#f5e2f2"></circle><circle cx="163.82242953787122" cy="43.02790365723013" r="5" fill="#e96bd4"></circle>
                                    <circle cx="5" cy="5" r="5" fill="#e96bd4"></circle>
                                </svg>
                                <div class="AuctionGraph-prices">
                                    <div class="AuctionGraph-price">
                                        Started at 
                                        <span class="AuctionGraph-price-fee">
                                            <em>Ξ</em> Starting price
                                        </span>
                                    </div>
                                    <div class="AuctionGraph-price">
                                        Price goes to 
                                        <span class="AuctionGraph-price-fee">
                                            <em>Ξ</em> 0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                if (kitty.auction.type === 'sale') {
                    auctionInfo =
                    <div class="KittyBid KittyBid--sale">
                        <div class="KittyBid-boxes">
                            <div class="KittyBid-box">
                                <h3 class="KittyBid-box-title">Buy now price</h3>
                                <span class="KittyBid-box-subtitle">
                                    <em>Ξ</em> 0.0018
                                </span>
                            </div>
                            <div class="KittyBid-box KittyBid-box--secondary">
                                <h3 class="KittyBid-box-title">Time left</h3>
                                <span class="KittyBid-box-subtitle">5 hours</span>
                            </div>
                        </div>
                        <div class="KittyBid-action">
                            <a class="Button Button--larger Button--buy" aria-current="false" data-tracking="mxpnl-buypage-buynow" href="/kitty/592888/buy">
                                Buy now
                            </a>
                        </div>
                        <div class="KittyBid-auctionGraph">
                            <div class="AuctionGraph AuctionGraph--sale">
                                <svg class="AuctionGraph-chart" viewBox="0 0 720 180">
                                    <defs>
                                        <linearGradient id="grad" x2="0" y2="1">
                                            <stop offset="0" stop-color="#f5eae2" stop-opacity="0.4"></stop>
                                            <stop offset="1" stop-color="#fff"></stop>
                                        </linearGradient>
                                    </defs>
                                    <polygon points="5,5 417.5606203703704,70.8542341589506 715,118.33333333333334 715,175 5,175 5,5" fill="url(#grad)"></polygon>
                                    <rect x="5" y="5" width="710" height="170" fill="none" stroke="#f5eae2" stroke-width="2"></rect>
                                    <line x1="241.66666666666666" x2="241.66666666666666" y1="5" y2="175" stroke="#f5eae2" stroke-width="2"></line>
                                    <line x1="478.3333333333333" x2="478.3333333333333" y1="5" y2="175" stroke="#f5eae2" stroke-width="2"></line>
                                    <line x1="5" x2="417.5606203703704" y1="5" y2="70.8542341589506" stroke="#ff9b6a" stroke-width="2"></line>
                                    <line x1="417.5606203703704" x2="715" y1="70.8542341589506" y2="118.33333333333334" stroke="#f5eae2" stroke-width="2"></line>
                                    <circle cx="715" cy="118.33333333333334" r="5" fill="#f5eae2"></circle>
                                    <circle cx="417.5606203703704" cy="70.8542341589506" r="5" fill="#ff9b6a"></circle>
                                    <circle cx="5" cy="5" r="5" fill="#ff9b6a"></circle>
                                </svg>
                                <div class="AuctionGraph-prices">
                                    <div class="AuctionGraph-price">
                                        Started at 
                                        <span class="AuctionGraph-price-fee">
                                            <em>Ξ</em> 0.003
                                        </span>
                                    </div>
                                    <div class="AuctionGraph-price">
                                        Price goes to 
                                        <span class="AuctionGraph-price-fee">
                                            <em>Ξ</em> 0.001
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            }
            if (_.isEmpty(kitty.auction)) {
                auctionInfo = null;
            }
        }
                
        

        let parentDisplay = (!_.isEmpty(kitty.matron) && !_.isEmpty(kitty.sire)) ?
            <div className="KittySection">
                <div className="KittySection-header">
                    <h2 className="KittySection-header-title">Parents</h2>
                </div>
                <div className="KittySection-content">
                    <div class="Kitty-Parents">
                        <div className="KittiesList">
                            <div className="KittiesList-items">
                                <div className="KittiesList-item">
                                    <a onClick={(e) => {this.handleClick(kitty.sire.id)}} aria-current="false">
                                        <div className="KittyCard-wrapper">
                                            <div className="KittyCard KittyCard--bg-topaz KittyCard--thumbnail KittyCard--fancy KittyCard--shadow-topaz">
                                                <img className="KittyCard-image" src={kitty.id && kitty.sire.image_url} alt="sireImg"/>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="KittiesList-item">
                                    <a aria-current="false" onClick={(e) => {this.handleClick(kitty.matron.id)}}>
                                        <div className="KittyCard-wrapper">
                                            <div className="KittyCard KittyCard--bg-sapphire KittyCard--thumbnail KittyCard--shadow-sapphire">
                                                <img className="KittyCard-image" src={kitty.id && kitty.matron.image_url} alt="matronImg"/>
                                                <div className="KittyCard-status"></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null;
        
        if (!_.isEmpty(kitty.children)) {
            var allTheChildren = kitty.children.map((e, i) => {
                return (
                    <div className="KittySection-content">
                        <div className="Kitty-children">
                            <div className="KittiesList">
                                <div className="KittiesList-items">
                                    <div className="KittiesList-item">
                                        <a onClick={(e) => {this.handleClick(kitty.children[i].id)}} aria-current="false">
                                            <div className="KittyCard-wrapper">
                                                <div className="KittyCard KittCard--bg-topaz KittyCard--thumbnail KittyCard--shadow-topaz">
                                                    <img  className="KittyCard-image" src={kitty.id && kitty.children[i].image_url} alt="childImg"/>
                                                    <div className="KittyCard-status"></div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
        }
        let childrenDisplay = (!_.isEmpty(kitty.children)) ?
            <div className="KittySection">
                <div className="KittySection-header">
                    <h2 className="KittySection-header-title">Children</h2>
                </div>
                {allTheChildren}
            </div>
            : null;




        return (
            <div className='Main'>
                <div className='KittyPage'>
                    {kittyBannerDisplay}
                    <div className="KittyPage-content">
                        <div className="KittyProfile">
                            <div className="Container Container-smGrow">
                                <div className="KittySection">
                                    <div className="KittySection-content">
                                        <div className="KittyHeader">                                        
                                            <div className="KittyHeader-main">
                                                <div className="KittyHeader-name">
                                                    {nameDisplay}
                                                </div>
                                                <div className="KittyHeader-details">
                                                    <span className="Separator"></span>
                                                    <a 
                                                        className='KittyHeader-details-item Kittyheader-details-generation' 
                                                        aria-current='false' 
                                                        href="/marketplace?include=sale,sire,other&search=gen:10"
                                                    >
                                                        <span>
                                                            <span>
                                                                Gen {kitty.generation}
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <span className="Separator"></span>
                                                    <span 
                                                        className="KittyHeader-details-item KittyHeader-details-condition"
                                                    >
                                                        Brisk Cooldown &nbsp;
                                                        <img src={info} alt="info"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="KittyHeader-owner">
                                                <a className="KittyHeader-owner-imageLink" aria-current='false' href="">
                                                    <img src={`https://www.cryptokitties.co/profile/profile-${user.image}.png`} alt="profileImage"/>
                                                </a>
                                                <span className="KittyHeader-owner-details">
                                                    {userNameDisplay}
                                                    <span>Owner</span>
                                                </span>
                                            </div>
                                            <div className="KittyHeader-actions">
                                                <div className="KittyHeader-actionsGroup">
                                                    <div className="KittyHeader-publicActions">
                                                        <span className="PurrButton PurrButton--purrable" role="button">
                                                            <span className="PurrButton-innerPurrButton-inner--clipped">
                                                                <span className="PurrButton-graphics">
                                                                    <svg
                                                                        className="PurrButton-pawReverse"
                                                                        width="30"
                                                                        height="40"
                                                                        viewBox="0 0 30 40"
                                                                    >
                                                                        <g fill="none" fill-rule="evenodd">
                                                                            <path fill="#FFF0A4" transform="rotate(90 14.02 20.456)" d="M33.563 30.663c-5.649-.021-10.94-.021-15.875 0-1.813.008-5.814 2.418-8.44 2.73-2.624.313-5.43-.577-7.06-4.167-3.37-.938-4.668-2.504-5.437-3.813-.934-1.586-1.438-4.57-.438-6.062-.75-1.32-.937-3.5.438-6.313 1.375-2.812 2.692-2.75 5.437-3.375 1.505-2.591 3.998-4.437 7.06-4.125 3.063.313 6.19 2.616 8.44 2.625 4.893.021 10.184.146 15.875.375v22.125z"></path>
                                                                            <path d="M15.062 3.531c-7-1.344-7.312 9.031-7.312 12.219 0 2.687 1.25 6.437 1.25 8V40H4.125c-.314-8.191-.501-13.754-.563-16.688-.032-1.564-2.25-7.005-2.25-8.937 0-1.166 2.428-4.594 4.332-5.494C5.644 7.504 6.72 4 8.687 3.187c2.309-.952 5.394-.39 6.375.344z" fill="#FDD35B"></path>
                                                                            <g fill="#2A2825">
                                                                                <path d="M4.73 9.847c.713-.385 1.22.103 1.52 1.465.073-1.68.167-2.86.281-3.539-.523.063-2.871 2.652-1.801 2.074zM25.5 9.847c-.713-.385-1.193.186-1.438 1.715-.062-2.156-.166-3.64-.312-4.453-.219-1.218 2.82 3.316 1.75 2.738zM13.547 3.484c.76.375 1.284 1.25 1.57 2.625.182-1.375.706-2.25 1.57-2.625h-3.14z"></path>
                                                                                <path d="M5.064 40h-1.5c.02-5.804.02-11.173 0-16.107-.008-1.813-2.575-4.956-2.877-7.58C.386 13.686 1 9.78 4.881 8.075c.906-3.37 2.056-4.451 3.869-5.495 1.998-1.151 4.882-1 6.322 0 1.275-.75 3.9-1.375 6.615 0 2.716 1.375 3.438 3.544 3.833 5.495 2.98 1.549 4.344 5.174 4.042 8.236-.301 3.063-3.197 5.331-3.207 7.581-.02 4.893-.02 10.262 0 16.107h-1.5c-.02-5.847-.02-11.218 0-16.113.006-1.377.288-1.944 1.84-4.464.894-1.454 1.282-2.32 1.374-3.258.271-2.748-1.034-5.61-3.24-6.758l-.637-.33-.142-.703c-.46-2.269-1.208-3.527-3.04-4.455-1.851-.937-3.896-.799-5.177-.046l-.828.487-.788-.547c-1.028-.714-3.298-.75-4.718.067C7.742 4.892 7.044 5.807 6.33 8.465l-.187.695-.658.29c-2.62 1.15-3.647 3.742-3.308 6.691.059.506.247 1.117.57 1.866.181.423.39.856.703 1.478 1.397 2.766 1.609 3.26 1.614 4.402.02 4.937.02 10.308 0 16.113zm-1.5 0c.02-5.804.02-11.173 0-16.107-.008-1.813-2.575-4.956-2.877-7.58C.386 13.686 1 9.78 4.881 8.075c.906-3.37 2.056-4.451 3.869-5.495 1.998-1.151 4.882-1 6.322 0 1.275-.75 3.9-1.375 6.615 0 2.716 1.375 3.438 3.544 3.833 5.495 2.98 1.549 4.344 5.174 4.042 8.236-.301 3.063-3.197 5.331-3.207 7.581-.02 4.893-.02 10.262 0 16.107h-1.5c-.02-5.847-.02-11.218 0-16.113.006-1.377.288-1.944 1.84-4.464.894-1.454 1.282-2.32 1.374-3.258.271-2.748-1.034-5.61-3.24-6.758l-.637-.33-.142-.703c-.46-2.269-1.208-3.527-3.04-4.455-1.851-.937-3.896-.799-5.177-.046l-.828.487-.788-.547c-1.028-.714-3.298-.75-4.718.067C7.742 4.892 7.044 5.807 6.33 8.465l-.187.695-.658.29c-2.62 1.15-3.647 3.742-3.308 6.691.059.506.247 1.117.57 1.866.181.423.39.856.703 1.478 1.397 2.766 1.609 3.26 1.614 4.402.02 4.937.02 10.308 0 16.113h-1.5z" fill-rule="nonzero"></path>   
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="KittyHeader-actionsGroup">
                                                    {ownerActions}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="KittySection">
                                    <div className="KittySection-content">
                                        {auctionInfo}
                                    </div>
                                </div>
                                <div className="KittySection">
                                    <div className="KittySection-header">
                                        <h2 className="KittySection-header-title">Bio</h2>
                                        <div className="KittySection-header-tooltip">
                                            <div className="TooltipNew">
                                                <span className="TooltipNew-wrapper">
                                                    <img className="BioTooltip-icon" src={info} alt="infoIcon"/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="KittySection-content">
                                        <div className="KittySection-content">
                                            <div className="KittyDescription">
                                                <p>{this.props.kitty.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {cattributesDisplay}
                                {parentDisplay}
                                {childrenDisplay}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        myKitties: state.myKitties,
        kitty: state.kitty
    }
}

export default connect(mapStateToProps, { getUser, getKitty })(Kitty);