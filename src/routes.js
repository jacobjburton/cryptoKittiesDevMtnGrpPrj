import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Help from './components/Help/Help';
import Kitty from './components/Kitty/Kitty';
import Marketplace from './components/Marketplace/Marketplace';
import Press from './components/Press/Press';
import Profile from './components/Profile/Profile';
import SignIn from './components/Sign-in/Sign-in';
import Catdex from './components/Cat-dex/Cat-dex';
import PrivacyPolicy from './components/Privacy-policy/Privacy-policy';
import SpecialCats from './components/Special-cats/Special-cats';
import TechDetails from './components/Tech-details/Tech-details';
import Terms from './components/Terms-of-use/Terms-of-use';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/faq' component={Faq}/>
        <Route path='/about' component={About}/>
        <Route path='/help' component={Help}/>
        <Route path='/kitty' component={Kitty}/>
        <Route path='/marketplace' component={Marketplace}/>
        <Route path='/press' component={Press}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/profile/id/catdex' component={Catdex}/>
        <Route path='/privacy-policy' component={PrivacyPolicy}/>
        <Route path='/profile/id/special-cats' component={SpecialCats}/>
        <Route path='/Technical-details' component={TechDetails}/>
        <Route path='/terms-of-use' component={Terms}/>
    </Switch>
)