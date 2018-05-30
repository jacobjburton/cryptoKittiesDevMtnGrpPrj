import React, { Component } from 'react';
import paper from '../../images/icons/paper.svg';
import wrench from '../../images/icons/wrench.svg';
import press from '../../images/icons/press.svg';
import logo from '../../images/icons/logo.svg';
import './SubNav.css';

class SubNav extends Component
{
    render()
    {
        return (
            <div className='subNav'>
                <a href="/about" className='subNavLinks'>
                    <img src={logo} alt="logo" className='subNavImg'/>
                    About
                </a>
                <a href="/press" className='subNavLinks'>
                    <img src={press} alt="press" className='subNavImg'/>
                    Press
                </a>
                <a href="/technical-details" className='subNavLinks'>
                    <img src={wrench} alt="wrench" className='subNavImg'/>
                    Technical Details
                </a>
                <a 
                    href="https://drive.google.com/file/d/1soo-eAaJHzhw_XhFGMJp3VNcQoM43byS/view" target="_black" rel="noopener noreferrer"
                    className='subNavLinks'
                >
                    <img src={paper} alt="whitePaper" className='subNavImg'/>
                    White Pa-purr
                </a>

                
            </div>
        )
    }   
}

export default SubNav;