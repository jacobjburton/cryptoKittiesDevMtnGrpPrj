import React, { Component } from 'react';
import { connect} from 'react-redux';
import { getUser, getKitty } from '../../ducks/reducer.js';
import './Buy.css';
import share from '../../images/icons/share.svg';

class Buy extends Component {
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
            });
        } else {
            console.log(`MetaMask account not detected`);
        }
    }

    handleClick = (e) => {
        this.props.getKitty(e);
        this.props.history.push(`/kitty/${e}`);
    }
    

    render() {
        let { kitty } = this.props;
        console.log(kitty);

        var kittyBannerDisplay;
        
        switch (this.props.kitty.color) {
            case 'strawberry':
                kittyBannerDisplay =
                    <div className="KittyBanner KittyBanner--bg-strawberry">
                        <div className="Container Container--full">
                            <div className="KittyBanner-container KittyBanner-container--shadow-strawberry">
                                <a onClick={(e) => {this.handleClick(kitty.id)}} className="active" aria-current="true">
                                    <img style={{background: '#ffe0e5'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                                </a>
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
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
                                <div className="KittyBanner-status">
                                    <div className="KittyStatus KittyStatus--list">
                                        <div className="KittyStatus-item">
                                            <span className="KittyStatus-itemIcon">
                                                <i className="Icon Icon--tag"></i>
                                            </span>
                                            <span className="KittyStatus-itemText">
                                                <span className="KittyStatus-label">For sale</span>
                                                <span className="KittyStatus-note">
                                                    <small>&#8801;</small> SELLPRICE
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="KittyBanner-share">
                                    <img className="KittyBanner-shareBtn" src={share} alt="Share me!" role="button"/>
                                </div>
                            </div>
                        </div>
                    </div>
                break;
            default:
                return null;
        }

        return (
            <div className="Main">
                <div className="Hero">
                    <div className="Transaction">
                        <h1 className="Transaction-title">Youre about to buy {kitty.name}</h1>
                        <div className="Transaction-flow">
                            <span className="Transaction-item Transaction-item--from">You</span>
                            <svg width="32" height="1" viewBox="0 0 32 1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M.98.5h30.07" stroke="#DCDBD9" fill="none" fill-rule="evenodd" stroke-linecap="square"></path>
                            </svg>
                            <span className="Transaction-item Transaction-item--transfer">&#8801; SELLPRICE</span>
                            <svg width="29" height="13" viewBox="0 0 29 13" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#DCDBD9" fill="none" fill-rule="evenodd">
                                    <path d="M.5 6.5h28" stroke-linecap="square"></path>
                                    <path d="M23 1l5.75 5.47L23 11.6"></path>
                                </g>
                            </svg>
                            <span className="Transaction-item Transaction-item--to">{kitty.auction.seller.nickname}</span>
                        </div>
                    </div>
                    {kittyBannerDisplay}
                    <div class="Container Container--sm Container--center">
                        <div class="Section">
                            <p class="Hero-description">
                                <span>By clicking the button below, you will transfer 
                                    <strong> SELLPRICE </strong>
                                    ETH to 
                                    <strong> {kitty.auction.seller.nickname} </strong>
                                    and 
                                    <strong> {kitty.name} </strong>
                                    will be transferred to you in return.
                                </span>
                            </p>
                            <button class="Button Button--larger Button--buy" data-tracking="mxpnl-buypage-buykitty">OK, buy this Kitty</button>
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
        kitty: state.kitty
    }
}

export default connect(mapStateToProps, { getUser, getKitty })(Buy);