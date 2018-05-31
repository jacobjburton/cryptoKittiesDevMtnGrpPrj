import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import './Settings.css';

class Settings extends Component {
    constructor() {
        super(); 
        this.state={
            account: null
        }
    }
    componentDidMount() {
        if (window.web3 && window.web3.currentProvider.isMetaMask) {

            window.web3.eth.getAccounts((error, accounts) => { 

            this.setState({ account: accounts[0] });
            console.log('received accounts[0]> ', accounts[0]);
            console.log('this.setState> this.state.account> ', this.state.account);
        })} else {
        console.log('MetaMask account not detected');
        }
    }
    render(){
        let { user, cattributes, myKitties } = this.props;
        console.log(cattributes[0]);
    return (
       <div>
            <div>
                <button onClick={(e)=>this.props.getUser(this.state.account)}>getUser </button>
                <p>{ user.address ?  user.address : null }</p>
                <p>{ user.nickname ?  user.nickname : null }</p>
                <p>{ user.image ?  user.image : null }</p>
                <p>{ cattributes[0] ? cattributes[0].description : null }</p>
                <p>{ cattributes[0] ? cattributes[0].type : null }</p>
                <p>{ cattributes[0] ? cattributes[0].total : null }</p>
                <p>{ myKitties.kitties ? myKitties.kitties[0].id : null }</p>
            </div>
            <div>
            </div>
       </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        cattributes: state.cattributes,
        myKitties: state.myKitties
    }
}

export default connect(mapStateToProps, {getUser})(Settings);

