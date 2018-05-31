import React, { Component } from 'react';
import SubNav from '../SubNav/SubNav';
import './Press.css';
import celebrate from '../../images/icons/celebrate.svg';
import location from '../../images/icons/location.svg';
import plant from '../../images/icons/plant.svg';
import fullLogo from '../../images/full-logo.png';
import logomark from '../../images/icons/logomark.svg';
import mascot01 from '../../images/images/mascot01.png';
import mascot02 from '../../images/images/mascot02.png';
import mascot03 from '../../images/images/mascot03.png';
import team from '../../images/images/team.jpg';
import share from '../../images/images/share.png';
import screenshot01 from '../../images/images/screenshot01.png';
import screenshot02 from '../../images/images/screenshot02.png';
import screenshot03 from '../../images/images/screenshot03.png';
import avatar from '../../images/images/avatar.png';
import spelling from '../../images/images/spelling.svg';
import logoBBC from '../../images/images/logoBBC.svg';
import logoBloomberg from '../../images/images/logoBloomberg.svg';
import logoWSJ from '../../images/images/logoWSJ.svg';

class Press extends Component
{
    render()
    {
        return (
            <div className="PressPage">
                <SubNav/>
                <div className="Container Container--sm">
                    <div>
                        <h1>For Press</h1>
                        <p>
                            CryptoKitties are collectible and breedable digital cats. It’s the world’s first game built on the Ethereum network. When two CryptoKitties breed, their offspring’s appearance and cattributes are determined by each parent’s 256-bit genome and an element of chance, leading to 4-billion possible genetic variations.
                        </p>
                        <p>
                            CryptoKitties was created to explore the concept of digital scarcity, implement a non-fungible token within smart contracts &nbsp;<span className="PressPage-highlight">ERC #721</span>, and make blockchain technology accessible to everyday consumers.
                        </p>                   </div>
                    <div className="PressPage-cardWrapper">
                        <div className="PressPage-card">
                            <img src={celebrate} alt="celebrate"/>
                            <p className='PressPage-card-p'>Founded:</p>
                            <h2 className="PressPage-card-h2">2017</h2>
                        </div>
                        <div className="PressPage-card">
                            <img src={location} alt="location"/>
                            <p className='PressPage-card-p'>Location:</p>
                            <h2 className="PressPage-card-h2">Vancouver, BC</h2>
                        </div>
                        <div className="PressPage-card">
                            <img src={plant} alt="plant"/>
                            <p className='PressPage-card-p'>Funding:</p>
                            <h2 className="PressPage-card-h2">Sustainable Revenue Model</h2>
                            <p className='PressPage-card-p'>Instead of an ICO.</p>
                        </div>
                    </div>
                </div>
                <div className="PressPage-section PressPage-bg">
                    <div className='Container Container-center'>
                        <h1 className="u-margin-bottom-md">CryptoKitties Team</h1>
                        <p>
                            The CryptoKitties team includes over a dozen startup founders, crypto-enthusiasts, and award-winning developers. While premiering the CryptoKitties alpha at ETHWaterloo, the team won the world’s largest Ethereum hackathon with their project.
                        </p>
                        <p>
                            CryptoKitties was created by <a className='u-link-text' href="https://www.axiomzen.co" target='_blank' rel='noopener noreferrer'>Axiom Zen</a>.
                        </p>
                    </div>
                </div>
                <div className="Container">
                    <div className="PressPage-section">
                        <h1 class="u-margin-bottom-lg">Product and brand assets</h1>
                        <div className="PressPage-assetWrapper">
                            <a 
                            className="PressPage-asset PressPage-asset-wide" 
                            href="../../images/logo.zip"
                            download
                            >
                                <img src={fullLogo} alt="logo" className="PressPage-asset-img"/>
                                <div className="PressPage-asset-footer">
                                    CryptoKitties logo
                                </div>
                            </a>
                            <a
                                className="PressPage-asset" 
                                href='../../images/icons/logomark.svg'
                                download
                            >
                                <img src={logomark} alt="logomark" className="PressPage-asset-img"/>
                                <div className="PressPage-asset-footer">
                                    CryptoKitties logomark
                                </div>
                            </a>
                            <a 
                                className="PressPage-asset"
                                href="../../images/images/mascot01.png"
                                download
                            >
                                <img className="PressPage-asset-img" src={mascot01} alt="mascot01"/>
                                <div className="PressPage-asset-footer">
                                    Twitch
                                </div>
                            </a>
                            <a 
                                className="PressPage-asset"
                                href="../../images/images/mascot02.png"
                                download
                            >
                                <img className="PressPage-asset-img" src={mascot02} alt="mascot02"/>
                                <div className="PressPage-asset-footer">
                                    Lola
                                </div>
                            </a>
                            <a 
                                className="PressPage-asset"
                                href="../../images/images/mascot03.png"
                                download
                            >
                                <img className="PressPage-asset-img" src={mascot03} alt="mascot03"/>
                                <div className="PressPage-asset-footer">
                                    Panther
                                </div>
                            </a>
                            <a 
                                className="PressPage-asset"
                                href="../../images/images/team.jpg"
                                download
                            >
                                <img className="PressPage-asset-img" src={team} alt="team"/>
                                <div className="PressPage-asset-footer">
                                    pressPage.brand.team
                                </div>
                            </a>
                            <a 
                                className="PressPage-asset"
                                href="../../images/images/share.png"
                                download
                            >
                                <img className="PressPage-asset-img" src={share} alt="banner"/>
                                <div className="PressPage-asset-footer">
                                    Banner
                                </div>
                            </a>
                            <a 
                                className="PressPage-asset"
                                href="../../images/images/screenshot01.png"
                                download
                            >
                                <img className="PressPage-asset-img" src={screenshot01} alt="screenshot01"/>
                                <div className="PressPage-asset-footer">
                                    Screenshot01
                                </div>
                            </a>
                            <a 
                                className="PressPage-asset"
                                href="../../images/images/screenshot02.png"
                                download
                            >
                                <img className="PressPage-asset-img" src={screenshot02} alt="screenshot02"/>
                                <div className="PressPage-asset-footer">
                                    Screenshot02
                                </div>
                            </a>
                            <a 
                                className="PressPage-asset"
                                href="../../images/images/screenshot03.png"
                                download
                            >
                                <img className="PressPage-asset-img" src={screenshot03} alt="screenshot03"/>
                                <div className="PressPage-asset-footer">
                                    Screenshot03
                                </div>
                            </a>
                            <a 
                                className="PressPage-asset"
                                href="../../images/images/avatar.png"
                                download
                            >
                                <img className="PressPage-asset-img" src={avatar} alt="avatar"/>
                                <div className="PressPage-asset-footer">
                                    CryptoKitties avatar
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="PressPage-section PressPage-section--spelling">
                        <h1 className="u-margin-bottom-md">Spelling</h1>
                        <p class="u-margin-bottom-md">
                            When referencing us, CryptoKitties is always written as a single word, with an uppercase C and an uppercase K.
                        </p>
                        <img className="u-margin-top-md" src={spelling} alt="Correct spelling"/>
                    </div>
                </div>
                <div className="PressPage-bg PressPage-section">
                    <div className="Container Container--lg Container--center">
                        <h1 className="u-margin-bottom-md">Press and Coverage</h1>
                        <div className="PressPage-cardWrapper PressPage-cardWrapper--expandMd">
                            <a 
                                className="PressPage-card"
                                href="http://www.bbc.com/news/technology-42237162"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="PressPage-outlet" src={logoBBC} alt="logoBBC"/>
                                <h2 className="PressPage-card-h2">CryptoKitties craze slows down transactions on Ethereum</h2>
                                <p class="u-margin-top-lg">-&nbsp; BBC</p>
                            </a>
                        </div>
                        <div className="PressPage-cardWrapper PressPage-cardWrapper--expandMd">
                            <a 
                                className="PressPage-card"
                                href="https://www.bloomberg.com/news/articles/2017-12-04/cryptokitties-quickly-becomes-most-widely-used-ethereum-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="PressPage-outlet" src={logoBloomberg} alt="logoBloomberg"/>
                                <h2 className="PressPage-card-h2">CryptoKitties Mania Overwhelms Ethereum Network's Processing</h2>
                                <p class="u-margin-top-lg">-&nbsp; Olga Kharif for Bloomberg</p>
                            </a>
                        </div>
                        <div className="PressPage-cardWrapper PressPage-cardWrapper--expandMd">
                            <a 
                                className="PressPage-card"
                                href="https://blogs.wsj.com/cio/2017/12/07/ethereum-network-copes-with-surge-of-activity-as-virtual-kitten-game-goes-viral"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="PressPage-outlet" src={logoWSJ} alt="logoWSJ"/>
                                <h2 className="PressPage-card-h2">Ethereum Network Copes With Surge of Activity as Virtual Kitten Game Goes Viral</h2>
                                <p class="u-margin-top-lg">-&nbsp; The Wall Street Journal</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Press;