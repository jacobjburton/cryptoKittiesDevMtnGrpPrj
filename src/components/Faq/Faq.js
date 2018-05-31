import React from 'react';
import kittyConfused from '../../images/images/kitty-confused-banner.svg';
import './Faq.css';

function Faq (props)
{
    return (
        <div className='faqBannerRoot'>
            <div className='faqBanner'>
                <div className='kittyConfusedBanner'>
                    <img src={kittyConfused} alt="kitty_confused_banner" className='faqBanner'/>
                </div>
            </div>
            <div className='faqGroup'>
                <h2 className='faqGroupTitle'>Getting Started</h2>
                <div className='faqGroupQuestions'>
                    <div className="collapse">
                        What do I need to play CryptoKitties?
                    </div>
                    <div className="collapse">
                        Installing MetaMask, your digital wallet        
                    </div>
                    <div className="collapse">
                        Why is MetaMask locked?
                    </div>
                    <div className="collapse">
                        Reinstalling MetaMask
                    </div>
                    <div className="collapse">
                        Getting Ether, your digital currency
                    </div>
                    <div className="collapse">
                        How to send ETH to MetaMask
                    </div>
                </div>
            </div>
            <div className='faqGroup'>
                <h2 className='faqGroupTitle'>Understanding CryptoKitties</h2>
                <div className='faqGroupQuestions'>
                    <div className="collapse">
                        What is CryptoKitties?
                    </div>
                    <div className="collapse">
                        What's the big deal about CryptoKitties?
                    </div>
                    <div className="collapse">
                        Woah, slow down Mr. Scientist - describe CryptoKitties in words that make sense to me
                    </div>
                    <div className="collapse">
                        So they're digital toys that are D.T.F.?
                    </div>
                    <div className="collapse">
                        Does it cost money to play CryptoKitties?
                    </div>
                </div>
            </div>
            <div className='faqGroup'>
                <h2 className='faqGroupTitle'>Buying and Selling</h2>
                <div className='faqGroupQuestions'>
                    <div className="collapse">
                        How do I get a CryptoKitty?
                    </div>
                    <div className="collapse">
                        How do I sell or breed CryptoKitties?        
                    </div>
                    <div className="collapse">
                        How much does it cost to buy a CryptoKitty?
                    </div>
                    <div className="collapse">
                        How many CryptoKitties do I need to get started?
                    </div>
                    <div className="collapse">
                        Why is it so complicated to get started with CryptoKitties?
                    </div>
                    <div className="collapse">
                        What's ether (ETH)? Why do I need it to play CryptoKitties?
                    </div>
                    <div className="collapse">
                        What is 'gas'?
                    </div>
                    <div className="collapse">
                        How do sale or siring auctions end?
                    </div>
                </div>
            </div>
            <div className='faqGroup'>
                <h2 className='faqGroupTitle'>Breeding</h2>
                <div className='faqGroupQuestions'>
                    <div className="collapse">
                        Can't you just create new CryptoKitties?
                    </div>
                    <div className="collapse">
                        Why does it cost ETH to breed a CryptoKitty?       
                    </div>
                    <div className="collapse">
                        Is my CryptoKitty a dame or a sire? A boy or a girl? A dad or a mom?
                    </div>
                    <div className="collapse">
                        How do I breed my Kitties together?
                    </div>
                    <div className="collapse">
                        How do I breed with other users' Kitties?
                    </div>
                    <div className="collapse">
                        How often can I breed CryptoKitties?
                    </div>
                    <div className="collapse">
                        What is 'gas'?
                    </div>
                    <div className="collapse">
                        How many CryptoKitties are there?
                    </div>
                    <div className="collapse">
                        What makes each CryptoKitty's 'genes' work? I want to breed a certain kind of cat...
                    </div>
                    <div className="collapse">
                        What are mewtations and Family Jewels?
                    </div>
                    <div className="collapse">
                        Why do cattributes sometimes change after they're released?
                    </div>
                </div>
            </div>
            <div className='faqGroup'>
                <h2 className='faqGroupTitle'>Fancy cats</h2>
                <div className='faqGroupQuestions'>
                    <div className="collapse">
                        What are Fancy Cats?
                    </div>
                    <div className="collapse">
                        How do you breed a Fancy Cat?        
                    </div>
                </div>
            </div>
            <div className='faqGroup'>
                <h2 className='faqGroupTitle'>Cat Codex</h2>
                <div className='faqGroupQuestions'>
                    <div className="collapse">
                        What is the Cat Codex?
                    </div>
                    <div className="collapse">
                        Why aren't my Fancy Cats showing up in the Cat Codex?   
                    </div>
                    <div className="collapse">
                        Why did my progress go down in my Cat Codex?
                    </div>
                </div>
            </div>
            <div className='faqGroup'>
                <h2 className='faqGroupTitle'>Other</h2>
                <div className='faqGroupQuestions'>
                    <div className="collapse">
                        Why can't I see my sale or siring auction in Etherscan?
                    </div>
                    <div className="collapse">
                        Is this a scam?        
                    </div>
                    <div className="collapse">
                        Are CryptoKitties like Bitcoin?
                    </div>
                    <div className="collapse">
                        Can I use a Credit Card to play CryptoKitties?
                    </div>
                    <div className="collapse">
                        Can I play CryptoKitties with my phone?
                    </div>
                    <div className="collapse">
                        How are you making money with CryptoKitties?
                    </div>
                    <div className="collapse">
                        How do I reach the CryptoKitties team regarding a project, partnership, or investment opportunity?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;