import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { getAndSeedKitty } from '../../ducks/reducer';
import './Cat-dex.css';

class CatDex extends Component
{
    render () {
        let { seedKitty } = this.props;
        return (
            <div class="Codex">
                <div class="Container Container--lg">
                    <div class="Codex-container">
                        <div class="Codex-filters Codex-filters--expanded">
                            <div class="Codex-filter" role="button">
                                <div class="Progress" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">
                                    <div class="Progress-label Progress-label--highlight">
                                        <span class="Progress-label-text">Fancy</span>
                                        <div class="Badge Badge--grey--8">5%</div>
                                    </div>
                                    <div class="Progress-meter Progress-meter--small">
                                        <span class="Progress-meter-fill" style={{ width: 0 + '%' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <button
                        onClick={(e)=>this.props.getAndSeedKitty('1')}>
                            getAndSeedKitty
                        </button>
                        <br/>
                        <p>Hey show me an id> { seedKitty ?  seedKitty.id : null }</p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        seedKitty: state.seedKitty
    }
}

export default connect(mapStateToProps, {getAndSeedKitty})(CatDex);