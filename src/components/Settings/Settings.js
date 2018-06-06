import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUser, createEmail, readNickname, updateMarketing, deleteWallet } from '../../ducks/reducer';
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
    }
    render(){
        let { user, settings } = this.props;
    return (<div>
                <div>
                    <h2 id="h2weighted">Edit user settings</h2>
                    <p>Your wallet address is <span>0x451e...</span> </p> <br/>
                    <img id="settings-profile-pic" src={`https://www.cryptokitties.co/profile/profile-${18}.png`} alt="profile-pic"/><br/>
                    <button onClick={(e)=>this.props.createEmail(`chandler@Settings.com`, `nickname_Settings`, true, true)}>CREATE</button>
                    <p>{ "CREATE" }</p>
                    <button onClick={(e)=>this.props.readNickname(3)}>READ</button>
                    <p>{ "READ" }</p>
                    <button onClick={(e)=>this.props.updateMarketing( 2, false)}>UPDATE</button>
                    <p>{ "UPDATE" }</p>
                    <button onClick={(e)=>this.props.deleteWallet(5)}>DELETE</button>
                    <p>{ "DELETE" }</p>
                </div>
                <div>
                <main class="Main">
                    <div class="Hero">
                        <div class="Container Container--sm Container--center">
                            <h2 class="Hero-h2">Edit user settings</h2>
                            <p class="Hero-description">Your wallet address is <span class="Hero-description--underline">0x4541e...</span></p>
                            <div class="SettingsForm">
                                <form>
                                    <div class="Section">
                                        <div class="SettingsForm-imageWrapper">
                                            <img alt="Settings Form" class="SettingsForm-image SettingsForm-image--clickable" src="/profile/profile-19.png"/>
                                        </div>
                                    </div>
                                    <div class="Section">
                                        <div class="SettingsForm-inputGroup">
                                            <div class="SettingsForm-inputGroup-label">
                                                <label for="nickname">Nickname</label>
                                            </div>
                                            <div class="SettingsForm-inputGroup-input">
                                                <p class="SettingsForm-inputGroup-description">Other users will see your nickname instead of your wallet address throughout CryptoKitties.</p>
                                                <input type="text" id="nickname" name="nickname" class="InputButtons InputButtons-input" placeholder="Nickname (optional)" value="the_dread_pirate_roberts" maxlength="40" autocomplete="off" autocorrect="off"/>
                                            </div>
                                        </div>
                                        <div class="SettingsForm-inputGroup SettingsForm-inputGroup--smallMarginBottom">
                                            <div class="SettingsForm-inputGroup-label">
                                                <label for="email">Email options</label>
                                            </div>
                                        <div class="SettingsForm-inputGroup-input">
                                            <p class="SettingsForm-inputGroup-description">We require your email to send you product and account-related updates.</p>
                                            <input type="email" id="email" name="email" class="InputButtons InputButtons-input" placeholder="Email address" value="chandlerhaueter@gmail.com" maxlength="100" autocapitalize="off" autocorrect="off"/>
                                        </div>
                                    </div>
                                    <div class="SettingsForm-inputGroup">
                                        <div class="SettingsForm-inputGroup-label">
                                        </div>
                                    <div class="SettingsForm-inputGroup-input">
                                        <div class="SettingsForm-checkboxWrapper">
                                            <div role="checkbox" class="Checkbox Checkbox--withBorder" aria-checked="false">
                                                <input type="checkbox" id="I want to get marketing updates (optional)" class="Checkbox-input" value="on"/>
                                                <label class="Checkbox-label" for="I want to get marketing updates (optional)">
                                                    <span class="Checkbox-label-text Checkbox-label-text--left">I want to get marketing updates (optional)</span>
                                                    <span class="Checkbox-label-icon">
                                                        <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16">
                                                            <rect width="14.5" height="14.5" x=".75" y=".75" fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="1.5" rx="3" vector-effect="non-scaling-stroke"></rect>
                                                        </svg>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="button" class="Button Button--love Button--larger">Save changes</button>
                                    </div>
                                </div>
                            </div>
                            <div class="Section SettingsForm-termsOfUseSection">
                                <div class="SettingsForm-inputGroup">
                                    <div class="SettingsForm-inputGroup-label">User privacy &amp; rights</div>
                                    <div class="SettingsForm-inputGroup-input">
                                        <p class="SettingsForm-inputGroup-description">
                                            <span>If you want to erase your user data or if you no longer agree to the Terms of Use or Privacy Policy, you may disconnect your wallet (0x4541e…) from CryptoKitties which means that you will no longer be able to access the website’s features.</span>
                                        </p>
                                        <p class="SettingsForm-inputGroup-description">Your nickname, email address, and IP address will be removed from our databases.</p>
                                        <p class="SettingsForm-inputGroup-description">Your CryptoKitties will not be lost. They will still be held in your wallet and you will be able to reconnect this wallet to CryptoKitties in the future as you know your seed phrases.</p>
                                        <button type="button" class="Button Button--larger">Disconnect wallet from CryptoKitties</button>
                                    </div>
                                </div>
                            </div>
                            <div class="Section">
                                <div class="Note Note--margins Note--warning">Make sure to save your MetaMask login information and account recovery details! We can’t help you regain access if you lose it.</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                </main>
            </div>
        </div>

    )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        settings: state.settings
    }
}

export default connect(mapStateToProps, {getUser, createEmail, readNickname, updateMarketing, deleteWallet})(Settings);

