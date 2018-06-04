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

    constructor() {
        super();

        this.state = {
            account: null
        }
    }

    componentDidMount() {
        if (window.web3 && window.web3.currentProvider.isMetaMask) {

            window.web3.eth.getAccounts((error, accounts) => {
                
                this.setState({ account: accounts[0] });
                console.log(`received accounts[0]> `, accounts[0]);
                console.log(`this.setState> this.state.account> `, this.state.account);
                this.props.getUser(accounts[0])
        })} else {
        console.log(`MetaMask account not detected`);
        }
        this.state.account && this.props.getUser(this.state.account)
        console.log(this.props.myKitties)
        console.log(this.props.user)
        this.props.getKitty(611557)
        console.log(this.props.kitty)
    }
    
    render () {

        


        let { kitty } = this.props;
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
                            <a href={`/kitty/${kitty.id}`} className="active" aria-current="true">
                                <img style={{background: '#faf4cf'}} src={kitty.image_url} alt="kittybanner" className="KittyBanner-image"/>
                            </a>
                        </div>
                    </div>
                </div>
        }
        
        
        let nameDisplay = this.props.kitty.name ?
            <h1 className="KittyHeader-name-text KittyHeader-name-text--editable">{this.props.kitty.name}</h1>
            :
            <h1 className="KittyHeader-name-text KittyHeader-name-text--editable">Kitty #{this.props.kitty.id}</h1>
            
        if (!_.isEmpty(enhanced_cattributes)) 
        {
            var eachCattribute = enhanced_cattributes.map((e, i) =>
            {
                var gemDisplay;
                if (enhanced_cattributes[i].position === -1)
                {
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
                                <a href={`/kitty/${kitty.id && kitty.sire.id}`} aria-current="false">
                                    <div className="KittyCard-wrapper">
                                        <div className="KittyCard KittyCard--bg-topaz KittyCard--thumbnail KittyCard--fancy KittyCard--shadow-topaz">
                                            <img className="KittyCard-image" src={kitty.id && kitty.sire.image_url} alt="sireImg"/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="KittiesList-item">
                                <a aria-current="false" href={`/kitty/${kitty.id && kitty.matron.id}`}>
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
        
        if (!_.isEmpty(kitty.children))
        {
            var allTheChildren = kitty.children.map((e, i) => 
            {
                return (
                    <div className="KittySection-content">
                        <div className="Kitty-children">
                            <div className="KittiesList">
                                <div className="KittiesList-items">
                                    <div className="KittiesList-item">
                                        <a href={`/kitty/${kitty.id && kitty.children[i].id}`} aria-current="false">
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
            })
        }
        let childrenDisplay = (!_.isEmpty(kitty.children)) ?
            <div className="KittySection">
                <div className="KittySection-header">
                    <h2 className="KittySection-header-title">Children</h2>
                </div>
                {allTheChildren}
            </div>
            : null;

        
        let auction = kitty.auction;

        console.log(_.isEmpty(auction));
        



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
                                                                Gen {this.props.kitty.generation}
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
                                                    <img src={`https://www.cryptokitties.co/profile/profile-${this.props.user.image}.png`} alt="profileImage"/>
                                                </a>
                                                <span className="KittyHeader-owner-details">
                                                    <a className="KittyHeader-owner-name" aria-current="false" href="">
                                                        {kitty.id && kitty['owner'].nickname}{ kitty.id && kitty['owner'].address === this.state.account ? ' (you)' : null }
                                                        
                                                    </a>
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
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div classname="KittySection">
                                    <div className="KittySection-content">
                                        
                                    </div>
                                </div>
                                <div classname="KittySection">
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
        userActivity: state.userActivity,
        cattributes: state.cattributes,
        myKitties: state.myKitties,
        kitty: state.kitty,
        specialCats: state.specialCats,
        forsaleSiringOther: state.forsaleSiringOther
    }
}

export default connect(mapStateToProps, { getUser, getKitty })(Kitty);