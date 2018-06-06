import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Profile.css';
import {getUser, getFilteredCats} from '../../ducks/reducer';
import _ from 'lodash';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            account: null,
            cooldown_index: ['Fast', 'Swift', 'Snappy', 'Brisk', 'Plodding', 'Slow', 'Sluggish', 'Catatonic']
        }
    }
    componentDidMount(){
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
    }
    render(){
        let {myKitties, owner_wallet_address, cooldown, sale, sire, other, type, orderBy, gen, orderDirection} = this.props;
        console.log(myKitties.kitties && myKitties.kitties[0])



        let nameDisplay;
        if (myKitties.kitties){
            nameDisplay = <span className="kittyCard-details-item-highlight">{myKitties.kitties[0] && myKitties.kitties[0].name || myKitties.kitties[0].id} </span>
        } else {
            nameDisplay = null
        }
        console.log(this.props.user)
        console.log(myKitties);
        
        let settings = this.state.account ?
        <div>
            <a className="profileLink" href="/settings">Settings</a>
        </div>
        :
        <div>
            <a className="profileLink">Report User</a>
            {/* when clicked it needs to initiate a modal */}
        </div>

        if(!_.isEmpty(myKitties.kitties)){
            var allTheKitties = myKitties.kitties.map((e, i) => {
                return (

                    <div className="kittiesGrid">
                    <div className="kittiesGrid-item">
                        <a href={`/kitty/${myKitties.kitties ? myKitties.kitties[i].id : null}`}>
                        {/* enables the entire div to be clickable which brings you to the kitty's profile page */}
                            <div className="kittyCard-wrapper">
                                <div className="kittyCard-background">
                                <img class="KittyCard-image" src={myKitties.kitties ? myKitties.kitties[i].image_url_cdn : null} alt="kitty"/>
                                                            {/* display's the kitty's image */}
                                <div className="kittyCard-status"></div>
                                </div>
                                <div className="kittyCard-name">{nameDisplay}</div>
                                {/* displays the kitty's name if the user specified a name, otherwise it will display the kitty's id # */}
                                <div className="kittyCard-details">
                                        Kitty #{myKitties.kitties ? myKitties.kitties[i].id: null}
                                        {/* displays the kitty's id # */}
                                    <span className="kittyCard-details-item">
                                        <span>Gen {myKitties.kitties ? myKitties.kitties[i].generation : null}</span>
                                        {/* displays the generation number for the kitty */}
                                    </span>
                                    <span className="kittyCard-details-item">{myKitties.kitties ? this.state.cooldown_index[myKitties.kitties[i].status.cooldown_index]: null}</span>
                                                                            {/* displays the kitty's specific cooldown description by index of the array stored in state. */}
                                </div>
                                <div className="kittyCard-actions">
                                    <span className="kittyCard-actions-action">
                                        <span className="purrBadge" role="button">
                                            <span className="purrBadge-hearts">
                                                <span className="purrBadge-heart">
                                                    <svg width="22" height="22" viewBox="0 0 22 22">
                                                        <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="purrBadge-heartFill">
                                                    <svg width="22" height="22" viewBox="0 0 22 22">
                                                        <g fill="none" fill-rule="evenodd">
                                                            <g transform="translate(4 5.546)">
                                                                <mask id="b" fill="#fff">
                                                                    <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
                                                                    </path>
                                                                </mask>
                                                                <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
                                                                </path>
                                                                <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
                                                                </path>
                                                                <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
                                                                </path>
                                                            </g>
                                                            <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </span>
                                            <span className="purrBadge-count">{myKitties.kitties ? myKitties.kitties[i]["purrs"].count : null}</span>
                                            {/* displays the amount of likes or 'purrs' the kitty has received by other users */}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                )
            })
        }
        let KittiesDisplay = (!_.isEmpty(myKitties.kitties)) ?
        <div>
            {allTheKitties}
        </div>
        : null;
   return (
        <main className="main">
            <div className="profilePage">
                <div className="profileHeader">
                    <div className="container-lg">
                        <div className="profileHeader-container">
                            <img className="profileHeader-image" src={`https://www.cryptokitties.co/profile/profile-${this.props.user.image}.png`} alt="Profile pic"/>
                                                                {/* displays the user's profile image */}
                            <div className="profileHeader-info">
                                <h1 className="profileHeader-title">{this.props.user.nickname}</h1>
                                                                {/* displays the username */}
                                <div className="profileHeader-wallet">
                                    <span className="copyAddress" role="tooltip">
                                    <a className="profileLink" href="">Copy Address</a>
                                            {/* need to open a modal that copies address */}
                                    </span>
                                    <span className="separator"><svg xmlns="http://www.w3.org/2000/svg" width="3" height="3"><circle cx="179.5" cy="421.5" r="1.5" transform="translate(-178 -420)" fill="#DCDBD9" fill-rule="evenodd"/></svg></span>
                                    <div className="reportPage">
                                    {settings}
                                    {/* this is a ternary up in the render that will display different links depending on if the user is logged in or not */}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profilePage-tabs">
                    <div className="container-lg">
                        <div className="TabNav">
                            <a className="TabNav-tab" href={`/profile/${this.props.user.address}`}>Kitties</a>
                            <a className="TabNav-tab" href={`/profile/${this.props.user.address}/special-cats`}>Special Cats</a>   
                            <a className="TabNav-tab" href={`/profile/${this.props.user.address}/catdex`}>Cat Codex</a>
                        </div>
                    </div>
                </div>
                <div className="profileMain">
                    <div className="profileKitties">
                        <div className="kittiesToolbar">
                            <div className="kittiesToolbar-searchBar">
                                <div className="container-lg">
                                    <div className="searchBar">
                                        <div className="searchBar-container">
                                            <div className="searchBar-icon">
                                                <svg className="icon-V2" width="16" height="16" viewBox="0 0 16 16">
                                                    <g fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" vector-effect="non-scaling-stroke">
                                                    <path d="M11.438 11.438c2.379-2.379 2.379-6.275 0-8.654C9.06.405 5.163.405 2.784 2.784c-2.379 2.378-2.379 6.275 0 8.654 2.378 2.379 6.275 2.379 8.654 0z"></path>
                                                    <path stroke-linecap="round" d="M11.911 11.911l2.845 2.845"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <input type="text" className="searchBar-input" placeholder="Search" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
                                            <div className="searchBar-actionGroups">
                                                <div className="searchBar-actionGroup">
                                                    <button className="searchBar-action" type="button">
                                                        filters
                                                        <svg className="iconV2" class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="24" height="24" viewBox="0 0 16 16">
                                                            <g fill="none" fill-rule="evenodd" stroke="#c4c3c0" stroke-width="1.5" transform="matrix(-1 0 0 1 12.48 2.56)" vector-effect="non-scaling-stroke">
                                                                <g stroke-linecap="round">
                                                                    <path d="M0 1.28h5.04m2.76 0h1.16M0 5.12h1.186m2.86 0H8.96M0 9.28h5.117m2.787 0H8.96">
                                                                    </path>
                                                                </g>
                                                                <circle cx="6.56" cy="1.12" r="1.12">
                                                                </circle>
                                                                <circle cx="2.72" cy="5.12" r="1.12">
                                                                </circle>
                                                                <circle cx="6.56" cy="9.12" r="1.12">
                                                                </circle>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kittiesToolbar-filters">
                                <div className="container-lg">
                                    <div className="kittiesFilter-groups">
                                        <div className="kittiesFilter-group1">
                                            <div className="kittiesFilter-group-title">
                                                Kitty type
                                            </div>
                                            <div className="kittiesFilter-group-content">
                                                <div className="kittiesFilter-list">
                                                    <div className="kittiesFilter-list-item">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, "normal", gen, cooldown, sale, sire, other, orderBy, orderDirection)}}>Normal</button>
                                                    </div>
                                                    <div className="kittiesFilter-list-item">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, "fancy", gen, cooldown, sale, sire, other, orderBy, orderDirection)}}>Fancy</button>
                                                    </div>
                                                    <div className="kittiesFilter-list-item">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, "exclusive", gen, cooldown, sale, sire, other, orderBy, orderDirection)}}>Exclusive</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="kittiesFilter-group2">
                                            <div className="kittiesFilter-group-title">
                                                Generation
                                            </div>
                                            <div className="kittiesFilter-group-content">
                                                <div className="kittiesFilter-number">
                                                    <input className="kittiesFilter-number-input" type="number" step="1" min="0" value="0" placeholder="All"/>
                                                    <div className="kittiesFilter-number-reset">
                                                        <span className="kittiesFilter-number-reset-button" role="button">Reset</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="kittiesFilter-group3">
                                            <div className="kittiesFilter-group-title">Cooldown</div>
                                            <div className="kittiesFilter-group-content">
                                                <div className="kittiesFilter-list">
                                                    <div className="kittiesFilter-list-item" role="button">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, type, gen, this.state.cooldown_index[0], sale, sire, other, orderBy, orderDirection)}}>Fast</button>
                                                    </div>
                                                    <div className="kittiesFilter-list-item" role="button">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, type, gen, this.state.cooldown_index[1], sale, sire, other, orderBy, orderDirection)}}>Swift</button>
                                                    </div>
                                                    <div className="kittiesFilter-list-item" role="button">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, type, gen, this.state.cooldown_index[2], sale, sire, other, orderBy, orderDirection)}}>Snappy</button>
                                                    </div>
                                                    <div className="kittiesFilter-list-item" role="button">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, type, gen, this.state.cooldown_index[3], sale, sire, other, orderBy, orderDirection)}}>Brisk</button>
                                                    </div>
                                                    <div className="kittiesFilter-list-item" role="button">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, type, gen, this.state.cooldown_index[4], sale, sire, other, orderBy, orderDirection)}}>Plodding</button>
                                                    </div>
                                                    <div className="kittiesFilter-list-item" role="button">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, type, gen, this.state.cooldown_index[5], sale, sire, other, orderBy, orderDirection)}}>Slow</button>
                                                    </div>
                                                    <div className="kittiesFilter-list-item" role="button">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, type, gen, this.state.cooldown_index[6], sale, sire, other, orderBy, orderDirection)}}>Sluggish</button>
                                                    </div>
                                                    <div className="kittiesFilter-list-item" role="button">
                                                        <button className="filterButton" onClick={() => {this.props.getFilteredCats(owner_wallet_address, type, gen, this.state.cooldown_index[7], sale, sire, other, orderBy, orderDirection)}}>Catatonic</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kittiesToolbar-includeAndSort">
                                <div className="container-lg">
                                    <div className="kittiesToolbar-includeAndSort-container">
                                        <div className="kittiesToolbar-include">
                                            <span className="kittiesToolbar-label">include</span>
                                            <div className="kittiesToolbar-include-options">
                                                <div className="selectionGroup">
                                                    <div className="selectionGroup-item">
                                                        <div className="checkbox" role="checkbox" aria-checked="true">
                                                            <input type="checkbox" id="For Sale" className="checkbox-input"/>
                                                            <label className="checkbox-label" for="For Sale">
                                                                <span className="checkbox-label-icon">
                                                                    <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16">
                                                                        <path fill="none" fill-rule="evenodd" stroke="#EF52D1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5.333 7.023L8.06 10l5.843-7.737a.5.5 0 0 1 .9.301v10.272a2 2 0 0 1-2 2H3.11a2 2 0 0 1-2-2V3.072a2 2 0 0 1 2-2H9.73" vector-effect="non-scaling-stroke">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                                <span className="checkbox-label-text-left">For Sale</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="selectionGroup-item">
                                                        <div className="checkbox-checked" role="checkbox" aria-checked="true">
                                                            <input className="checkbox-input" type="checkbox" id="Siring"/>
                                                            <label className="checkbox-label" for="Siring">
                                                                <span className="checkbox-label-icon">
                                                                    <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16">
                                                                        <path fill="none" fill-rule="evenodd" stroke="#EF52D1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5.333 7.023L8.06 10l5.843-7.737a.5.5 0 0 1 .9.301v10.272a2 2 0 0 1-2 2H3.11a2 2 0 0 1-2-2V3.072a2 2 0 0 1 2-2H9.73" vector-effect="non-scaling-stroke">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                                <span className="checkbox-label-text-right">Siring</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="selectionGroup-item">
                                                        <div className="checkbox-checked" role="checkbox" aria-checked="true">
                                                            <input className="checkbox-input" type="checkbox" id="Other"/>
                                                            <label className="checkbox-label" for="Other">
                                                                <span className="checkbox-label-icon">
                                                                    <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16">
                                                                        <path fill="none" fill-rule="evenodd" stroke="#EF52D1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5.333 7.023L8.06 10l5.843-7.737a.5.5 0 0 1 .9.301v10.272a2 2 0 0 1-2 2H3.11a2 2 0 0 1-2-2V3.072a2 2 0 0 1 2-2H9.73" vector-effect="non-scaling-stroke">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                                <span className="checkbox-label-text-right" >Other</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="kittiesToolbar-sort">
                                            <span className="kittiesToolbar-label-alwaysVisible">Sort by</span>
                                            <div className="kittiesToolbar-sort-options">
                                                <div className="selectionGroup">
                                                    <div className="selectionGroup-item">
                                                        <div className="select-container" role="menu">
                                                            <select className="select" placeholder>
                                                                <option value="age">Age</option>
                                                                <option value="generation">Generation</option>
                                                                <option value="cooldown">Cooldown</option>
                                                                <option value="purr_count">Likes</option>
                                                            </select>
                                                            <svg className="select-icon" class="IconV2 IconV2--position-default IconV2--display-inlineBlock Select-icon" width="16" height="16" viewBox="0 0 16 16">
                                                                <path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#c4c3c0" fill-rule="evenodd">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="selectionGroup-item">
                                                        <div className="select-container" role="menu">
                                                            <select className="select" placeholder>
                                                                <option value="asc">Low to High</option>
                                                                <option value="desc">High to Low</option>
                                                            </select>
                                                            <svg className="select-icon" class="IconV2 IconV2--position-default IconV2--display-inlineBlock Select-icon" width="16" height="16" viewBox="0 0 16 16">
                                                                <path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#c4c3c0" fill-rule="evenodd">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kittiesToolbar-count">
                                <div className="container-lg">
                                    <span>{myKitties.total ? myKitties.total : null} Kitties</span> 
                                    {/* displays how many kitties a specific user has */}
                                </div>
                            </div>
                        </div>
                        <div className="profile">
                            <div className="kittiesGallery">
                                <div className="container-lg">
                                {allTheKitties}
                                    {/* put kitty card here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user,
        myKitties: state.myKitties,
        cattributes: state.cattributes
    }
}
export default connect(mapStateToProps, {getUser, getFilteredCats})(Profile);