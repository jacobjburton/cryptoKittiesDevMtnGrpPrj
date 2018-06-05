import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUser, getKitty, getUserActivity, getSpecialCats, getForsaleSiringOther, getFilteredCats } from '../../ducks/reducer';
import './Settings.css';

class Settings extends Component {
    constructor() {
        super(); 
        this.state={
            account: null
        }
    }
    componentDidMount(){
        if (window.web3 && window.web3.currentProvider.isMetaMask) {
 
            window.web3.eth.getAccounts((error, accounts) => {
                
                this.setState({ account: accounts[0] });
                console.log(`received accounts[0]>` , accounts[0]);
                console.log(`this.setState> this.state.account>` , this.state.account);
                this.props.getUser(accounts[0])
        })} else {
        console.log(`MetaMask account not detected`);
        }
        this.state.account && this.props.getUser(this.state.account)
    }
    render(){
        let { user, cattributes, myKitties, kitty, userActivity, specialCats, filteredCats } = this.props;
    return (
       <div>
            <div>
                <button onClick={(e)=>this.props.getUser(this.state.account)}>getUser</button>
                <p>{ user.address ?  user.address : null }</p>
                <p>{ cattributes[0] ? cattributes[0].description : null }</p>
                <p>{ myKitties.kitties ? myKitties.kitties[0].enhanced_cattributes[0].type: null }</p>
                <button onClick={(e)=>this.props.getKitty(myKitties.kitties[0].id)}>getKitty</button>
                <p>{ kitty.id ? kitty.matron.color : null }</p>
                <button onClick={(e)=>this.props.getSpecialCats()}>getSpecialCats</button>
                <p>{ specialCats[0] ? specialCats[0].name : null }</p>
                <button onClick={(e)=>this.props.getFilteredCats('0x4541e1ea15fab6920b6f0da0c31da0fea74e3535','normal','','','sale','sire','other','id','desc')}>getFilteredCats</button>
                <p>{ filteredCats.kitties ? filteredCats.kitties[0].enhanced_cattributes[0].type : null }</p>
            </div>
       </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        cattributes: state.cattributes,
        myKitties: state.myKitties,
        kitty: state.kitty,
        userActivity: state.userActivity,
        specialCats: state.specialCats,
        filteredCats: state.filteredCats
    }
}

export default connect(mapStateToProps, {getUser, getKitty, getUserActivity, getSpecialCats, getFilteredCats})(Settings);

