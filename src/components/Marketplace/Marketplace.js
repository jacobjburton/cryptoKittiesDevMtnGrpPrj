import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Marketplace.css';
import {getFilteredCats} from '../../ducks/reducer';

class Marketplace extends Component {
    render() {
        return (
            <div></div>
//             <main class="Main">
//             <div class="BrowsePage">
//             <div class="BrowsePage-tabs">
//             <div class="Container Container--lg"><div class="TabNav">
//             <a class="TabNav-tab TabNav-tab--active" aria-current="true" data-tracking="mxpnl-tabNav-kitties" href="/marketplace">
//             All Kitties
//             </a>
//             <a class="TabNav-tab" aria-current="false" data-tracking="mxpnl-tabNav-gen0" href="/marketplace?include=sale&amp;orderBy=age&amp;orderDirection=asc&amp;search=gen:0">
//             Gen 0
//             </a>
//             </div>
//             </div>
//             </div>
//             <div class="KittiesToolbar">
//             <div class="KittiesToolbar-searchBar">
//             <div class="Container Container--lg">
//             <div class="SearchBar"><div class="SearchBar-container">
//             <div class="SearchBar-icon">
//             <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16">
//             <g fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" vector-effect="non-scaling-stroke">
//             <path d="M11.438 11.438c2.379-2.379 2.379-6.275 0-8.654C9.06.405 5.163.405 2.784 2.784c-2.379 2.378-2.379 6.275 0 8.654 2.378 2.379 6.275 2.379 8.654 0z">
//             </path>
//             <path stroke-linecap="round" d="M11.911 11.911l2.845 2.845">
//             </path>
//             </g>
//             </svg>
//             </div>
//             <input type="text" class="SearchBar-input" value="" placeholder="Search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></input>
//             <div class="SearchBar-actionGroups">
//             <div class="SearchBar-actionGroup">
//             <button type="button" class="SearchBar-action SearchBar-action--active">
//             filters 
//             <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="24" height="24" viewBox="0 0 16 16">
//             <g fill="none" fill-rule="evenodd" stroke="#EF52D1" stroke-width="1.5" transform="matrix(-1 0 0 1 12.48 2.56)" vector-effect="non-scaling-stroke">
//             <g stroke-linecap="round">
//             <path d="M0 1.28h1.276m3.204 0h4.48M0 5.12h1.186m2.86 0H8.96M0 9.28h1.356m3.124 0h4.48">
//             </path>
//             </g>
//             <circle cx="2.62" cy="1.12" r="1.12">
//             </circle>
//             <circle cx="2.62" cy="5.12" r="1.12">
//             </circle>
//             <circle cx="2.62" cy="9.12" r="1.12"></circle>
//             </g>
//             </svg>
//             </button>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="KittiesToolbar-filters">
//             <div class="Container Container--lg">
//             <div class="KittiesFilter-groups">
//             <div class="KittiesFilter-group">
//             <div class="KittiesFilter-group-title">
//             Kitty type
//             </div>
//             <div class="KittiesFilter-group-content">
//             <div class="KittiesFilter-list KittiesFilter-list--sm">
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Normal
//             </span>
//             </div>
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Fancy
//             </span>
//             </div>
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Exclusive
//             </span>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="KittiesFilter-group">
//             <div class="KittiesFilter-group-title">
//             Generation
//             </div>
//             <div class="KittiesFilter-group-content">
//             <div class="KittiesFilter-number">
//             <input type="number" step="1" min="0" class="KittiesFilter-number-input Number" value="" placeholder="All"/>
//             <div class="KittiesFilter-number-reset">
//             <span class="KittiesFilter-number-reset-button KittiesFilter-number-reset-button--isDisabled" role="button">
//             Reset
//             </span>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="KittiesFilter-group">
//             <div class="KittiesFilter-group-title">
//             Cooldown
//             </div>
//             <div class="KittiesFilter-group-content">
//             <div class="KittiesFilter-list">
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Fast
//             </span>
//             </div>
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Swift
//             </span>
//             </div>
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Snappy
//             </span>
//             </div>
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Brisk
//             </span>
//             </div>
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Plodding
//             </span>
//             </div>
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Slow
//             </span>
//             </div>
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Sluggish
//             </span>
//             </div>
//             <div class="KittiesFilter-list-item" role="button">
//             <span>
//             Catatonic
//             </span>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="KittiesToolbar-includeAndSort">
//             <div class="Container Container--lg">
//             <div class="KittiesToolbar-includeAndSort-container">
//             <div class="KittiesToolbar-include">
//             <span class="KittiesToolbar-label">
//             include
//             </span>
//             <div class="KittiesToolbar-include-options">
//             <div class="SelectionGroup SelectionGroup--display-inlineFlex">
//             <div class="SelectionGroup-item">
//             <div role="checkbox" class="Checkbox Checkbox--checked Checkbox--disabled Checkbox--lowercase" aria-checked="true">
//             <input type="checkbox" id="For Sale" class="Checkbox-input" disabled="" value="on"/>
//             <label class="Checkbox-label" for="For Sale">
//             <span class="Checkbox-label-icon">
//             <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16">
//             <path fill="none" fill-rule="evenodd" stroke="#EF52D1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5.333 7.023L8.06 10l5.843-7.737a.5.5 0 0 1 .9.301v10.272a2 2 0 0 1-2 2H3.11a2 2 0 0 1-2-2V3.072a2 2 0 0 1 2-2H9.73" vector-effect="non-scaling-stroke">
//             </path>
//             </svg>
//             </span>
//             <span class="Checkbox-label-text Checkbox-label-text--right">
//             For Sale
//             </span>
//             </label>
//             </div>
//             </div>
//             <div class="SelectionGroup-item">
//             <div role="checkbox" class="Checkbox Checkbox--lowercase" aria-checked="false">
//             <input type="checkbox" id="Siring" class="Checkbox-input" value="on"/>
//             <label class="Checkbox-label" for="Siring">
//             <span class="Checkbox-label-icon">
//             <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16">
//             <rect width="14.5" height="14.5" x=".75" y=".75" fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="1.5" rx="3" vector-effect="non-scaling-stroke">
//             </rect>
//             </svg>
//             </span>
//             <span class="Checkbox-label-text Checkbox-label-text--right">
//             Siring
//             </span>
//             </label>
//             </div>
//             </div>
//             <div class="SelectionGroup-item">
//             <div role="checkbox" class="Checkbox Checkbox--lowercase" aria-checked="false">
//             <input type="checkbox" id="Other" class="Checkbox-input" value="on"/>
//             <label class="Checkbox-label" for="Other">
//             <span class="Checkbox-label-icon">
//             <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16">
//             <rect width="14.5" height="14.5" x=".75" y=".75" fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="1.5" rx="3" vector-effect="non-scaling-stroke">
//             </rect>
//             </svg>
//             </span>
//             <span class="Checkbox-label-text Checkbox-label-text--right">
//             Other
//             </span>
//             </label>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="KittiesToolbar-sort">
//             <span class="KittiesToolbar-label KittiesToolbar-label--alwaysVisible">
//             Sort by
//             </span>
//             <div class="KittiesToolbar-sort-options">
//             <div class="SelectionGroup SelectionGroup--display-inlineFlex">
//             <div class="SelectionGroup-item">
//             <div role="menu" class="Select-container">
//             <select class="Select" placeholder="">
//             <option value="current_price">
//             Price
//             </option>
//             <option value="age">
//             Age
//             </option>
//             <option value="generation">
//             Generation
//             </option>
//             <option value="cooldown">
//             Cooldown
//             </option>
//             <option value="purr_count">
//             Likes
//             </option>
//             </select>
//             <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock Select-icon" width="16" height="16" viewBox="0 0 16 16">
//             <path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#c4c3c0" fill-rule="evenodd">
//             </path>
//             </svg>
//             </div>
//             </div>
//             <div class="SelectionGroup-item">
//             <div role="menu" class="Select-container">
//             <select class="Select" placeholder="">
//             <option value="asc">
//             Low to high
//             </option>
//             <option value="desc">
//             High to low
//             </option>
//             </select>
//             <svg class="IconV2 IconV2--position-default IconV2--display-inlineBlock Select-icon" width="16" height="16" viewBox="0 0 16 16">
//             <path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#c4c3c0" fill-rule="evenodd">
//             </path>
//             </svg>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="KittiesToolbar-count">
//             <div class="Container Container--lg">
//             <span>
//             147185 Kitties
//             </span>
//             </div>
//             </div>
//             </div>
//             <div class="BrowseKittyGallery">
//             <div class="KittiesGallery">
//             <div class="Container Container--lg">
//             <div class="KittiesGrid">
//             <div class="KittiesGrid-item">
//             <a aria-current="false" href="/kitty/615010">
//             <div class="KittyCard-wrapper">
//             <div class="KittyCard KittyCard--bg-sapphire KittyCard--responsive KittyCard--shadow-sapphire">
//             <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/615010.svg" alt="G5 4/5"/>
//             <div class="KittyCard-status">
//             <div class="KittyStatus">
//             <div class="KittyStatus-item">
//             <span class="KittyStatus-itemIcon">
//             <i class="Icon Icon--tag">
//             </i>
//             </span>
//             <span class="KittyStatus-itemText">
//             <span class="KittyStatus-label">
//             For sale
//             </span>
//             <span class="KittyStatus-note">
//             <small>
//             Ξ
//             </small>
//              0.0025
//              </span>
//              </span>
//              </div>
//              </div>
//              </div>
//              </div>
//              <div class="KittyCard-details">
//              <span class="KittyCard-details-item KittyCard-details-item--highlight">
//              Kitty 615010
//              </span>
//              <span class="KittyCard-details-item">
//              <span>
//              Gen 5
//              </span>
//              </span>
//              <span class="KittyCard-details-item">
//              Plodding
//              </span>
//              </div>
//              <div class="KittyCard-actions">
//              <span class="KittyCard-actions-action">
//              <span class="PurrBadge" role="button">
//              <span class="PurrBadge-hearts">
//              <span class="PurrBadge-heart">
//              <svg width="22" height="22" viewBox="0 0 22 22">
//              <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//              </path>
//              </svg>
//              </span>
//              <span class="PurrBadge-heartFill">
//              <svg width="22" height="22" viewBox="0 0 22 22">
//              <g fill="none" fill-rule="evenodd">
//              <g transform="translate(4 5.546)">
//              <mask id="b" fill="#fff">
//              <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//              </path>
//              </mask>
//              <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//              </path>
//              <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//              </path>
//              <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//              </path>
//              </g>
//              <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//              </path>
//              </g>
//              </svg>
//              </span>
//              </span>
//              <span class="PurrBadge-count">
//              4
//              </span>
//              </span>
//              </span>
//              </div>
//              </div>
//              </a>
//              </div>
//              <div class="KittiesGrid-item">
//              <a aria-current="false" href="/kitty/615361">
//              <div class="KittyCard-wrapper">
//              <div class="KittyCard KittyCard--bg-sapphire KittyCard--responsive KittyCard--shadow-sapphire">
//              <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/615361.svg" alt="G7 4.8/9 Add Harbour"/>
//              <div class="KittyCard-status">
//              <div class="KittyStatus">
//              <div class="KittyStatus-item">
//              <span class="KittyStatus-itemIcon">
//              <i class="Icon Icon--tag">
//              </i>
//              </span>
//              <span class="KittyStatus-itemText">
//              <span class="KittyStatus-label">
//              For sale
//              </span>
//              <span class="KittyStatus-note">
//              <small>
//              Ξ
//              </small>
//               0.0025
//               </span>
//               </span>
//               </div>
//               </div>
//               </div>
//               </div>
//               <div class="KittyCard-details">
//               <span class="KittyCard-details-item KittyCard-details-item--highlight">
//               Kitty 615361
//               </span>
//               <span class="KittyCard-details-item">
//               <span>
//               Gen 7
//               </span>
//               </span>
//               <span class="KittyCard-details-item">
//               Plodding
//               </span>
//               </div>
//               <div class="KittyCard-actions">
//               <span class="KittyCard-actions-action">
//               <span class="PurrBadge" role="button">
//               <span class="PurrBadge-hearts">
//               <span class="PurrBadge-heart">
//               <svg width="22" height="22" viewBox="0 0 22 22">
//               <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//               </path>
//               </svg>
//               </span>
//               <span class="PurrBadge-heartFill">
//               <svg width="22" height="22" viewBox="0 0 22 22">
//               <g fill="none" fill-rule="evenodd">
//               <g transform="translate(4 5.546)">
//               <mask id="b" fill="#fff">
//               <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//               </path>
//               </mask>
//               <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//               </path>
//               <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//               </path>
//               <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//               </path>
//               </g>
//               <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//               </path>
//               </g>
//               </svg>
//               </span>
//               </span>
//               <span class="PurrBadge-count">
//               3
//               </span>
//               </span>
//               </span>
//               </div>
//               </div>
//               </a>
//               </div>
//               <div class="KittiesGrid-item">
//               <a aria-current="false" href="/kitty/613497">
//               <div class="KittyCard-wrapper">
//               <div class="KittyCard KittyCard--bg-strawberry KittyCard--responsive KittyCard--shadow-strawberry">
//               <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/613497.svg" alt="G5 4/5 Add Sapphire"/>
//               <div class="KittyCard-status">
//               <div class="KittyStatus">
//               <div class="KittyStatus-item">
//               <span class="KittyStatus-itemIcon">
//               <i class="Icon Icon--tag">
//               </i>
//               </span>
//               <span class="KittyStatus-itemText">
//               <span class="KittyStatus-label">
//               For sale
//               </span>
//               <span class="KittyStatus-note">
//               <small>
//               Ξ
//               </small>
//                0.0025
//                </span>
//                </span>
//                </div>
//                </div>
//                </div>
//                </div>
//                <div class="KittyCard-details">
//                <span class="KittyCard-details-item KittyCard-details-item--highlight">
//                Kitty 613497
//                </span>
//                <span class="KittyCard-details-item"><span>
//                Gen 5
//                </span>
//                </span>
//                <span class="KittyCard-details-item">
//                Slow
//                </span>
//                </div>
//                <div class="KittyCard-actions">
//                <span class="KittyCard-actions-action">
//                <span class="PurrBadge" role="button">
//                <span class="PurrBadge-hearts">
//                <span class="PurrBadge-heart">
//                <svg width="22" height="22" viewBox="0 0 22 22">
//                <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//                </path>
//                </svg>
//                </span>
//                <span class="PurrBadge-heartFill">
//                <svg width="22" height="22" viewBox="0 0 22 22"><g fill="none" fill-rule="evenodd">
//                <g transform="translate(4 5.546)">
//                <mask id="b" fill="#fff">
//                <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                </path>
//                </mask>
//                <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                </path>
//                <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//                </path>
//                <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//                </path>
//                </g>
//                <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//                </path>
//                </g>
//                </svg>
//                </span>
//                </span>
//                <span class="PurrBadge-count">
//                2
//                </span>
//                </span>
//                </span>
//                </div>
//                </div>
//                </a>
//                </div>
//                <div class="KittiesGrid-item">
//                <a aria-current="false" href="/kitty/612738">
//                <div class="KittyCard-wrapper">
//                <div class="KittyCard KittyCard--bg-coralsunrise KittyCard--responsive KittyCard--shadow-coralsunrise">
//                <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/612738.svg" alt="G5 3.8/5"/>
//                <div class="KittyCard-status">
//                <div class="KittyStatus">
//                <div class="KittyStatus-item">
//                <span class="KittyStatus-itemIcon">
//                <i class="Icon Icon--tag">
//                </i>
//                </span>
//                <span class="KittyStatus-itemText">
//                <span class="KittyStatus-label">
//                For sale
//                </span>
//                <span class="KittyStatus-note">
//                <small>
//                 Ξ
//                 </small>
//                  0.0025
//                  </span>
//                  </span>
//                  </div>
//                  </div>
//                  </div>
//                  </div>
//                  <div class="KittyCard-details">
//                  <span class="KittyCard-details-item KittyCard-details-item--highlight">
//                  Kitty 612738
//                  </span>
//                  <span class="KittyCard-details-item">
//                  <span>
//                 Gen 5
//                 </span>
//                 </span>
//                 <span class="KittyCard-details-item">
//                 Plodding
//                 </span>
//                 </div>
//                 <div class="KittyCard-actions">
//                 <span class="KittyCard-actions-action">
//                 <span class="PurrBadge" role="button">
//                 <span class="PurrBadge-hearts">
//                 <span class="PurrBadge-heart">
//                 <svg width="22" height="22" viewBox="0 0 22 22">
//                 <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z"></path></svg></span><span class="PurrBadge-heartFill">
//                 <svg width="22" height="22" viewBox="0 0 22 22">
//                 <g fill="none" fill-rule="evenodd">
//                 <g transform="translate(4 5.546)">
//                 <mask id="b" fill="#fff">
//                 <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                 </path>
//                 </mask>
//                 <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                 </path>
//                 <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//                 </path>
//                 <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//                 </path>
//                 </g>
//                 <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//                 </path>
//                 </g>
//                 </svg>
//                 </span>
//                 </span>
//                 <span class="PurrBadge-count">
//                 2
//                 </span>
//                 </span>
//                 </span>
//                 </div>
//                 </div>
//                 </a>
//                 </div>
//                 <div class="KittiesGrid-item">
//                 <a aria-current="false" href="/kitty/611521">
//                 <div class="KittyCard-wrapper">
//                 <div class="KittyCard KittyCard--bg-strawberry KittyCard--responsive KittyCard--shadow-strawberry">
//                 <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/611521.svg" alt="G5 4/5 Add Sapphire"/>
//                 <div class="KittyCard-status">
//                 <div class="KittyStatus">
//                 <div class="KittyStatus-item">
//                 <span class="KittyStatus-itemIcon">
//                 <i class="Icon Icon--tag">
//                 </i>
//                 </span>
//                 <span class="KittyStatus-itemText">
//                 <span class="KittyStatus-label">
//                 For sale
//                 </span>
//                 <span class="KittyStatus-note">
//                 <small>
//                 Ξ
//                 </small>
//                  0.0025
//                  </span>
//                  </span>
//                  </div>
//                  </div>
//                  </div>
//                  </div>
//                  <div class="KittyCard-details">
//                  <span class="KittyCard-details-item KittyCard-details-item--highlight">
//                  Kitty 611521
//                  </span>
//                  <span class="KittyCard-details-item">
//                  <span>
//                     Gen 5
//                      </span>
//                      </span>
//                      <span class="KittyCard-details-item">
//                      Slow
//                      </span>
//                      </div>
//                      <div class="KittyCard-actions">
//                      <span class="KittyCard-actions-action">
//                      <span class="PurrBadge" role="button">
//                      <span class="PurrBadge-hearts">
//                      <span class="PurrBadge-heart">
//                      <svg width="22" height="22" viewBox="0 0 22 22">
//                      <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//                      </path>
//                      </svg>
//                      </span>
//                      <span class="PurrBadge-heartFill">
//                      <svg width="22" height="22" viewBox="0 0 22 22">
//                      <g fill="none" fill-rule="evenodd">
//                      <g transform="translate(4 5.546)">
//                      <mask id="b" fill="#fff">
//                      <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                      </path>
//                      </mask>
//                      <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                      </path>
//                      <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//                      </path>
//                      <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//                      </path>
//                      </g>
//                      <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//                      </path>
//                      </g>
//                      </svg>
//                      </span>
//                      </span>
//                      <span class="PurrBadge-count">
//                      3
//                      </span>
//                      </span>
//                      </span>
//                      </div>
//                      </div>
//                      </a>
//                      </div>
//                      <div class="KittiesGrid-item">
//                      <a aria-current="false" href="/kitty/768914">
//                      <div class="KittyCard-wrapper">
//                      <div class="KittyCard KittyCard--bg-mintgreen KittyCard--responsive KittyCard--shadow-mintgreen">
//                      <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/768914.svg" alt="Kitty #768914"/>
//                      <div class="KittyCard-status">
//                      <div class="KittyStatus">
//                      <div class="KittyStatus-item">
//                      <span class="KittyStatus-itemIcon">
//                      <i class="Icon Icon--tag">
//                      </i>
//                      </span>
//                      <span class="KittyStatus-itemText">
//                      <span class="KittyStatus-label">
//                      For sale
//                      </span>
//                      <span class="KittyStatus-note">
//                      <small>
//                          Ξ
//                          </small>
//                           0.0029
//                           </span>
//                           </span>
//                           </div>
//                           </div>
//                           </div>
//                           </div>
//                           <div class="KittyCard-details">
//                           <span class="KittyCard-details-item KittyCard-details-item--highlight KittyCard-details-item--isChinese">
//                           Kitty 768914
//                           </span>
//                           <span class="KittyCard-details-item">
//                           <span>
//                               Gen 9
//                               </span>
//                               </span>
//                               <span class="KittyCard-details-item">
//                               Snappy
//                               </span>
//                               </div>
//                               <div class="KittyCard-actions">
//                               <span class="KittyCard-actions-action">
//                               <span class="PurrBadge" role="button">
//                               <span class="PurrBadge-hearts">
//                               <span class="PurrBadge-heart">
//                               <svg width="22" height="22" viewBox="0 0 22 22">
//                               <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//                               </path>
//                               </svg>
//                               </span>
//                               <span class="PurrBadge-heartFill">
//                               <svg width="22" height="22" viewBox="0 0 22 22">
//                               <g fill="none" fill-rule="evenodd">
//                               <g transform="translate(4 5.546)">
//                               <mask id="b" fill="#fff">
//                               <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                               </path>
//                               </mask>
//                               <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                               </path>
//                               <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//                               </path>
//                               <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//                               </path>
//                               </g>
//                               <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//                               </path>
//                               </g>
//                               </svg>
//                               </span>
//                               </span>
//                               <span class="PurrBadge-count">
//                               2
//                               </span>
//                               </span>
//                               </span>
//                               </div>
//                               </div>
//                               </a>
//                               </div>
//                               <div class="KittiesGrid-item">
//                               <a aria-current="false" href="/kitty/701828">
//                               <div class="KittyCard-wrapper">
//                               <div class="KittyCard KittyCard--bg-limegreen KittyCard--responsive KittyCard--shadow-limegreen">
//                               <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/701828.svg" alt="CC BB SS 3/6"/>
//                               <div class="KittyCard-status">
//                               <div class="KittyStatus">
//                               <div class="KittyStatus-item">
//                               <span class="KittyStatus-itemIcon">
//                               <i class="Icon Icon--tag">
//                               </i>
//                               </span>
//                               <span class="KittyStatus-itemText">
//                               <span class="KittyStatus-label">
//                               For sale
//                               </span>
//                               <span class="KittyStatus-note">
//                               <small>
//                                   Ξ
//                                   </small>
//                                    0.003
//                                    </span>
//                                    </span>
//                                    </div>
//                                    </div>
//                                    </div>
//                                    </div>
//                                    <div class="KittyCard-details">
//                <span class="KittyCard-details-item KittyCard-details-item--highlight KittyCard-details-item--isChinese">
//                Kitty 701828
//                </span>
//                <span class="KittyCard-details-item">
//                <span>
//                    Gen 6
//                    </span>
//                    </span>
//                    <span class="KittyCard-details-item">
//                    Plodding
//                    </span>
//                    </div>
//                    <div class="KittyCard-actions">
//                    <span class="KittyCard-actions-action">
//                    <span class="PurrBadge" role="button">
//                    <span class="PurrBadge-hearts">
//                    <span class="PurrBadge-heart">
//                    <svg width="22" height="22" viewBox="0 0 22 22">
//                    <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//                    </path>
//                    </svg>
//                    </span>
//                    <span class="PurrBadge-heartFill">
//                    <svg width="22" height="22" viewBox="0 0 22 22">
//                    <g fill="none" fill-rule="evenodd">
//                    <g transform="translate(4 5.546)">
//                    <mask id="b" fill="#fff">
//                    <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                    </path>
//                    </mask>
//                    <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                    </path>
//                    <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//                    </path>
//                    <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//                    </path>
//                    </g>
//                    <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//                    </path>
//                    </g>
//                    </svg>
//                    </span>
//                    </span>
//                    <span class="PurrBadge-count">
//                    1
//                    </span>
//                    </span>
//                    </span>
//                    </div>
//                    </div>
//                    </a>
//                    </div>
//                    <div class="KittiesGrid-item">
//                    <a aria-current="false" href="/kitty/699145">
//                    <div class="KittyCard-wrapper">
//                    <div class="KittyCard KittyCard--bg-sapphire KittyCard--responsive KittyCard--shadow-sapphire">
//                    <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/699145.svg" alt="Kitty #699145"/>
//                    <div class="KittyCard-status">
//                    <div class="KittyStatus">
//                    <div class="KittyStatus-item">
//                    <span class="KittyStatus-itemIcon">
//                    <i class="Icon Icon--tag">
//                    </i>
//                    </span>
//                    <span class="KittyStatus-itemText">
//                    <span class="KittyStatus-label">
//                    For sale
//                    </span>
//                    <span class="KittyStatus-note">
//                    <small>
//                        Ξ
//                        </small>
//                         0.003
//                         </span>
//                         </span>
//                         </div>
//                         </div>
//                         </div>
//                         </div>
//                         <div class="KittyCard-details">
//                         <span class="KittyCard-details-item KittyCard-details-item--highlight KittyCard-details-item--isChinese">
//                         Kitty 699145
//                         </span>
//                         <span class="KittyCard-details-item">
//                         <span>
//                             Gen 6
//                             </span>
//                             </span>
//                             <span class="KittyCard-details-item">
//                             Brisk
//                             </span>
//                             </div>
//                             <div class="KittyCard-actions">
//                             <span class="KittyCard-actions-action">
//                             <span class="PurrBadge" role="button">
//                             <span class="PurrBadge-hearts">
//                             <span class="PurrBadge-heart">
//                             <svg width="22" height="22" viewBox="0 0 22 22">
//                             <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//                             </path>
//                             </svg>
//                             </span>
//                             <span class="PurrBadge-heartFill">
//                             <svg width="22" height="22" viewBox="0 0 22 22">
//                             <g fill="none" fill-rule="evenodd">
//                             <g transform="translate(4 5.546)">
//                             <mask id="b" fill="#fff">
//                             <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                             </path>
//                             </mask>
//                             <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                             </path>
//                             <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//                             </path>
//                             <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//                             </path>
//                             </g>
//                             <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//                             </path>
//                             </g>
//                             </svg>
//                             </span>
//                             </span>
//                             <span class="PurrBadge-count">
//                             1
//                             </span>
//                             </span>
//                             </span>
//                             </div>
//                             </div>
//                             </a>
//                             </div>
//                             <div class="KittiesGrid-item">
//                             <a aria-current="false" href="/kitty/693141">
//                             <div class="KittyCard-wrapper">
//                             <div class="KittyCard KittyCard--bg-topaz KittyCard--responsive KittyCard--shadow-topaz">
//                             <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/693141.svg" alt="Kitty #693141"/>
//                             <div class="KittyCard-status">
//                             <div class="KittyStatus">
//                             <div class="KittyStatus-item">
//                             <span class="KittyStatus-itemIcon">
//                             <i class="Icon Icon--tag">
//                             </i>
//                             </span>
//                             <span class="KittyStatus-itemText">
//                             <span class="KittyStatus-label">
//                             For sale
//                             </span>
//                             <span class="KittyStatus-note">
//                             <small>
//                                 Ξ
//                                 </small>
//                                  0.003
//                                  </span>
//                                  </span>
//                                  </div>
//                                  </div>
//                                  </div>
//                                  </div>
//                                  <div class="KittyCard-details">
//                                  <span class="KittyCard-details-item KittyCard-details-item--highlight">
//                                  Kitty 693141
//                                  </span>
//                                  <span class="KittyCard-details-item">
//                                  <span>
//                                      Gen 6
//                                      </span>
//                                      </span>
//                                      <span class="KittyCard-details-item">
//                                      Plodding
//                                      </span>
//                                      </div>
//                                      <div class="KittyCard-actions">
//                                      <span class="KittyCard-actions-action">
//                                      <span class="PurrBadge" role="button">
//                                      <span class="PurrBadge-hearts">
//                                      <span class="PurrBadge-heart">
//                                      <svg width="22" height="22" viewBox="0 0 22 22">
//                                      <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//                                      </path>
//                                      </svg>
//                                      </span>
//                                      <span class="PurrBadge-heartFill">
//                                      <svg width="22" height="22" viewBox="0 0 22 22">
//                                      <g fill="none" fill-rule="evenodd">
//                                      <g transform="translate(4 5.546)">
//                                      <mask id="b" fill="#fff">
//                                      <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                                      </path>
//                                      </mask>
//                                      <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                                      </path>
//                                      <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//                                      </path>
//                                      <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//                                      </path>
//                                      </g>
//                                      <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//                                      </path>
//                                      </g>
//                                      </svg>
//                                      </span>
//                                      </span>
//                                      <span class="PurrBadge-count">
//                                      2
//                                      </span>
//                                      </span>
//                                      </span>
//                                      </div>
//                                      </div>
//                                      </a>
//                                      </div>
//                                      <div class="KittiesGrid-item">
//                                      <a aria-current="false" href="/kitty/616839">
//                                      <div class="KittyCard-wrapper">
//                                      <div class="KittyCard KittyCard--bg-topaz KittyCard--responsive KittyCard--shadow-topaz">
//                                      <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/616839.svg" alt="Kitty #616839"/>
//                                      <div class="KittyCard-status">
//                                      <div class="KittyStatus">
//                                      <div class="KittyStatus-item">
//                                      <span class="KittyStatus-itemIcon">
//                                      <i class="Icon Icon--tag">
//                                      </i>
//                                      </span>
//                                      <span class="KittyStatus-itemText">
//                                      <span class="KittyStatus-label">
//                                      For sale
//                                      </span>
//                                      <span class="KittyStatus-note">
//                                      <small>
//                                          Ξ
//                                          </small>
//                                           0.003
//                                           </span>
//                                           </span>
//                                           </div>
//                                           </div>
//                                           </div>
//                                           </div>
//                                           <div class="KittyCard-details">
//                                           <span class="KittyCard-details-item KittyCard-details-item--highlight">
//                                           Kitty 616839
//                                           </span>
//                                           <span class="KittyCard-details-item">
//                                           <span>
//                                               Gen 8
//                                               </span>
//                                               </span>
//                                               <span class="KittyCard-details-item">
//                                               Plodding
//                                               </span>
//                                               </div>
//                                               <div class="KittyCard-actions">
//                                               <span class="KittyCard-actions-action">
//                                               <span class="PurrBadge" role="button">
//                                               <span class="PurrBadge-hearts">
//                <span class="PurrBadge-heart">
//                <svg width="22" height="22" viewBox="0 0 22 22">
//                <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//                </path>
//                </svg>
//                </span>
//                <span class="PurrBadge-heartFill">
//                <svg width="22" height="22" viewBox="0 0 22 22">
//                <g fill="none" fill-rule="evenodd">
//                <g transform="translate(4 5.546)">
//                <mask id="b" fill="#fff">
//                <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                </path>
//                </mask>
//                <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                </path>
//                <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//                </path>
//                <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//                </path>
//                </g>
//                <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//                </path>
//                </g>
//                </svg>
//                </span>
//                </span>
//                <span class="PurrBadge-count">
//                2
//                </span>
//                </span>
//                </span>
//                </div>
//                </div>
//                </a>
//                </div>
//                <div class="KittiesGrid-item">
//                <a aria-current="false" href="/kitty/769421">
//                <div class="KittyCard-wrapper">
//                <div class="KittyCard KittyCard--bg-mintgreen KittyCard--responsive KittyCard--shadow-mintgreen">
//                <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/769421.svg" alt="Kitty #769421"/>
//                <div class="KittyCard-status">
//                <div class="KittyStatus">
//                <div class="KittyStatus-item">
//                <span class="KittyStatus-itemIcon">
//                <i class="Icon Icon--tag">
//                </i>
//                </span>
//                <span class="KittyStatus-itemText">
//                <span class="KittyStatus-label">
//                For sale
//                </span>
//                <span class="KittyStatus-note">
//                <small>
//                 Ξ
//                </small>
//                 0.003
//                </span>
//                </span>
//                </div>
//                </div>
//                </div>
//                </div>
//                <div class="KittyCard-details">
//                <span class="KittyCard-details-item KittyCard-details-item--highlight">
//                Kitty 769421
//                </span>
//                <span class="KittyCard-details-item">
//                <span>
//                    Gen 6

//                </span>
//                </span>
//                <span class="KittyCard-details-item">
//                Snappy
//                </span>
//                </div>
//                <div class="KittyCard-actions">
//                <span class="KittyCard-actions-action">
//                <span class="PurrBadge" role="button">
//                <span class="PurrBadge-hearts">
//                <span class="PurrBadge-heart">
//                <svg width="22" height="22" viewBox="0 0 22 22">
//                <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//                </path>
//                </svg>
//                </span>
//                <span class="PurrBadge-heartFill">
//                <svg width="22" height="22" viewBox="0 0 22 22">
//                <g fill="none" fill-rule="evenodd">
//                <g transform="translate(4 5.546)">
//                <mask id="b" fill="#fff">
//                <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                </path>
//                </mask>
//                <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                </path>
//                <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//                </path>
//                <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//                </path>
//                </g>
//                <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//                </path>
//                </g>
//                </svg>
//                </span>
//                </span>
//                <span class="PurrBadge-count">
//                2
//                </span>
//                </span>
//                </span>
//                </div>
//                </div>
//                </a>
//                </div>
//                <div class="KittiesGrid-item">
//                <a aria-current="false" href="/kitty/783915">
//                <div class="KittyCard-wrapper">
//                <div class="KittyCard KittyCard--bg-coralsunrise KittyCard--responsive KittyCard--shadow-coralsunrise">
//                <img class="KittyCard-image" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/783915.svg" alt="Kitty #783915"/>
//                <div class="KittyCard-status">
//                <div class="KittyStatus">
//                <div class="KittyStatus-item">
//                <span class="KittyStatus-itemIcon">
//                <i class="Icon Icon--tag">
//                </i>
//                </span>
//                <span class="KittyStatus-itemText">
//                <span class="KittyStatus-label">
//                For sale
//                </span>
//                <span class="KittyStatus-note">
//                <small>
//                 Ξ
//                </small>
//                 0.003
//                </span>
//                </span>
//                </div>
//                </div>
//                </div>
//                </div>
//                <div class="KittyCard-details">
//                <span class="KittyCard-details-item KittyCard-details-item--highlight KittyCard-details-item--isChinese">
//                Kitty 783915
//                </span>
//                <span class="KittyCard-details-item">
//                <span>
//                    Gen 6

//                </span>
//                </span>
//                <span class="KittyCard-details-item">
//                Snappy
//                </span>
//                </div>
//                <div class="KittyCard-actions">
//                <span class="KittyCard-actions-action">
//                <span class="PurrBadge" role="button">
//                <span class="PurrBadge-hearts">
//                <span class="PurrBadge-heart">
//                <svg width="22" height="22" viewBox="0 0 22 22">
//                <path fill="none" fill-rule="evenodd" stroke="#C4C3C0" stroke-width="2" d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z">
//                </path>
//                </svg>
//                </span>
//                <span class="PurrBadge-heartFill">
//                <svg width="22" height="22" viewBox="0 0 22 22">
//                <g fill="none" fill-rule="evenodd">
//                <g transform="translate(4 5.546)">
//                <mask id="b" fill="#fff">
//                <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                </path>
//                </mask>
//                <path fill="#FFA6D8" d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z">
//                </path>
//                <path fill="#EA60AE" fill-rule="nonzero" d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z" mask="url(#b)">
//                </path>
//                <path fill="#FFE1F2" fill-rule="nonzero" d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z" mask="url(#b)" transform="matrix(-1 0 0 1 21.276 0)">
//                </path>
//                </g>
//                <path stroke="#2A2825" stroke-width="1.5" d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z">
//                </path>
//                </g>
//                </svg>
//                </span>
//                </span>
//                <span class="PurrBadge-count">
//                2
//                </span>
//                </span>
//                </span>
//                </div>
//                </div>
//                </a>
//                </div>
//                </div>
//                </div>
//                </div>
//                <div class="KittiesGalleryPagination">
//                <div class="Pagination">
//                <div class="Pagination-pages">
//                <button class="Pagination-page Pagination-page--active">
//                1
//                </button>
//                <button class="Pagination-page">
//                2
//                </button>
//                <button class="Pagination-page">
//                3
//                </button>
//                <button class="Pagination-page">
//                4
//                </button>
//                <button class="Pagination-page">
//                5
//                </button>
//                <button class="Pagination-page">
//                6
//                </button>
//                <button class="Pagination-page">
//                7
//                </button>
//                <button class="Pagination-page">
//                8
//                </button>
//                <button class="Pagination-page">
//                9
//                </button>
//                <button class="Pagination-page">
//                10
//                </button>
//                </div>
//                <div>
//                 <button class="Pagination-button Pagination-button--disabled">
//                Previous
//                </button><button class="Pagination-button">
//                Next
//                </button>
//                </div>
//                </div>
//                </div>
//                </div>
//                </div>
//                </main>
        )
    }
}

export default Marketplace;