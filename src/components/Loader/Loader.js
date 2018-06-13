import React, { Component } from 'react';
import { connect } from 'react-redux';
import loading from '../../images/images/loader.gif';
import './Loader.css';

class Loader extends Component {



    render () {
        let { pending } = this.props;
        let loadingDisplay = pending ?
            <div className="Loader">
                <img className="Loader-img" src={loading} alt="loadingGif"/>
            </div>
        :
        null;    
        return (
            <div>
                {loadingDisplay}
            </div> 
        )
    }
}

function mapStateToProps (state) {
    return {
        pending: state.pending
    }
}

export default connect(mapStateToProps)(Loader);