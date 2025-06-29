 20 GitHub Repositories to Become a React Master - DEV Community 👩‍💻👨‍💻                                                 

:root { --accent-brand-lighter-rgb: 80, 99, 301; --accent-brand-rgb: 59, 73, 223; --accent-brand-darker-rgb: 47, 58, 178; }

try { const bodyClass = localStorage.getItem('config\_body\_class'); const userString = localStorage.getItem('current\_user'); if (bodyClass) { document.body.className = bodyClass; if (bodyClass.includes('dark-theme')) { document.getElementById('body-styles').innerHTML = '<style>:root{color-scheme:dark;--theme-secondary-color: #cedae2;--theme-container-background: #141f2d;--theme-container-accent-background: #202c3d;--theme-container-background-hover: #1c2c3f;--theme-container-box-shadow: none;--theme-container-border: 1px solid #22303f;--theme-social-icon-invert: invert(100%);--theme-color: #ffffff;--base: #f9f9f9;--base-inverted: #000;--base-100: var(--base);--base-90: #efefef;--base-80: #d6d6d7;--base-70: #bdbdbd;--base-60: #a3a3a3;--base-50: #8a8a8a;--base-40: #717171;--base-30: #575757;--base-20: #3d3d3d;--base-10: #242424;--base-0: #090909;--accent-brand-lighter: rgb(var(--indigo-400));--accent-brand: rgb(var(--indigo-500));--accent-brand-darker: rgb(var(--indigo-600));--accent-success: rgb(var(--green-600));--accent-success-darker: rgb(var(--green-700));--accent-success-lighter: rgb(var(--green-500));--accent-success-a10: rgba(var(--green-600), 0.2);--accent-warning: rgb(var(--yellow-500));--accent-warning-darker: rgb(var(--yellow-600));--accent-warning-lighter: rgb(var(--yellow-400));--accent-warning-a10: rgba(var(--yellow-500), 0.2);--accent-danger: rgb(var(--red-600));--accent-danger-darker: rgb(var(--red-700));--accent-danger-lighter: rgb(var(--red-500));--accent-danger-a10: rgba(var(--red-600), 0.2);--body-bg: rgb(var(--black));--body-color: rgb(var(--grey-50));--body-color-inverted: rgb(var(--black));--card-bg: rgb(var(--grey-900));--card-color: rgb(var(--grey-50));--card-color-secondary: rgb(var(--grey-300));--card-color-tertiary: rgb(var(--grey-400));--card-secondary-bg: rgb(var(--grey-900));--card-secondary-color: rgb(var(--grey-200));--card-border: rgba(var(--white), 0.15);--card-secondary-border: rgba(var(--white), 0.1);--header-bg: rgb(var(--grey-900));--header-shadow: rgb(var(--black));--footer-bg: rgb(var(--grey-900));--footer-color: rgb(var(--grey-400));--link-bg-hover-alt: rgba(var(--base-inverted));--link-color-current: var(--base-100);--link-color-secondary: var(--base-70);--link-color-secondary-hover: var(--base-80);--link-bg-current: var(--base-inverted);--button-primary-bg: var(--accent-brand-darker);--button-primary-bg-hover: var(--accent-brand);--button-primary-color: rgb(var(--white));--button-primary-color-hover: rgb(var(--white));--button-primary-inverted-bg: var(--accent-brand);--button-primary-inverted-bg-hover: var(--accent-brand-lighter);--button-primary-inverted-color: var(--base-0);--button-primary-inverted-color-hover: var(--base-0);--button-secondary-bg: var(--base-20);--button-secondary-bg-hover: var(--base-30);--button-secondary-color: var(--base-80);--button-secondary-color-hover: var(--base-100);--button-outlined-bg: transparent;--button-outlined-bg-hover: rgba(255, 255, 255, 0.035);--button-outlined-border: var(--base-20);--button-outlined-border-hover: var(--base-30);--button-outlined-color: var(--base-80);--button-outlined-color-hover: var(--base-100);--button-ghost-bg: transparent;--button-ghost-bg-hover: rgba(255, 255, 255, 0.035);--button-ghost-color: var(--base-80);--button-ghost-color-hover: var(--base-100);--button-ghost-dimmed-color: var(--base-60);--button-ghost-dimmed-color-hover: var(--base-100);--button-ghost-inverted-bg: transparent;--button-ghost-inverted-bg-hover: rgba(0, 0, 0, 0.1);--button-ghost-inverted-color: var(--base-30);--button-ghost-inverted-color-hover: var(--base-10);--form-bg: rgb(var(--black));--form-bg-focus: rgb(var(--black));--form-border: rgb(var(--grey-700));--form-border-hover: rgb(var(--grey-600));--form-border-focus: var(--focus);--form-placeholder-color: rgb(var(--grey-600));--label-primary: rgb(var(--grey-50));--label-secondary: rgb(var(--grey-30));--snackbar-bg: rgb(var(--grey-50));--snackbar-color: rgb(var(--grey-900));--tab-color: rgb(var(--grey-100));--tab-color-hover: var(--accent-brand-lighter);--tab-color-current: rgb(var(--grey-50));--tab-bg-hover: rgba(var(--accent-brand-rgb), 0.2);--tab-bg-current: rgb(var(--accent-brand));--tag-color: rgb(var(--grey-300));--tag-color-hover: rgb(var(--grey-100));--tag-bg: rgba(var(--grey-50), 0.05);--tag-bg-hover: rgba(var(--grey-50), 0.05);--tag-prefix: rgba(var(--grey-50), 0.6);--tag-prefix-hover: rgb(var(--grey-50));--story-comments-bg: rgb(var(--grey-800));--story-comments-bg-top: rgba(var(--grey-800), 0);--story-comments-bg-bottom: rgba(var(--grey-800), 1);--select-icon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE2TDYgMTBIMThMMTIgMTZaIiBmaWxsPSIjYzJjNmNhIi8+Cjwvc3ZnPg==);--reaction-like-color: rgb(var(--red-500));--reaction-like-bg: rgba(var(--red-500), 0.1);--reaction-custom-color: rgb(var(--green-600));--reaction-custom-bg: rgb(var(--green-600), 0.1);--reaction-save-color: rgb(var(--indigo-500));--reaction-save-bg: rgba(var(--indigo-500), 0.1);--reaction-comment-color: rgb(var(--yellow-500));--reaction-comment-bg: rgba(var(--yellow-500), 0.1)}:root{--btn-bg: transparent;--btn-bg-hover: rgba(var(--indigo-900), 0.75);--btn-color: rgb(var(--grey-300));--btn-color-hover: rgb(var(--indigo-300));--btn-current-bg: rgb(var(--grey-700));--btn-current-color: rgb(var(--grey-50));--btn-primary-bg: rgb(var(--indigo-700));--btn-primary-bg-hover: rgb(var(--indigo-600));--btn-primary-color: rgba(var(--white), 0.9);--btn-primary-color-hover: rgb(var(--white));--btn-secondary-bg: rgba(var(--indigo-600), 0.4);--btn-secondary-bg-hover: rgb(var(--indigo-700));--btn-secondary-color: rgb(var(--indigo-200));--btn-secondary-color-hover: rgb(var(--white));--btn-destructive-bg: transparent;--btn-destructive-bg-hover: rgba(var(--red-500), 0.3);--btn-destructive-color: rgb(var(--red-400));--btn-destructive-color-hover: rgb(var(--red-300));--btn-primary-destructive-bg: rgb(var(--red-700));--btn-primary-destructive-bg-hover: rgb(var(--red-600));--btn-primary-destructive-color: rgb(var(--white));--btn-primary-destructive-color-hover: rgb(var(--white));--link-bg: transparent;--link-bg-hover: rgba(var(--indigo-900), 0.75);--link-color: rgb(var(--grey-300));--link-color-hover: rgb(var(--indigo-300));--link-current-bg: rgb(var(--grey-700));--link-current-color: rgb(var(--grey-50));--link-branded-bg: transparent;--link-branded-bg-hover: rgba(var(--indigo-900), 0.75);--link-branded-color: rgb(var(--indigo-400));--link-branded-color-hover: rgb(var(--indigo-300));--cta-bg: transparent;--cta-bg-hover: rgba(var(--indigo-900), 0.75);--cta-color: rgb(var(--grey-300));--cta-color-hover: rgb(var(--indigo-300));--cta-border: rgb(var(--grey-500));--cta-border-hover: rgb(var(--indigo-400));--cta-branded-bg: transparent;--cta-branded-bg-hover: rgb(var(--indigo-600));--cta-branded-color: rgb(var(--indigo-400));--cta-branded-color-hover: rgb(var(--white));--cta-branded-border: rgb(var(--indigo-400));--cta-branded-border-hover: rgb(var(--indigo-500));--tooltip-bg: rgba(var(--white), 0.9);--tooltip-color: rgb(var(--grey-800));--indicator-bg: rgb(var(--grey-600));--indicator-color: rgb(var(--grey-200));--indicator-success-bg: rgb(var(--green-700));--indicator-success-color: rgb(var(--green-50));--indicator-warning-bg: rgb(var(--yellow-400));--indicator-warning-color: rgb(var(--yellow-900));--indicator-danger-bg: rgb(var(--red-700));--indicator-danger-color: rgb(var(--red-50));--indicator-info-bg: rgb(var(--indigo-700));--indicator-info-color: rgb(var(--indigo-100));--list-item-bg-hover: rgb(var(--grey-800));--modal-bg: rgb(var(--grey-900));--modal-backdrop: rgba(var(--black), 0.6);--modal-danger-border-color: rgb(var(--red-400));--color-primary: rgb(var(--grey-50));--color-secondary: rgb(var(--grey-400));--pill-bg: transparent;--pill-bg-hover: rgb(var(--grey-800));--pill-color: rgb(var(--grey-200));--pill-color-hover: rgb(var(--grey-50));--pill-border: rgb(var(--grey-500));--pill-border-hover: rgb(var(--grey-200));--swatch-border-color: rgb(var(--white), 0.2);--toggle-rail-bg: rgb(var(--grey-700));--toggle-rail-checked-bg: rgb(var(--green-500));--toggle-knob-bg: rgb(var(--white));--selected-date-color: var(--body-color);--selected-range-color: var(--body-color-inverted);--focus: var(--accent-brand-lighter);--divider: rgb(var(--grey-700));--shadow-1: 0 10px 15px -3px rgba(var(--black), 0.5), 0 4px 6px -2px rgba(var(--black), 0.25), inset 0 0 0 1px rgba(var(--white), 0.1);--shadow-2: 0 20px 25px -5px rgba(var(--black), 0.5), 0 10px 10px -5px rgba(var(--black), 0.25), inset 0 0 0 1px rgba(var(--white), 0.1)}</style>'; } if (bodyClass.includes('open-dyslexic-article-body')) { // Preloading custom font for anticipated use const link = document.createElement('link'); link.as = 'font' link.rel = 'preload' crossorigin = 'anonymous' link.href = 'https://dev.to/assets/OpenDyslexic-Regular-cf8f24aa1c9b34b36bb160bb1e3eb6f6e6ab6ec3b43ba558afee2c1c202753ca.otf'; document.head.appendChild(link); } } if (navigator.userAgent === 'DEV-Native-ios') { document.body.classList.add("dev-ios-native-body"); } if (window.frameElement) { // Hide top bar and footer when loaded within iframe document.body.classList.add("hidden-shell"); } if (userString && userString.length > 0) { const user = JSON.parse(userString) const numTags = JSON.parse(user.followed\_tags).length if (numTags < 6) { document.body.classList.add("user-tags-followed-" + numTags); } else { document.body.classList.add("user-tags-followed-max"); } } } catch (e) { setTimeout(function () { Honeybadger.notify(e); }, 1000) }

[Skip to content](#main-content)

Navigation menu [![DEV Community](https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png)](/)

 Search

[Search](/search) [Create Post](/new) [Moderation](/mod) [Notifications](/notifications)

*   [
    
    ...
    
    ](#)
*   [Admin](/admin)
*   [Dashboard](/dashboard)
*   [Moderator Center](/mod)
*   [Create Post](/new)
*   [Reading list](/readinglist)
*   [Settings](/settings)
*   [Sign Out](/signout_confirm)

// Here we have some scripts we want to get working on before // waiting for the page to stream in. // Load the current user's pic as quickly as it's available var currentUser = localStorage.getItem('current\_user') var navProfilePic = document.getElementById('nav-profile-image') if (currentUser && navProfilePic) { navProfilePic.src = JSON.parse(currentUser).profile\_image\_90; } // Load notifications count as quickly as it's available. // Not if we're on the notifications page itself if ( window.location.pathname !== '/notifications' ) { var xmlhttp; xmlhttp = new XMLHttpRequest(); xmlhttp.onreadystatechange = function() { if (xmlhttp.readyState == XMLHttpRequest.DONE) { var count = xmlhttp.response; if (isNaN(count)) { document .getElementById('notifications-number') .classList.add('hidden'); } else if (count != '0' && count != undefined && count != '') { document.getElementById('notifications-number').innerHTML = xmlhttp.response; document .getElementById('notifications-number') .classList.remove('hidden'); } else { document .getElementById('notifications-number') .classList.add('hidden'); } } }; xmlhttp.open('GET', '/notifications/counts', true); xmlhttp.send(); }

DEV Community
-------------

Close

*   [Home](/)
*   [Reading List](/readinglist)
*   [Listings](/listings)
*   [Podcasts](/pod)
*   [Videos](/videos)
*   [Tags](/tags)
*   [FAQ](/faq)
*   [Forem Shop](https://shop.forem.com)
*   [Sponsors](/sponsorships)
*   [About](/about)
*   [Contact](/contact)
*   [Guides](/guides)
*   [image/svg+xml Software comparisons](/software-comparisons)

Other
-----

*   [Code of Conduct](/code-of-conduct)
*   [Privacy Policy](/privacy)
*   [Terms of use](/terms)

[Twitter](https://twitter.com/thepracticaldev) [Facebook](https://facebook.com/thepracticaldev) [Github](https://github.com/forem) [Instagram](https://instagram.com/thepracticaldev) [Twitch](https://twitch.com/thepracticaldev)

.html-variant-wrapper { display: none}

Like Unicorn Save

More...

Copy link Copy link

Copied to Clipboard

[Share to Twitter](https://twitter.com/intent/tweet?text=%2220%20GitHub%20Repositories%20to%20Become%20a%20React%20Master%22%20by%20%40martinageradams%20%23DEVCommunity%20https%3A%2F%2Fdev.to%2Fmartinageradams%2F20-github-repositories-to-become-a-react-master-opl) [Share to LinkedIn](https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdev.to%2Fmartinageradams%2F20-github-repositories-to-become-a-react-master-opl&title=20%20GitHub%20Repositories%20to%20Become%20a%20React%20Master&summary=If%20you%20are%20just%20starting%20off%20with%20React%2C%20this%20article%20is%20well%20worth%20your%20time%20to%20read%20and%20bookmark....&source=DEV%20Community) [Share to Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fdev.to%2Fmartinageradams%2F20-github-repositories-to-become-a-react-master-opl&title=20%20GitHub%20Repositories%20to%20Become%20a%20React%20Master) [Share to Hacker News](https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fdev.to%2Fmartinageradams%2F20-github-repositories-to-become-a-react-master-opl&t=20%20GitHub%20Repositories%20to%20Become%20a%20React%20Master) [Share to Facebook](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdev.to%2Fmartinageradams%2F20-github-repositories-to-become-a-react-master-opl)

[Report Abuse](/report-abuse)

[![Martin Adams](https://res.cloudinary.com/practicaldev/image/fetch/s--XkyDxpk6--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/334211/0056111b-38a1-4aed-bc3c-335c4e9e7f5e.jpeg)](/martinageradams)

[Martin Adams](/martinageradams)

Posted on Aug 4 • Updated on Aug 7

20 GitHub Repositories to Become a React Master
===============================================

[#react](/t/react) [#javascript](/t/javascript) [#webdev](/t/webdev) [#beginners](/t/beginners)

[![20 GitHub Repositories to Become a React Master](https://res.cloudinary.com/practicaldev/image/fetch/s--k0AUrAAu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5859cxal6d3evbjiltqf.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--k0AUrAAu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5859cxal6d3evbjiltqf.png)

_If you are just starting off with React, this article is well worth your time to read and bookmark. These 20 React Github repositories will undoubtedly assist you in becoming a React Master._

[![](//a.impactradius-go.com/display-ad/10068-811163)](https://partner.canva.com/c/3569329/811163/10068)[![](https://res.cloudinary.com/practicaldev/image/fetch/s--fskHJhEw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://imp.pxf.io/i/3569329/811163/10068)](https://res.cloudinary.com/practicaldev/image/fetch/s--fskHJhEw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://imp.pxf.io/i/3569329/811163/10068)

**Table of contents**

*   **Awesome React**
*   **React** **in** **Patterns**
*   **30 Days Of React**
*   **Real-world React Apps**
*   **React Bits**
*   **React & Redux in TypeScript of Complete Guide**
*   **Awesome React Components**
*   **Ahooks**
*   **Beautiful React Hooks**
*   **React Use**
*   **UseHooks**
*   **React TypeScript Cheatsheets**
*   **ReactJS coding challenges**
*   **React Interview Questions & Answers**
*   **30 seconds of react**
*   **React Hooks Cheatsheet**
*   **React/Redux Links**
*   **React Developer Roadmap**
*   **Awesome React Hooks**
*   **Awesome Next.js**

[](#awesome-react)Awesome React
-------------------------------

_⭐ Github stars: 49k +_

_A collection of awesome things regarding the React ecosystem._

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [enaqx](https://github.com/enaqx) / [awesome-react](https://github.com/enaqx/awesome-react)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### A collection of awesome things regarding React ecosystem

### **Awesome React** [![Awesome](https://camo.githubusercontent.com/abb97269de2982c379cbc128bba93ba724d8822bfbe082737772bd4feb59cb54/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f617765736f6d652f643733303566333864323966656437386661383536353265336136336531353464643865383832392f6d656469612f62616467652e737667)](https://github.com/sindresorhus/awesome)

A collection of awesome things regarding the React ecosystem.

*   [React](https://github.com/enaqx/awesome-react#react)
    *   [React General Resources](https://github.com/enaqx/awesome-react#react-general-resources)
    *   [React Community](https://github.com/enaqx/awesome-react#react-community)
    *   [React Online Playgrounds](https://github.com/enaqx/awesome-react#react-online-playgrounds)
    *   [React Tutorials](https://github.com/enaqx/awesome-react#react-tutorials)
        *   [React General Tutorials](https://github.com/enaqx/awesome-react#react-general-tutorials)
        *   [React Hooks](https://github.com/enaqx/awesome-react#react-hooks)
        *   [React and TypeScript](https://github.com/enaqx/awesome-react#react-and-typescript)
        *   [React Performance](https://github.com/enaqx/awesome-react#react-performance)
        *   [React Internals](https://github.com/enaqx/awesome-react#react-internals)
        *   [React Interview Questions](https://github.com/enaqx/awesome-react#react-interview-questions)
    *   [React Tools](https://github.com/enaqx/awesome-react#react-tools)
        *   [React Development Tools](https://github.com/enaqx/awesome-react#react-development-tools)
        *   [React Frameworks](https://github.com/enaqx/awesome-react#react-frameworks)
        *   [React Styling](https://github.com/enaqx/awesome-react#react-styling)
        *   [React Routing](https://github.com/enaqx/awesome-react#react-routing)
        *   [React Component Libraries](https://github.com/enaqx/awesome-react#react-component-libraries)
        *   [React Awesome Components](https://github.com/enaqx/awesome-react#react-awesome-components)
        *   [React Testing](https://github.com/enaqx/awesome-react#react-testing)
        *   [React Libraries](https://github.com/enaqx/awesome-react#react-libraries)
        *   [React Integration](https://github.com/enaqx/awesome-react#react-integration)
        *   [React State Management](https://github.com/enaqx/awesome-react#react-state-management)
        *   [React AR and VR](https://github.com/enaqx/awesome-react#react-ar-and-vr)
        *   [React Renderers](https://github.com/enaqx/awesome-react#react-renderers)
        *   [Forms](https://github.com/enaqx/awesome-react#forms)
        *   [Autocomplete](https://github.com/enaqx/awesome-react#autocomplete)
        *   [Graphics](https://github.com/enaqx/awesome-react#graphics)
        *   [Data Managing](https://github.com/enaqx/awesome-react#data-managing)
        *   [Maps](https://github.com/enaqx/awesome-react#maps)
        *   [Charts](https://github.com/enaqx/awesome-react#charts)
*   [React Native](https://github.com/enaqx/awesome-react#react-native)
    *   [React Native General Resources](https://github.com/enaqx/awesome-react#react-native-general-resources)
    *   [React Native Tutorials](https://github.com/enaqx/awesome-react#react-native-tutorials)
    *   [React Native Development Tools](https://github.com/enaqx/awesome-react#react-native-development-tools)
    *   [React Native Sample Apps](https://github.com/enaqx/awesome-react#react-native-sample-apps)
    *   [React Native Boilerplates](https://github.com/enaqx/awesome-react#react-native-boilerplates)
    *   [React Native Awesome Components](https://github.com/enaqx/awesome-react#react-native-awesome-components)
    *   [React Native Libraries](https://github.com/enaqx/awesome-react#react-native-libraries)
*   [Redux](https://github.com/enaqx/awesome-react#redux)
    *   [Redux General Resources](https://github.com/enaqx/awesome-react#redux-general-resources)
    *   [Redux Tools](https://github.com/enaqx/awesome-react#redux-tools)
    *   [Redux Tutorials](https://github.com/enaqx/awesome-react#redux-tutorials)
*   [GraphQL](https://github.com/enaqx/awesome-react#graphql)
    *   [GraphQL General Resources](https://github.com/enaqx/awesome-react#graphql-spec)
    *   [GraphQL Tools](https://github.com/enaqx/awesome-react#graphql-tools)
    *   [GraphQL Tutorials](https://github.com/enaqx/awesome-react#graphql-tutorials)
    *   [GraphQL Implementations](https://github.com/enaqx/awesome-react#graphql-implementations)
    *   [Database Integration](https://github.com/enaqx/awesome-react#database-integration)
*   [Relay](https://github.com/enaqx/awesome-react#relay)
    *   [Relay General Resources](https://github.com/enaqx/awesome-react#relay-general-resources)
    *   [Relay Tutorials](https://github.com/enaqx/awesome-react#relay-tutorials)
    *   [Relay Tools](https://github.com/enaqx/awesome-react#relay-tools)
*   [Videos](https://github.com/enaqx/awesome-react#videos)
    *   [Important Talks](https://github.com/enaqx/awesome-react#important-talks)
    *   [React.js Conf 2015 Playlist](https://github.com/enaqx/awesome-react#reactjs-conf-2015-playlist)
    *   [ReactEurope Conf 2015 Day 1 Playlist](https://github.com/enaqx/awesome-react#reacteurope-conf-2015-day-1-playlist)
    *   [ReactEurope Conf 2015 Day 2 Playlist](https://github.com/enaqx/awesome-react#reacteurope-conf-2015-day-2-playlist)
    *   …

[View on GitHub](https://github.com/enaqx/awesome-react)

[](#react-in-patterns)React in Patterns
---------------------------------------

_⭐ Github stars: 11k +_

_📚 A free book about design patterns/techniques used while developing with [React](https://facebook.github.io/react/)._

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [krasimir](https://github.com/krasimir) / [react-in-patterns](https://github.com/krasimir/react-in-patterns)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### A free book that talks about design patterns/techniques used while developing with React.

React in patterns
=================

📚 A free book that talks about design patterns/techniques used while developing with [React](https://facebook.github.io/react/).

Book
----

*   [GitBook](https://www.gitbook.com/book/krasimir/react-in-patterns/details)
*   [Web](https://krasimir.gitbooks.io/react-in-patterns/content/)
*   [PDF](https://www.gitbook.com/download/pdf/book/krasimir/react-in-patterns)
*   [Mobi](https://www.gitbook.com/download/mobi/book/krasimir/react-in-patterns)
*   [ePub](https://www.gitbook.com/download/epub/book/krasimir/react-in-patterns)

[![React in patterns cover](https://res.cloudinary.com/practicaldev/image/fetch/s--Y5Nl5wro--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/krasimir/react-in-patterns./book/cover_small.jpg)](https://github.com/krasimir/react-in-patterns./book/cover_small.jpg)

Translations
------------

*   [简体中文](https://github.com/SangKa/react-in-patterns-cn)

Content
-------

*   [In brief](https://github.com/krasimir/react-in-patterns./book/chapter-01/README.md)

### Foundation

*   [Communication](https://github.com/krasimir/react-in-patterns./book/chapter-02/README.md)
    *   [Input](https://github.com/krasimir/react-in-patterns./book/chapter-02/README.md#input)
    *   [Output](https://github.com/krasimir/react-in-patterns./book/chapter-02/README.md#output)
*   [Event handlers](https://github.com/krasimir/react-in-patterns./book/chapter-03/README.md)
*   [Composition](https://github.com/krasimir/react-in-patterns./book/chapter-04/README.md)
    *   [Using React's children API](https://github.com/krasimir/react-in-patterns./book/chapter-04/README.md#using-reacts-children-api)
    *   [Passing a child as a prop](https://github.com/krasimir/react-in-patterns./book/chapter-04/README.md#passing-a-child-as-a-prop)
    *   [Higher-order component](https://github.com/krasimir/react-in-patterns./book/chapter-04/README.md#higher-order-component)
    *   [Function as a children, render prop](https://github.com/krasimir/react-in-patterns./book/chapter-04/README.md#function-as-a-children-render-prop)
*   [Controlled and uncontrolled inputs](https://github.com/krasimir/react-in-patterns./book/chapter-05/README.md)
*   [Presentational and container components](https://github.com/krasimir/react-in-patterns./book/chapter-06/README.md)

### Data flow

*   [One direction data flow](https://github.com/krasimir/react-in-patterns./book/chapter-07/README.md)
*   [Flux](https://github.com/krasimir/react-in-patterns./book/chapter-08/README.md)
    *   [Flux architecture and its main characteristics](https://github.com/krasimir/react-in-patterns./book/chapter-08/README.md#flux-architecture-and-its-main-characteristics)
    *   [Implementing a Flux architecture](https://github.com/krasimir/react-in-patterns./book/chapter-08/README.md#implementing-a-flux-architecture)
*   [Redux](https://github.com/krasimir/react-in-patterns./book/chapter-09/README.md)
    *   [Redux architecture and its main characteristics](https://github.com/krasimir/react-in-patterns./book/chapter-09/README.md#redux-architecture-and-its-main-characteristics)
    *   [Simple counter app using Redux](https://github.com/krasimir/react-in-patterns./book/chapter-09/README.md#simple-counter-app-using-redux)

### MISC

*   [Dependency injection](https://github.com/krasimir/react-in-patterns./book/chapter-10/README.md)
    *   [Using React's context (prior v. 16.3)](https://github.com/krasimir/react-in-patterns./book/chapter-10/README.md#using-reacts-context-prior-v-163)
    *   [Using React's context (v. 16.3 and above)](https://github.com/krasimir/react-in-patterns./book/chapter-10/README.md#using-reacts-context-v-163-and-above)
    *   [Using the module system](https://github.com/krasimir/react-in-patterns./book/chapter-10/README.md#using-the-module-system)
*   [Styling](https://github.com/krasimir/react-in-patterns./book/chapter-11/README.md)
    *   [The good old CSS class](https://github.com/krasimir/react-in-patterns./book/chapter-11/README.md#the-good-old-css-class)
    *   [Inline styling](https://github.com/krasimir/react-in-patterns./book/chapter-11/README.md#inline-styling)
    *   [CSS modules](https://github.com/krasimir/react-in-patterns./book/chapter-11/README.md#css-modules)
    *   [Styled-components](https://github.com/krasimir/react-in-patterns./book/chapter-11/README.md#styled-components)
*   [Integration of third-party libraries](https://github.com/krasimir/react-in-patterns./book/chapter-12/README.md)
*   [React and separation of concerns](https://github.com/krasimir/react-in-patterns./book/chapter-13/README.md)

Source code
-----------

The code samples used in the book are available [here](https://github.com/krasimir/react-in-patterns./code).

Other resources
---------------

*   [React Design principles](https://facebook.github.io/react/contributing/design-principles.html)
*   [Airbnb](https://github.com/airbnb/javascript/tree/master/react)…

[View on GitHub](https://github.com/krasimir/react-in-patterns)

[](#30-days-of-react)30 Days Of React
-------------------------------------

_⭐ Github stars: 4k +_

_30 Days of React challenge is a step-by-step guide to learning React in 30 days. It requires HTML, CSS, and JavaScript knowledge. It would be best if you were comfortable with JavaScript before starting React._

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [Asabeneh](https://github.com/Asabeneh) / [30-Days-Of-React](https://github.com/Asabeneh/30-Days-Of-React)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 30 Days of React challenge is a step by step guide to learn React in 30 days. It requires HTML, CSS, and JavaScript knowledge. You should be comfortable with JavaScript before you start to React. If you are not comfortable with JavaScript check out 30DaysOfJavaScript. This is a continuation of 30 Days Of JS. This challenge may take more than 100 days, follow your own pace.

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--4VfwBrsd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/Asabeneh/30-Days-Of-React./images/30_days_of_react.jpg)](https://github.com/Asabeneh/30-Days-Of-React./images/30_days_of_react.jpg)

30 Days Of React
================

 [![](https://camo.githubusercontent.com/5200e768dca3bed73cbb531464d8215085841ef6c35afdb82a2bbb31fc2c9ecb/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c652d2d3565626130302e7376673f6c6162656c3d4c696e6b6564496e266c6f676f3d6c696e6b6564696e267374796c653d736f6369616c)](https://www.linkedin.com/in/asabeneh/)[![Twitter Follow](https://camo.githubusercontent.com/d6c4b11a12d1cdda1e284831e22ca87598370aa7b7ff543cd7d12302e43ef6c0/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f61736162656e65683f7374796c653d736f6369616c)](https://twitter.com/Asabeneh)

Author: [Asabeneh Yetayeh](https://www.linkedin.com/in/asabeneh/)  
October, 2020

[Day 1 >>](https://github.com/Asabeneh/30-Days-Of-React./01_Day_JavaScript_Refresher/01_javascript_refresher.md)

\# Day

Topics

00

[Introduction](https://github.com/Asabeneh/30-Days-Of-React#introduction)  
[How to Use Repo](https://github.com/Asabeneh/30-Days-Of-React#how-to-use-repo)  
[Requirements](https://github.com/Asabeneh/30-Days-Of-React#requirements)  
[Setup](https://github.com/Asabeneh/30-Days-Of-React#setup)

01

[JavaScript Refresher](https://github.com/Asabeneh/30-Days-Of-React./01_Day_JavaScript_Refresher/01_javascript_refresher.md)

02

[Getting Started React](https://github.com/Asabeneh/30-Days-Of-React./02_Day_Introduction_to_React/02_introduction_to_react.md)

03

[Setting Up](https://github.com/Asabeneh/30-Days-Of-React./03_Day_Setting_Up/03_setting_up.md)

04

[Components](https://github.com/Asabeneh/30-Days-Of-React./04_Day_Components/04_components.md)

05

[Props](https://github.com/Asabeneh/30-Days-Of-React./05_Day_Props/05_props.md)

06

[List, Map and Keys](https://github.com/Asabeneh/30-Days-Of-React./06_Day_Map_List_Keys/06_map_list_keys.md)

07

[Class Components](https://github.com/Asabeneh/30-Days-Of-React./07_Day_Class_Components/07_class_components.md)

08

[States](https://github.com/Asabeneh/30-Days-Of-React./08_Day_States/08_states.md)

09

[Conditional Rendering](https://github.com/Asabeneh/30-Days-Of-React./09_Day_Conditional_Rendering/09_conditional_rendering.md)

10

[React Project Folder Structure](https://github.com/Asabeneh/30-Days-Of-React./10_React_Project_Folder_Structure/10_react_project_folder_structure.md)

11

[Events](https://github.com/Asabeneh/30-Days-Of-React./11_Day_Events/11_events.md)

12

[Forms](https://github.com/Asabeneh/30-Days-Of-React./12_Day_Forms/12_forms.md)

13

[Controlled and Uncontrolled Component](https://github.com/Asabeneh/30-Days-Of-React./13_Day_Controlled_Versus_Uncontrolled_Input/13_uncontrolled_input.md)

14

[Component Life Cycles](https://github.com/Asabeneh/30-Days-Of-React./14_Day_Component_Life_Cycles/14_component_life_cycles.md)

15

[Third Party Packages](https://github.com/Asabeneh/30-Days-Of-React./15_Third_Party_Packages/15_third_party_packages.md)

16

[Higher Order Components](https://github.com/Asabeneh/30-Days-Of-React./16_Higher_Order_Component/16_higher_order_component.md)

17

[React Router](https://github.com/Asabeneh/30-Days-Of-React./17_React_Router/17_react_router.md)

18

[Fetch versus Axios](https://github.com/Asabeneh/30-Days-Of-React./18_Fetch_And_Axios/18_fetch_axios.md)

19

[Projects](https://github.com/Asabeneh/30-Days-Of-React./19_projects/19_projects.md)

20

[Projects](https://github.com/Asabeneh/30-Days-Of-React./20_projects/20_projects.md)

21

[Hooks](https://github.com/Asabeneh/30-Days-Of-React./21_Introducing_Hooks/21_introducing_hooks.md)

22

[Forms Using Hook](https://github.com/Asabeneh/30-Days-Of-React./22_Form_Using_Hooks/22_form_using_hooks.md)

23

[Fetching Data Using Hooks](https://github.com/Asabeneh/30-Days-Of-React./23_Fetching_Data_Using_Hooks/23_fetching_data_using_hooks.md)

24

[Project using Hooks](https://github.com/Asabeneh/30-Days-Of-React./24_projects/24_projects.md)

25

[Custom Hooks](https://github.com/Asabeneh/30-Days-Of-React./25_Custom_Hooks/25_custom_hooks.md)

26

[Context](https://github.com/Asabeneh/30-Days-Of-React./26_Context/26_context.md)

27

[Ref](https://github.com/Asabeneh/30-Days-Of-React./27_Ref/27_ref.md)

28

[project](https://github.com/Asabeneh/30-Days-Of-React./28_project/28_project.md)

29

[Explore](https://github.com/Asabeneh/30-Days-Of-React./29_explore/29_explore.md)

30

[Conclusions](https://github.com/Asabeneh/30-Days-Of-React./30_conclusions/30_conclusions.md)

🧡🧡🧡 HAPPY CODING 🧡🧡🧡

Support the **author** to create more educational materials  
[![Paypal Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--BjlCS0xn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/Asabeneh/30-Days-Of-React./images/paypal_lg.png)](https://www.paypal.me/asabeneh)

* * *

*   [Introduction](https://github.com/Asabeneh/30-Days-Of-React#introduction)
*   [Requirements](https://github.com/Asabeneh/30-Days-Of-React#requirements)
*   [How to Use Repo](https://github.com/Asabeneh/30-Days-Of-React#how-to-use-repo)
    *   [Star and Fork this Repo](https://github.com/Asabeneh/30-Days-Of-React#star-and-fork-this-repo)
    *   [Clone your Fork](https://github.com/Asabeneh/30-Days-Of-React#clone-your-fork)
    *   [Create a New Branch](https://github.com/Asabeneh/30-Days-Of-React#create-a-new-branch)
    *   [Structure](https://github.com/Asabeneh/30-Days-Of-React#structure-exercise-solutions)…

[View on GitHub](https://github.com/Asabeneh/30-Days-Of-React)

[](#realworld-react-apps)Real-world React Apps
----------------------------------------------

_⭐ Github stars: 2k +_

_Real-world React apps and their open-source codebases for developers to learn from._

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [jeromedalbert](https://github.com/jeromedalbert) / [real-world-react-apps](https://github.com/jeromedalbert/real-world-react-apps)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Real world React apps and their open source codebases for developers to learn from

Real world React apps
=====================

> Real world React apps and their open source codebases for developers to learn from

Learn from React apps written by experienced developers.

You'll find the source code for the apps in the [`apps/`](https://github.com/jeromedalbert/real-world-react-appsapps/) subdirectory.

Thank you to every developer who has worked on a project this repo links to, your work is helping developers learn React.

How to install on your computer
-------------------------------

# Clone this git repo:
git clone git@github.com:jeromedalbert/real-world-react-apps.git

cd real-world-react-apps/

# The apps are linked to as git submodules.
# This will take some time... (see comment below for possible speedup)
git submodule update --init

# OR if you've got git 2.9+ installed try to run updates in parallel:
# git submodule update --init --jobs 4

Enter fullscreen mode Exit fullscreen mode

How you can analyze the apps
----------------------------

Some of the examples below use [ag](https://github.com/ggreer/the_silver_searcher), but could just as well use grep or equivalent.

#### Global searches

# Look for

…

Enter fullscreen mode Exit fullscreen mode

[View on GitHub](https://github.com/jeromedalbert/real-world-react-apps)

[](#react-bits)React Bits
-------------------------

_⭐ Github stars: 12k +_

_✨ React patterns, techniques, tips, and tricks ✨_

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [vasanthk](https://github.com/vasanthk) / [react-bits](https://github.com/vasanthk/react-bits)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### ✨ React patterns, techniques, tips and tricks ✨

[React Bits](https://vasanthk.gitbooks.io/react-bits)
=====================================================

A compilation of React Patterns, techniques, tips and tricks.

**Gitbook format**: [https://vasanthk.gitbooks.io/react-bits](https://vasanthk.gitbooks.io/react-bits)

**Github repo**: [https://github.com/vasanthk/react-bits](https://github.com/vasanthk/react-bits)

> Your contributions are heartily ♡ welcome. (✿◠‿◠)

> **Translations by community:**
> 
> *   中文版 (Chinese): [react-bits-cn](https://github.com/hateonion/react-bits-CN)
> *   한국어 (Korean): [react-bits-ko](https://github.com/rayleighko/react-bits-ko)

*   Design Patterns and Techniques
    *   [Conditional in JSX](https://github.com/vasanthk/react-bits./patterns/18.conditionals-in-jsx.md)
    *   [Async Nature Of setState()](https://github.com/vasanthk/react-bits./patterns/19.async-nature-of-setState.md)
    *   [Dependency Injection](https://github.com/vasanthk/react-bits./patterns/20.dependency-injection.md)
    *   [Context Wrapper](https://github.com/vasanthk/react-bits./patterns/21.context-wrapper.md)
    *   [Event Handlers](https://github.com/vasanthk/react-bits./patterns/22.event-handlers.md)
    *   [Flux Pattern](https://github.com/vasanthk/react-bits./patterns/23.flux-pattern.md)
    *   [One Way Data Flow](https://github.com/vasanthk/react-bits./patterns/24.one-way-data-flow.md)
    *   [Presentational vs Container](https://github.com/vasanthk/react-bits./patterns/25.presentational-vs-container.md)
    *   [Third Party Integration](https://github.com/vasanthk/react-bits./patterns/26.third-party-integration.md)
    *   [Passing Function To setState()](https://github.com/vasanthk/react-bits./patterns/27.passing-function-to-setState.md)
    *   [Decorators](https://github.com/vasanthk/react-bits./patterns/28.decorators.md)
    *   [Feature Flags](https://github.com/vasanthk/react-bits./patterns/29.feature-flags-using-redux.md)
    *   [Component Switch](https://github.com/vasanthk/react-bits./patterns/30.component-switch.md)
    *   [Reaching Into A Component](https://github.com/vasanthk/react-bits./patterns/31.reaching-into-a-component.md)
    *   [List Components](https://github.com/vasanthk/react-bits./patterns/32.list-components.md)
    *   [Format Text via Component](https://github.com/vasanthk/react-bits./patterns/33.format-text-via-component.md)
    *   [Share Tracking Logic](https://github.com/vasanthk/react-bits./patterns/34.share-tracking-logic.md)
*   Anti-Patterns
    *   [Introduction](https://github.com/vasanthk/react-bits./anti-patterns/README.md)
    *   [Props In Initial State](https://github.com/vasanthk/react-bits./anti-patterns/01.props-in-initial-state.md)
    *   [findDOMNode()](https://github.com/vasanthk/react-bits./anti-patterns/02.findDOMNode.md)
    *   [Mixins](https://github.com/vasanthk/react-bits./anti-patterns/03.mixins.md)
    *   [setState() in componentWillMount()](https://github.com/vasanthk/react-bits./anti-patterns/04.setState-in-componentWillMount.md)
    *   [Mutating State](https://github.com/vasanthk/react-bits./anti-patterns/05.mutating-state.md)
    *   [Using Indexes as Key](https://github.com/vasanthk/react-bits./anti-patterns/06.using-indexes-as-key.md)
    *   [Spreading Props on DOM elements](https://github.com/vasanthk/react-bits./anti-patterns/07.spreading-props-dom.md)
*   Handling UX Variations
    *   [Introduction](https://github.com/vasanthk/react-bits./ux-variations/README.md)
    *   [Composing UX Variations](https://github.com/vasanthk/react-bits./ux-variations/01.composing-variations.md)
    *   [Toggle UI Elements](https://github.com/vasanthk/react-bits./ux-variations/02.toggle-ui-elements.md)
    *   [HOC for Feature Toggles](https://github.com/vasanthk/react-bits./ux-variations/03.HOC-feature-toggles.md)
    *   [HOC props proxy](https://github.com/vasanthk/react-bits./ux-variations/04.HOC-props-proxy.md)
    *   [Wrapper Components](https://github.com/vasanthk/react-bits./ux-variations/05.wrapper-components.md)
    *   [Display Order Variations](https://github.com/vasanthk/react-bits./ux-variations/06.display-order-variations.md)
*   Perf Tips
    *   [Introduction](https://github.com/vasanthk/react-bits./perf-tips/README.md)
    *   [shouldComponentUpdate() check](https://github.com/vasanthk/react-bits./perf-tips/01.shouldComponentUpdate-check.md)
    *   [Using Pure Components](https://github.com/vasanthk/react-bits./perf-tips/02.pure-component.md)
    *   [Using reselect](https://github.com/vasanthk/react-bits./perf-tips/03.reselect.md)
*   Styling
    *   [Introduction](https://github.com/vasanthk/react-bits./styling/README.md)
    *   [Stateless UI Components](https://github.com/vasanthk/react-bits./styling/01.stateless-ui-components.md)
    *   [Styles Module](https://github.com/vasanthk/react-bits./styling/02.styles-module.md)
    *   [Style Functions](https://github.com/vasanthk/react-bits./styling/03.style-functions.md)
    *   [NPM](https://github.com/vasanthk/react-bits./styling/04.using-npm-modules.md)…

[View on GitHub](https://github.com/vasanthk/react-bits)

[](#react-amp-redux-in-typescript-of-complete-guide)React & Redux in TypeScript of Complete Guide
-------------------------------------------------------------------------------------------------

_⭐ Github stars: 12k +_

_A comprehensive approach to utilizing TypeScript for static input in React and Redux apps. This tutorial details the most significant patterns and secrets for using TypeScript to leverage React (and its ecosystem) in a functional approach. It will assist you in making your code completely type-safe while focusing on inferring types from implementation._

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [piotrwitek](https://github.com/piotrwitek) / [react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### The complete guide to static typing in "React & Redux" apps using TypeScript

React & Redux in TypeScript - Complete Guide
============================================

_"This guide is a **living compendium** documenting the most important patterns and recipes on how to use **React** (and its Ecosystem) in a **functional style** using **TypeScript**. It will help you make your code **completely type-safe** while focusing on **inferring the types from implementation** so there is less noise coming from excessive type annotations and it's easier to write and maintain correct types in the long run."_

[![Join the community on Spectrum](https://camo.githubusercontent.com/3aaae7abc6655c1485b607bd83b732aec0d7316f84511c9c7471c4641d4679f2/68747470733a2f2f77697468737065637472756d2e6769746875622e696f2f62616467652f62616467652e737667)](https://spectrum.chat/react-redux-ts) [![Join the chat at https://gitter.im/react-redux-typescript-guide/Lobby](https://camo.githubusercontent.com/5dbac0213da25c445bd11f168587c11a200ba153ef3014e8408e462e410169b3/68747470733a2f2f6261646765732e6769747465722e696d2f4a6f696e253230436861742e737667)](https://gitter.im/react-redux-typescript-guide/Lobby)

_Found it useful? Want more updates?_

[**Show your support by giving a ⭐**](https://github.com/piotrwitek/react-redux-typescript-guide/stargazers)

 [![Buy Me a Coffee](https://camo.githubusercontent.com/c3f856bacd5b09669157ed4774f80fb9d8622dd45ce8fdf2990d3552db99bd27/68747470733a2f2f7777772e6275796d6561636f666665652e636f6d2f6173736574732f696d672f637573746f6d5f696d616765732f6f72616e67655f696d672e706e67)](https://www.buymeacoffee.com/piotrekwitek)[![Become a Patron](https://camo.githubusercontent.com/ca317983c1ee436cd8c1157c5d2769c641372ee441af705dc0a32e3654fcbc9f/68747470733a2f2f63352e70617472656f6e2e636f6d2f65787465726e616c2f6c6f676f2f6265636f6d655f615f706174726f6e5f627574746f6e4032782e706e67)](https://www.patreon.com/piotrekwitek)

* * *

**What's new?**
---------------

🎉 _Now updated to support **TypeScript v4.6**_ 🎉 🚀 \_Updated to `typesafe-actions@5.x` 🚀

* * *

  

### **Goals**

*   Complete type safety (with [`--strict`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) flag) without losing type information downstream through all the layers of our application (e.g. no type assertions or hacking with `any` type)
*   Make type annotations concise by eliminating redundancy in types using advanced TypeScript Language features like **Type Inference** and…

[View on GitHub](https://github.com/piotrwitek/react-redux-typescript-guide)

[](#awesome-react-components)Awesome React Components
-----------------------------------------------------

_⭐ Github stars: 3k +_

This is an AWESOME list of components. No, this is not an exhaustive list of every React component under the sun. So, what exactly does “great” mean? Well:

*   It addresses a genuine issue.
*   It performs things in an unusual, attractive, or extraordinary manner. (And it’s not very well-known or popular… there’s no use in including those.)
*   It has recently committed code!
*   For genuinely great creations, look for a. In addition, watch for quickie maintainer remarks and reviews in (italic parens) after several note listings.

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [brillout](https://github.com/brillout) / [awesome-react-components](https://github.com/brillout/awesome-react-components)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Curated List of React Components & Libraries.

🚀 Absolutely Awesome React Components & Libraries
==================================================

This is a list of AWESOME components. Nope, it's NOT a comprehensive list of every React component under the sun. So, what does "awesome" mean? Well:

*   It solves a real problem
*   It does so in a 🦄 unique, 🦋 beautiful, or 🏆 exceptional way. (And it's not super popular and well-known... no point in listing those.)
*   It has recent code commits!

Look for a 🚀 for truly amazing projects. And look for quickie maintainer commentary and reviews in _(italic parens)_ after some listings of note.

Maintainers:

*   [@petebray](https://github.com/bluepeter), author of [Fluxguard](https://fluxguard.com) — monitor PROD website changes.
*   [@brillout](https://twitter.com/brillout), author of [vite-plugin-ssr](https://vite-plugin-ssr.com/) (like Next.js / Nuxt but as do-one-thing-do-it-well Vite plugin) and [Telefunc](https://telefunc.com/) (remote functions instead of APIs).

### Contributing

Please review our [contributing guidelines](https://github.com/brillout/awesome-react-components/blob/master/CONTRIBUTING.md). We keep this list fresh by **requiring all PRs to remove one or more non-awesome entries from this list**…

[View on GitHub](https://github.com/brillout/awesome-react-components)

[](#ahooks)Ahooks
-----------------

_⭐ Github stars: 10k +_

A high-quality & reliable React Hooks library.

*   Easy to learn and use
*   Supports SSR
*   Special treatment for functions, avoid closure problems
*   It contains a large number of advanced Hooks that are refined from business scenarios
*   Includes a comprehensive collection of bare Hooks
*   Written in TypeScript with predictable, static types

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [alibaba](https://github.com/alibaba) / [hooks](https://github.com/alibaba/hooks)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### A high-quality & reliable React Hooks library.

[![](https://camo.githubusercontent.com/3535a8205188713d63953968a24edac7ac3264db0ac5f0468411d61b24369836/68747470733a2f2f61686f6f6b732e6a732e6f72672f6c6f676f2e737667)](https://ahooks.js.org)

A high-quality & reliable React Hooks library.

[![NPM version](https://camo.githubusercontent.com/09d8d91f4d3d26b58679cc1d85d19b1015547c41de9820fe2fd0bbc2475e2bfc/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f61686f6f6b732e7376673f7374796c653d666c6174)](https://www.npmjs.com/package/ahooks) [![NPM downloads](https://camo.githubusercontent.com/2f8752a9db7bf3b24cb5a7be2ae615061021890f67987ce68ad8beb5ba5a3161/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64772f61686f6f6b732e7376673f7374796c653d666c6174)](https://npmjs.org/package/ahooks) [![npm](https://camo.githubusercontent.com/1a740068bb59ab272b02d3996fa742bfbdff999c2b656411e3beb6872efd0172/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64772f61686f6f6b732d76323f6c6162656c3d646f776e6c6f6164732532387632253239)](https://www.npmjs.com/package/ahooks-v2) [![npm](https://camo.githubusercontent.com/0e10bf7e8b933712df025aaa1ee406e7f3ef4f9d9f743debd5438b96826e1600/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6973737565732f616c69626162612f686f6f6b73)](https://github.com/alibaba/hooks/issues) [![Coverage Status](https://camo.githubusercontent.com/6d9bf37ac47f22597900ebd9e5dfc7d43cd538636b51b749a543d7fe6dce8519/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f6769746875622f616c69626162612f686f6f6b732f62616467652e7376673f6272616e63683d6d6173746572)](https://coveralls.io/github/alibaba/hooks?branch=master) [![gzip size](https://camo.githubusercontent.com/ab0a81d1bedba91d0579f37e20e7eb7af80687d1a8923941a345de7bcfa1b44e/68747470733a2f2f696d672e626164676573697a652e696f2f68747470733a2f756e706b672e636f6d2f61686f6f6b732f646973742f61686f6f6b732e6a733f6c6162656c3d677a697025323073697a6526636f6d7072657373696f6e3d677a6970)](https://camo.githubusercontent.com/ab0a81d1bedba91d0579f37e20e7eb7af80687d1a8923941a345de7bcfa1b44e/68747470733a2f2f696d672e626164676573697a652e696f2f68747470733a2f756e706b672e636f6d2f61686f6f6b732f646973742f61686f6f6b732e6a733f6c6162656c3d677a697025323073697a6526636f6d7072657373696f6e3d677a6970) [![Percentage of issues still open](https://camo.githubusercontent.com/046f78c75030b26d2e3ee769649dea9a422c8c6a9873ed8d4122e3455773c365/687474703a2f2f697369746d61696e7461696e65642e636f6d2f62616467652f6f70656e2f616c69626162612f686f6f6b732e737667)](http://isitmaintained.com/project/alibaba/hooks "Percentage of issues still open") [![Average time to resolve an issue](https://camo.githubusercontent.com/a5c77d8e5ca6abb0adaf1e33896e886aa72c2ad1de0f1505afe6f42498f3bcf7/687474703a2f2f697369746d61696e7461696e65642e636f6d2f62616467652f7265736f6c7574696f6e2f616c69626162612f686f6f6b732e737667)](http://isitmaintained.com/project/alibaba/hooks "Average time to resolve an issue") [![GitHub](https://camo.githubusercontent.com/e27b3f231e36fffefaf7e67531fbf463d02e3ed49219afd4a90ba4f5cce892e2/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f616c69626162612f686f6f6b73)](https://camo.githubusercontent.com/e27b3f231e36fffefaf7e67531fbf463d02e3ed49219afd4a90ba4f5cce892e2/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f616c69626162612f686f6f6b73)

English | [简体中文](https://github.com/alibaba/hooks/blob/master/README.zh-CN.md)

📚 Documentation
----------------

*   [English](https://ahooks.js.org/)
*   [中文](https://ahooks.js.org/zh-CN/)

✨ Features
----------

*   Easy to learn and use
*   Supports SSR
*   Special treatment for functions, avoid closure problems
*   Contains a large number of advanced Hooks that are refined from business scenarios
*   Contains a comprehensive collection of basic Hooks
*   Written in TypeScript with predictable static types

📦 Install
----------

$ npm install --save ahooks
# or
$ yarn add ahooks
# or
$ pnpm add ahooks

Enter fullscreen mode Exit fullscreen mode

🔨 Usage
--------

import { useRequest } from 'ahooks';

Enter fullscreen mode Exit fullscreen mode

💻 Online Demo
--------------

[![Edit demo for ahooks](https://camo.githubusercontent.com/90808661433696bc57dce8d4ad732307b5cec6270e6b846f114dcd7ee7f9458a/68747470733a2f2f636f646573616e64626f782e696f2f7374617469632f696d672f706c61792d636f646573616e64626f782e737667)](https://codesandbox.io/s/demo-for-ahooks-forked-fg79k?file=/src/App.js)

🤝 Contributing
---------------

$ git clone git@github.com:alibaba/hooks.git
$ cd hooks
$ pnpm run init
$ pnpm start

Enter fullscreen mode Exit fullscreen mode

Open your browser and visit [http://127.0.0.1:8000](http://127.0.0.1:8000)

We welcome all contributions, please read our [CONTRIBUTING.MD](https://github.com/alibaba/hooks/blob/master/CONTRIBUTING.MD) first, let's build a better hooks library together.

Thanks to all the contributors:

[![contributors](https://camo.githubusercontent.com/5ec0b2ad43ec8054d54f914866d8a5ce5954e711242d7a26acdfc00bba4e58d7/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f61686f6f6b732f636f6e7472696275746f72732e7376673f77696474683d39363026627574746f6e3d66616c7365)](https://github.com/alibaba/hooks/graphs/contributors)

👥 Discuss
----------

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--iesAwERw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/12526493/163084546-ed7a18a8-f05b-484e-a32c-049a05c350fd.JPG)](https://user-images.githubusercontent.com/12526493/163084546-ed7a18a8-f05b-484e-a32c-049a05c350fd.JPG)[![](https://res.cloudinary.com/practicaldev/image/fetch/s--ija5jz7y--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/12526493/163084577-bab53c55-610e-4efe-96c7-eb0dd076c100.JPG)](https://user-images.githubusercontent.com/12526493/163084577-bab53c55-610e-4efe-96c7-eb0dd076c100.JPG)[![](https://res.cloudinary.com/practicaldev/image/fetch/s---nhtAAN8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/12526493/163084584-bfb789fe-b5f4-4cd6-b4a5-2444bd67c1a5.JPG)](https://user-images.githubusercontent.com/12526493/163084584-bfb789fe-b5f4-4cd6-b4a5-2444bd67c1a5.JPG)

[View on GitHub](https://github.com/alibaba/hooks)

[](#beautiful-react-hooks)Beautiful React Hooks
-----------------------------------------------

_⭐ Github stars: 5.7k +_

A collection of attractive and (hopefully) useful React hooks to help you write components and hooks faster.

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [antonioru](https://github.com/antonioru) / [beautiful-react-hooks](https://github.com/antonioru/beautiful-react-hooks)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 🔥 A collection of beautiful and (hopefully) useful React hooks to speed-up your components and hooks development 🔥

[![CI/CD](https://res.cloudinary.com/practicaldev/image/fetch/s--5lpVLSRS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/beautifulinteractions/beautiful-react-hooks/workflows/CI/CD/badge.svg)](https://github.com/beautifulinteractions/beautiful-react-hooks/workflows/CI/CD/badge.svg) [![Coverage Status](https://camo.githubusercontent.com/9ad2eeb4a6b73af463e5df339517602af1b0e287e5b90e1d1e220d585c185b8e/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f6769746875622f62656175746966756c696e746572616374696f6e732f62656175746966756c2d72656163742d686f6f6b732f62616467652e7376673f6272616e63683d6d6173746572)](https://coveralls.io/github/beautifulinteractions/beautiful-react-hooks?branch=master)[![License: MIT](https://camo.githubusercontent.com/78f47a09877ba9d28da1887a93e5c3bc2efb309c1e910eb21135becd2998238a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667)](https://opensource.org/licenses/MIT) [![npm](https://camo.githubusercontent.com/b7e3e547201742b30894f06f8c54d0b7a30bdb818a4a43842bb612d1d699977a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f62656175746966756c2d72656163742d686f6f6b73)](https://camo.githubusercontent.com/b7e3e547201742b30894f06f8c54d0b7a30bdb818a4a43842bb612d1d699977a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f62656175746966756c2d72656163742d686f6f6b73) [![GitHub stars](https://camo.githubusercontent.com/b2de1df39abd6be783202cfbc9a677d411ae9e623e48ed0ea3f48ac22c32d9d2/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f62656175746966756c696e746572616374696f6e732f62656175746966756c2d72656163742d686f6f6b733f7374796c653d736f6369616c)](https://camo.githubusercontent.com/b2de1df39abd6be783202cfbc9a677d411ae9e623e48ed0ea3f48ac22c32d9d2/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f62656175746966756c696e746572616374696f6e732f62656175746966756c2d72656163742d686f6f6b733f7374796c653d736f6369616c)

[![Beautiful React Hooks](https://res.cloudinary.com/practicaldev/image/fetch/s--MZZwcKP4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/antonioru/beautiful-react-hooks./logo.png)](https://github.com/antonioru/beautiful-react-hooks./logo.png)

  

A collection of beautiful (and hopefully useful) React hooks to speed-up your components and hooks development

[🌟 Live playground here 🌟](https://antonioru.github.io/beautiful-react-hooks/)

[![Usage example](https://res.cloudinary.com/practicaldev/image/fetch/s--5UTZMCo9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/antonioru/beautiful-react-hooks./usage_example.png)](https://github.com/antonioru/beautiful-react-hooks./usage_example.png)

🇬🇧 English | [🇨🇳 简体中文](https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.zh-CN.md) | [🇮🇹 Italiano](https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.it-IT.md) | [🇪🇸 Español](https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.es-ES.md) | [🇺🇦 Ukrainian](https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.uk-UA.md) | [🇧🇷 Brazilian Portuguese](https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pt-BR.md) | [🇵🇱 Polski](https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pl-PL.md) | [🇯🇵 日本語](https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.jp-JP.md)

💡 Why?
-------

React custom hooks allow to abstract components' business logic into single reusable functions.  
So far, we've found that most of the hooks we've created and therefore shared between our internal projects have quite often a similar gist that involves callback references, events and components' lifecycle.  
For this reason we've tried to sum up that gist into `beautiful-react-hooks`: a collection of (_hopefully_) useful React hooks to possibly help other companies and professionals to speed up their development process.  
  
Furthermore, we created a concise yet concrete API having in mind the code readability, focusing to keep the learning curve as lower as…

[View on GitHub](https://github.com/antonioru/beautiful-react-hooks)

[](#react-use)React Use
-----------------------

_⭐ Github stars: 30k +_

The essential collection of custom React Hooks, complete with documentation.

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [streamich](https://github.com/streamich) / [react-use](https://github.com/streamich/react-use)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### React Hooks — 👍

  
  
👍  
react-use  
  
  
  

================================

   [![npm package](https://camo.githubusercontent.com/7d60788708ed48f6fb80cf5bf8600efb38367df7499e19c71a6c865656a00684/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742d7573652e737667)](https://www.npmjs.com/package/react-use)[![CircleCI master](https://camo.githubusercontent.com/9dc63a1f73402b77bcaa9dc42d9a6776852f32e98cda8ae3e829f55e6bd2effe/68747470733a2f2f696d672e736869656c64732e696f2f636972636c6563692f70726f6a6563742f6769746875622f73747265616d6963682f72656163742d7573652f6d61737465722e737667) ](https://circleci.com/gh/streamich/react-use)[![npm downloads](https://camo.githubusercontent.com/0ce2a144d4d1e76b9c0f836e798f34f2ccc70a68412199f4f6ce3b5205273a06/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f72656163742d7573652e737667) ](https://www.npmjs.com/package/react-use)[![demos](https://camo.githubusercontent.com/fba821edf244b89778d9be7d07df61e2d3001d66919eb0318b0719c11b9bbaa7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f732df09f9a802d79656c6c6f772e737667)](http://streamich.github.io/react-use)  
Collection of essential [React Hooks](https://reactjs.org/docs/hooks-intro.html) _Port of_ [`libreact`](https://github.com/streamich/libreact)  
Translations: [🇨🇳 汉语](https://github.com/zenghongtu/react-use-chinese/blob/master/README.md)  
  
  
  

npm i [react-use](https://www.npmjs.com/package/react-use)

  
  
  
  
  

*   [**Sensors**](https://github.com/streamich/react-use./docs/Sensors.md)
    *   [`useBattery`](https://github.com/streamich/react-use./docs/useBattery.md) — tracks device battery state. [![](https://camo.githubusercontent.com/1b47415f4504d54379b5db037543f840859e2086061be54dc5a0116930f9a043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f2d2532302532302532302546302539462539412538302d677265656e2e737667)](https://codesandbox.io/s/qlvn662zww)
    *   [`useGeolocation`](https://github.com/streamich/react-use./docs/useGeolocation.md) — tracks geo location state of user's device. [![](https://camo.githubusercontent.com/1b47415f4504d54379b5db037543f840859e2086061be54dc5a0116930f9a043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f2d2532302532302532302546302539462539412538302d677265656e2e737667)](https://streamich.github.io/react-use/?path=/story/sensors-usegeolocation--demo)
    *   [`useHover` and `useHoverDirty`](https://github.com/streamich/react-use./docs/useHover.md) — tracks mouse hover state of some element. [![](https://camo.githubusercontent.com/1b47415f4504d54379b5db037543f840859e2086061be54dc5a0116930f9a043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f2d2532302532302532302546302539462539412538302d677265656e2e737667)](https://codesandbox.io/s/zpn583rvx)
    *   [`useHash`](https://github.com/streamich/react-use./docs/useHash.md) — tracks location hash value. [![](https://camo.githubusercontent.com/1b47415f4504d54379b5db037543f840859e2086061be54dc5a0116930f9a043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f2d2532302532302532302546302539462539412538302d677265656e2e737667)](https://streamich.github.io/react-use/?path=/story/sensors-usehash--demo)
    *   [`useIdle`](https://github.com/streamich/react-use./docs/useIdle.md) — tracks whether user is being inactive.
    *   [`useIntersection`](https://github.com/streamich/react-use./docs/useIntersection.md) — tracks an HTML element's intersection. [![](https://camo.githubusercontent.com/1b47415f4504d54379b5db037543f840859e2086061be54dc5a0116930f9a043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f2d2532302532302532302546302539462539412538302d677265656e2e737667)](https://streamich.github.io/react-use/?path=/story/sensors-useintersection--demo)
    *   [`useKey`](https://github.com/streamich/react-use./docs/useKey.md), [`useKeyPress`](https://github.com/streamich/react-use./docs/useKeyPress.md), [`useKeyboardJs`](https://github.com/streamich/react-use./docs/useKeyboardJs.md), and [`useKeyPressEvent`](https://github.com/streamich/react-use./docs/useKeyPressEvent.md) — track keys. [![](https://camo.githubusercontent.com/1b47415f4504d54379b5db037543f840859e2086061be54dc5a0116930f9a043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f2d2532302532302532302546302539462539412538302d677265656e2e737667)](https://streamich.github.io/react-use/?path=/story/sensors-usekeypressevent--demo)
    *   [`useLocation`](https://github.com/streamich/react-use./docs/useLocation.md) and [`useSearchParam`](https://github.com/streamich/react-use./docs/useSearchParam.md) — tracks page navigation bar location state.
    *   [`useLongPress`](https://github.com/streamich/react-use./docs/useLongPress.md) — tracks long press gesture of some element.
    *   [`useMedia`](https://github.com/streamich/react-use./docs/useMedia.md) — tracks state of a CSS media query. [![](https://camo.githubusercontent.com/1b47415f4504d54379b5db037543f840859e2086061be54dc5a0116930f9a043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f2d2532302532302532302546302539462539412538302d677265656e2e737667)](https://streamich.github.io/react-use/?path=/story/sensors-usemedia--demo)
    *   [`useMediaDevices`](https://github.com/streamich/react-use./docs/useMediaDevices.md) — tracks state of connected hardware devices.
    *   [`useMotion`](https://github.com/streamich/react-use./docs/useMotion.md) — tracks state of device's motion sensor.
    *   [`useMouse` and `useMouseHovered`](https://github.com/streamich/react-use./docs/useMouse.md) — tracks state of mouse position. [![](https://camo.githubusercontent.com/1b47415f4504d54379b5db037543f840859e2086061be54dc5a0116930f9a043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f2d2532302532302532302546302539462539412538302d677265656e2e737667)](https://streamich.github.io/react-use/?path=/story/sensors-usemouse--docs)
    *   [`useMouseWheel`](https://github.com/streamich/react-use./docs/useMouseWheel.md) — tracks deltaY of scrolled mouse wheel. [![](https://camo.githubusercontent.com/1b47415f4504d54379b5db037543f840859e2086061be54dc5a0116930f9a043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f2d2532302532302532302546302539462539412538302d677265656e2e737667)](https://streamich.github.io/react-use/?path=/story/sensors-usemousewheel--docs)
    *   [`useNetworkState`](https://github.com/streamich/react-use./docs/useNetworkState.md) — tracks the state of browser's network connection. [![](https://camo.githubusercontent.com/1b47415f4504d54379b5db037543f840859e2086061be54dc5a0116930f9a043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64656d6f2d2532302532302532302546302539462539412538302d677265656e2e737667)](https://streamich.github.io/react-use/?path=/story/sensors-usenetworkstate--demo)
    *   [`useOrientation`](https://github.com/streamich/react-use./docs/useOrientation.md) — tracks…

[View on GitHub](https://github.com/streamich/react-use)

[](#usehooks)UseHooks
---------------------

_⭐ Github stars: 3.6k +_

Recipes for React Hook code that are simple to grasp.

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [uidotdev](https://github.com/uidotdev) / [usehooks](https://github.com/uidotdev/usehooks)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Easy to understand React Hook code recipes

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--8k9wms0k--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/1481077/50853823-3cc2b380-1338-11e9-9c60-3d783c7be068.png)](https://user-images.githubusercontent.com/1481077/50853823-3cc2b380-1338-11e9-9c60-3d783c7be068.png)

This is the repository for [usehooks.com](https://usehooks.com), a [Gatsby](https://www.gatsbyjs.org) powered blog that publishes easy to understand React Hook code recipes.

If you'd like to submit new post ideas, improve existing posts, or change anything about the website feel free to submit an issue or pull-request.

Please consider sponsoring this project through my [Github sponsors page](https://github.com/sponsors/gragland). Any level of support is appreciated. I have a few higher tiers that include having your company listed on the usehooks website and newsletter.

To run locally, `yarn`, then `yarn dev`, then open [localhost:8000](https://localhost:8000).

Post Index
----------

[useFirestoreQuery](https://usehooks.com/useFirestoreQuery/)  
[useMemoCompare](https://usehooks.com/useMemoCompare/)  
[useAsync](https://usehooks.com/useAsync/)  
[useRequireAuth](https://usehooks.com/useRequireAuth/)  
[useRouter](https://usehooks.com/useRouter/)  
[useAuth](https://usehooks.com/useAuth/)  
[useEventListener](https://usehooks.com/useEventListener/)  
[useWhyDidYouUpdate](https://usehooks.com/useWhyDidYouUpdate/)  
[useDarkMode](https://usehooks.com/useDarkMode/)  
[useMedia](https://usehooks.com/useMedia/)  
[useLockBodyScroll](https://usehooks.com/useLockBodyScroll/)  
[useTheme](https://usehooks.com/useTheme/)  
[useSpring](https://usehooks.com/useSpring/)  
[useHistory](https://usehooks.com/useHistory/)  
[useScript](https://usehooks.com/useScript/)  
[useKeyPress](https://usehooks.com/useKeyPress/)  
[useMemo](https://usehooks.com/useMemo/)  
[useDebounce](https://usehooks.com/useDebounce/)  
[useOnScreen](https://usehooks.com/useOnScreen/)  
[usePrevious](https://usehooks.com/usePrevious/)  
[useOnClickOutside](https://usehooks.com/useOnClickOutside/)  
[useAnimation](https://usehooks.com/useAnimation/)  
[useWindowSize](https://usehooks.com/useWindowSize/)  
[useHover](https://usehooks.com/useHover/)  
[useLocalStorage](https://usehooks.com/useLocalStorage/)

[**Unlicense**](https://github.com/uidotdev/usehooks./LICENSE) — public domain

  
  

  

[View on GitHub](https://github.com/uidotdev/usehooks)

  

  

[](#react-typescript-cheatsheets)React TypeScript Cheatsheets
-------------------------------------------------------------

_⭐ Github stars: 34.8k +_

Cheatsheets for experienced React developers getting started with TypeScript.

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [typescript-cheatsheets](https://github.com/typescript-cheatsheets) / [react](https://github.com/typescript-cheatsheets/react)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Cheatsheets for experienced React developers getting started with TypeScript

React+TypeScript Cheatsheets
============================

Cheatsheets for experienced React developers getting started with TypeScript

* * *

[![react + ts logo](https://res.cloudinary.com/practicaldev/image/fetch/s--zF7jDW0h--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/6764957/53868378-2b51fc80-3fb3-11e9-9cee-0277efe8a927.png)](https://github.com/typescript-cheatsheets/react/issues/81)

[**Web docs**](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup) | [**Español**](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet-es) | [**Português**](https://github.com/typescript-cheatsheets/react-pt) | [Contribute!](https://github.com/typescript-cheatsheets/react/blob/main/CONTRIBUTING.md) | [Ask!](https://github.com/typescript-cheatsheets/react/issues/new/choose)

👋 This repo is maintained by [@swyx](https://twitter.com/swyx), [@eps1lon](https://twitter.com/sebsilbermann) and [@filiptammergard](https://twitter.com/tammergard). We're so happy you want to try out TypeScript with React! If you see anything wrong or missing, please [file an issue](https://github.com/typescript-cheatsheets/react/issues/new/choose)! 👍

* * *

[![All Contributors](https://camo.githubusercontent.com/dd626eff77f4d95232200c911cadc7dcbd2e39d5282e21b50138850782c52ba3/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f636f6e7472696275746f72732f747970657363726970742d63686561747368656574732f72656163742d747970657363726970742d636865617473686565743f636f6c6f723d6f72616e6765267374796c653d666c61742d737175617265)](https://github.com/typescript-cheatsheets/react/CONTRIBUTORS.md) | [![Discord](https://camo.githubusercontent.com/9908ddfa0808b3fac2a1bd2ae6b09528047095ceb78813969f0ce3744f8180a8/68747470733a2f2f696d672e736869656c64732e696f2f646973636f72642f3530383335373234383333303736303234332e7376673f6c6162656c3d266c6f676f3d646973636f7264266c6f676f436f6c6f723d66666666666626636f6c6f723d373338394438266c6162656c436f6c6f723d364137454332)](https://discord.gg/wTGS5z9) | [![Tweet](https://camo.githubusercontent.com/b236b49688d81d997005bb9eb12036af6c79c92f58737f1dcabb495c4670fc6c/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f75726c3f6c6162656c3d48656c70253230737072656164253230746865253230776f7264253231267374796c653d736f6369616c2675726c3d68747470732533412532462532466769746875622e636f6d253246747970657363726970742d63686561747368656574732532467265616374)](http://twitter.com/home?status=Awesome%20%40Reactjs%20%2B%20%40TypeScript%20cheatsheet%20by%20%40ferdaber%2C%20%40sebsilbermann%2C%20%40swyx%20%26%20others!%20https%3A%2F%2Fgithub.com%2Ftypescript-cheatsheets%2Freact)

All React + TypeScript Cheatsheets
----------------------------------

*   [The Basic Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup) is focused on helping React devs just start using TS in React **apps**
    *   Focus on opinionated best practices, copy+pastable examples.
    *   Explains some basic TS types usage and setup along the way.
    *   Answers the most Frequently Asked Questions.
    *   Does not cover generic type logic in detail. Instead we prefer to teach simple troubleshooting techniques for newbies.
    *   The goal is to get effective with TS without learning _too much_ TS.
*   [The Advanced Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/advanced/intro) helps show and explain advanced usage of generic types for people writing…

[View on GitHub](https://github.com/typescript-cheatsheets/react)

[](#react-coding-challenges)React Coding Challenges
---------------------------------------------------

_⭐ Github stars: 1.9k +_

A series of ReactJS coding challenges with a variety of difficulties.

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [alexgurr](https://github.com/alexgurr) / [react-coding-challenges](https://github.com/alexgurr/react-coding-challenges)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### A series of ReactJS coding challenges with a variety of difficulties.

[![](https://camo.githubusercontent.com/ac5d4fbd57fc7cff8996b214be5305997d514fe81b1f014115472cdccf00a5b5/68747470733a2f2f7075752e73682f4879726d562f393563343538643964392e706e67)](https://camo.githubusercontent.com/ac5d4fbd57fc7cff8996b214be5305997d514fe81b1f014115472cdccf00a5b5/68747470733a2f2f7075752e73682f4879726d562f393563343538643964392e706e67)

### ⭐️ Looking for collaborators ⭐️

We're looking for people to come and help work on the latest challenge **Coinbee**. If you're interested, get in touch via our slack community or via my website [alexgurr.com](https://alexgurr.com)!

A series of **ReactJS coding challenges** with a variety of difficulties. Deep dive into the why [here](https://dev.to/alexgurr/react-coding-challenges-for-interviews-beginners-1hlk).

Interested in some React fundamentals / philosophies? Check out the [react-philosophies](https://github.com/mithi/react-philosophies) GitHub repo.

Sponsored
---------

[![](https://camo.githubusercontent.com/b5f0a8ca746ef68575194b0d5ff4ae5392761806d25030dfad3b8b2f6cda85da/68747470733a2f2f7777772e74696d65746f657374696d6174652e636f6d2f66617669636f6e2e706e67)](https://camo.githubusercontent.com/b5f0a8ca746ef68575194b0d5ff4ae5392761806d25030dfad3b8b2f6cda85da/68747470733a2f2f7777772e74696d65746f657374696d6174652e636f6d2f66617669636f6e2e706e67) [Time To Estimate](https://www.timetoestimate.com). A fun, simple way for agile teams to remotely estimate tasks together. Free, with no sign-up required.

[![](https://camo.githubusercontent.com/78c13a445ed7a4e7fc7173d7310a386a77e1b8f6325a7f07f80b7ce53d8de983/68747470733a2f2f7777772e6d69786d656c6c6f2e636f6d2f66617669636f6e2e706e67)](https://camo.githubusercontent.com/78c13a445ed7a4e7fc7173d7310a386a77e1b8f6325a7f07f80b7ce53d8de983/68747470733a2f2f7777772e6d69786d656c6c6f2e636f6d2f66617669636f6e2e706e67) [mixmello](https://www.mixmello.com). Create remixed versions of your favourite Spotify playlists.

The Challenges
--------------

### Easy 🙂

##### 🚀 [Rocket Ship](https://github.com/alexgurr/react-coding-challenges/tree/master/rocket-ship)

Unnecessary re-renders, fine grained control.

### Medium 😐

##### 🌙 [Dark Mode](https://github.com/alexgurr/react-coding-challenges/tree/master/dark-mode)

State / shared state, DOM manipulation.

##### 🐝 Coinbee [![soon](https://camo.githubusercontent.com/05d774edbda20701c99fca81df4fb367ae0ba6f425b459f4290f73784a2451f9/68747470733a2f2f62616467656e2e6e65742f62616467652f7374617475732f636f6d696e67253230736f6f6e2f677265656e3f69636f6e3d)](https://camo.githubusercontent.com/05d774edbda20701c99fca81df4fb367ae0ba6f425b459f4290f73784a2451f9/68747470733a2f2f62616467656e2e6e65742f62616467652f7374617475732f636f6d696e67253230736f6f6e2f677265656e3f69636f6e3d)

Data visualisation and graphing. API usage.

### Hard 😬

##### 🎧 [Spootify](https://github.com/alexgurr/react-coding-challenges/tree/master/spootify)

Loading state, API usage.

##### 🤖 [Chatter](https://github.com/alexgurr/react-coding-challenges/tree/master/chatter)

Web sockets, events, callbacks & React hooks. Talks to [Botty](https://github.com/alexgurr/botty)…

[View on GitHub](https://github.com/alexgurr/react-coding-challenges)

[](#react-interview-questions-amp-answers)React Interview Questions & Answers
-----------------------------------------------------------------------------

_⭐ Github stars: 1.9k +_

List of top 500 ReactJS Interview Questions & Answers….Coding exercise questions are coming soon!!

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [sudheerj](https://github.com/sudheerj) / [reactjs-interview-questions](https://github.com/sudheerj/reactjs-interview-questions)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### List of top 500 ReactJS Interview Questions & Answers....Coding exercise questions are coming soon!!

React Interview Questions & Answers
===================================

> Click ⭐if you like the project. Pull Request are highly appreciated. Follow me [@SudheerJonna](https://twitter.com/SudheerJonna) for technical updates.

* * *

Learn to code and get hired with [Zero To Mastery:](https://zerotomastery.io/?utm_source=github&utm_medium=sponsor&utm_campaign=reactjs-interview-questions)

1.  This [React course](https://links.zerotomastery.io/react_sudheer) is good if you’re struggling to learn React beyond the basics
2.  This [coding interview bootcamp](http://links.zerotomastery.io/mci_sudheer) is helpful if you’re serious about getting hired as a developer

* * *

**Note:** This repository is specific to ReactJS. Please check [Javascript Interview questions](https://github.com/sudheerj/javascript-interview-questions) for core javascript questions.

Downloading PDF/Epub formats
----------------------------

You can download the PDF and Epub version of this repository from the latest run on the [actions tab](https://github.com/sudheerj/reactjs-interview-questions/actions).

### Table of Contents

No.

Questions

**Core React**

1

[What is React?](https://github.com/sudheerj/reactjs-interview-questions#what-is-react)

2

[What are the major features of React?](https://github.com/sudheerj/reactjs-interview-questions#what-are-the-major-features-of-react)

3

[What is JSX?](https://github.com/sudheerj/reactjs-interview-questions#what-is-jsx)

4

[What is the difference between Element and Component?](https://github.com/sudheerj/reactjs-interview-questions#what-is-the-difference-between-element-and-component)

5

[How to create components in React?](https://github.com/sudheerj/reactjs-interview-questions#how-to-create-components-in-react)

6

[When to use a Class Component over a Function](https://github.com/sudheerj/reactjs-interview-questions#when-to-use-a-class-component-over-a-function-component)

…

[View on GitHub](https://github.com/sudheerj/reactjs-interview-questions)

[](#30-seconds-of-react)30 Seconds of React
-------------------------------------------

_⭐ Github stars: 4.3k +_

_Short React code snippets for all your development needs_

*   Visit [our website](https://30secondsofcode.org/) to view our snippet collection.
*   Use the [Search page](https://30secondsofcode.org/search) to find snippets that suit your needs. You can search by name, tag, language, or a snippet’s description. Just start typing a term and see what comes up.
*   Browse the [React Snippet collection](https://30secondsofcode.org/react/p/1) to see all the snippets in this project, or click individual tags at the top of the same page to narrow your search to a specific title.
*   Click on each snippet card to view the whole snippet, including code, explanation, and examples.
*   You can use the button at the bottom of a snippet card to view the snippet in Codepen.
*   If you like the project, give it a star. It means a lot to the people maintaining it.

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [30-seconds](https://github.com/30-seconds) / [30-seconds-of-react](https://github.com/30-seconds/30-seconds-of-react)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Short React code snippets for all your development needs

[![Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--hNpAKshM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/30-seconds/30-seconds-of-react/logo.png)](https://30secondsofcode.org/react/p/1)

30 seconds of code
==================

> Short React code snippets for all your development needs

*   Visit [our website](https://30secondsofcode.org) to view our snippet collection.
*   Use the [Search page](https://30secondsofcode.org/search) to find snippets that suit your needs. You can search by name, tag, language or using a snippet's description. Just start typing a term and see what comes up.
*   Browse the [React Snippet collection](https://30secondsofcode.org/react/p/1) to see all the snippets in this project or click individual tags at the top of the same page to narrow down your search to a specific tag.
*   Click on each snippet card to view the whole snippet, including code, explanation and examples.
*   You can use the button at the bottom of a snippet card to view the snippet in Codepen.
*   If you like the project, give it a star. It means a lot to the people maintaining it.

Want to contribute?
-------------------

*   If you want to help us improve, take a…

[View on GitHub](https://github.com/30-seconds/30-seconds-of-react)

[](#react-hooks-cheatsheet)React Hooks Cheatsheet
-------------------------------------------------

_⭐ Github stars: 655+_

A Cheatsheet with live editable examples 💪

*   A one-stop reference for the React hooks APIs
*   Doesn’t replace the official docs.
*   However, it contains actual code examples, each mimicking all APIs of hooks.
*   It includes some real-world examples of cases/issues you’ll likely run into
*   Most importantly, the cheatsheet contains live editable codes.

\[

[](#github-ohansemmanuelreacthookscheatsheet-react-hooks-cheatsheet-with-live-editable)GitHub - ohansemmanuel/react-hooks-cheatsheet: 🦖 React hooks cheatsheet with live editable…
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [ohansemmanuel](https://github.com/ohansemmanuel) / [react-hooks-cheatsheet](https://github.com/ohansemmanuel/react-hooks-cheatsheet)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 🦖 React hooks cheatsheet with live editable examples

[![react-hooks-cheatsheet](https://camo.githubusercontent.com/2abb12afc4ff0b343b41e738a347dae2ff35ce8af34b52eddd583f349b388a0b/68747470733a2f2f692e696d6775722e636f6d2f52454c577973362e706e67 "react-hooks-cheatsheet")](http://react-hooks-cheatsheet.surge.sh/)
=================================================================================================================================================================================================================================================================

A Cheatsheet with live editable examples 💪

*   A one-stop reference for the React hooks APIs
*   Doesn't replace the official docs.
*   However, it contains actual code examples each mimicking all APIs of hooks.
*   Contains some real world examples of cases / issues you'll likely run into
*   Most importantly, the cheatsheet contains **live editable** codes.

  

[![](https://camo.githubusercontent.com/d59a01648b6ab192d95d0ae4e30e7d5d1675637aa50ef7d2f639d7e9fa43c8e6/68747470733a2f2f692e696d6775722e636f6d2f64734f466e65742e676966)](https://camo.githubusercontent.com/d59a01648b6ab192d95d0ae4e30e7d5d1675637aa50ef7d2f639d7e9fa43c8e6/68747470733a2f2f692e696d6775722e636f6d2f64734f466e65742e676966)

  
  

Examples
--------

*   includes live examples 🙋‍

[![](https://camo.githubusercontent.com/758ff5b222d048bdb42308606aae4816eee741ea0151cb4b4ec57f853cc05ce6/68747470733a2f2f692e696d6775722e636f6d2f78617757424e522e676966)](https://camo.githubusercontent.com/758ff5b222d048bdb42308606aae4816eee741ea0151cb4b4ec57f853cc05ce6/68747470733a2f2f692e696d6775722e636f6d2f78617757424e522e676966)

  

[👉🏿👉🏿👉🏿 Get Started](http://react-hooks-cheatsheet.surge.sh/)

Todos
-----

*   Add example call signatures to all hooks
*   Add more examples that explain interesting use cases from the official [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)

Contributing
------------

Contributions of any kind are welcome. If you wanna knock off any of the todos above, please feel free to issue a PR. Got an interesting idea for the cheatsheet? Issue a PR :)

[View on GitHub](https://github.com/ohansemmanuel/react-hooks-cheatsheet)

[](#reactredux-links)React/Redux Links
--------------------------------------

_⭐ Github stars: 21.6K+_

Curated tutorial and resource links I’ve collected on React, Redux, ES6, and more, meant to be a collection of high-quality articles and resources for someone who wants to learn about the React-Redux ecosystem as a source for quality information on advanced topics and techniques. Not quite “awesome,” but hopefully useful as a starting point, I can give others. Suggestions welcome.

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [markerikson](https://github.com/markerikson) / [react-redux-links](https://github.com/markerikson/react-redux-links)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Curated tutorial and resource links I've collected on React, Redux, ES6, and more

React/Redux Links
=================

Curated tutorial and resource links I've collected on React, Redux, ES6, and more, meant to be a collection of high-quality articles and resources for someone who wants to learn about the React-Redux ecosystem, as well as a source for quality information on advanced topics and techniques. Not quite "awesome", but hopefully useful as a starting point I can give to others. Suggestions welcome.

Another important resource is the **Reactiflux community on Discord**, which has chat channels dedicated to discussion of React, Redux, and other related technologies. There's always a number of people hanging out and answering questions, and it's a great place to ask questions and learn. The invite link is at **[https://www.reactiflux.com](https://www.reactiflux.com)**.

You might also want to check out my categorized list of Redux-related addons, libraries, and utilities, at [Redux Ecosystem Links](https://github.com/markerikson/redux-ecosystem-links). Also see [Community Resources](https://github.com/markerikson/react-redux-linkscommunity-resources.md) for links to other links lists, podcasts, and…

[View on GitHub](https://github.com/markerikson/react-redux-links)

[](#react-developer-roadmap)React Developer Roadmap
---------------------------------------------------

_⭐ Github stars: 17K+_

Below you can find a chart demonstrating the paths you can take and the libraries you would want to learn to become a React developer. I made this chart as a tip for everyone who asks me, “What should I learn next as a React developer?”

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [adam-golab](https://github.com/adam-golab) / [react-developer-roadmap](https://github.com/adam-golab/react-developer-roadmap)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Roadmap to becoming a React developer

React Developer Roadmap
=======================

[README in Chinese](https://github.com/adam-golab/react-developer-roadmapREADME-CN.md)

[README in Japanese](https://github.com/adam-golab/react-developer-roadmapREADME-JA.md)

[README in Korean](https://github.com/adam-golab/react-developer-roadmapREADME-KO.md)

[README in Portuguese (Brazil)](https://github.com/adam-golab/react-developer-roadmapREADME-PTBR.md)

[README in Russian](https://github.com/adam-golab/react-developer-roadmapREADME-RU.md)

[README in Spanish](https://github.com/adam-golab/react-developer-roadmapREADME-ES.md)

> Roadmap to becoming a React developer in 2019:

Below you can find a chart demonstrating the paths that you can take and the libraries that you would want to learn to become a React developer. I made this chart as a tip for everyone who asks me, "What should I learn next as a React developer?"

Disclaimer
----------

> The purpose of this roadmap is to give you an idea about the landscape. The road map will guide you if you are confused about what to learn next, rather than encouraging you to pick what is hip and trendy. You should grow some understanding of why one tool would be better suited for some cases than the other and remember hip and trendy does not always mean best suited for…

[View on GitHub](https://github.com/adam-golab/react-developer-roadmap)

[](#awesome-react-hooks)Awesome React Hooks
-------------------------------------------

_⭐ Github stars: 8.2K+_

The essential collection of custom React Hooks, complete with documentation.

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [rehooks](https://github.com/rehooks) / [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Awesome React Hooks

awesome-react-hooks [![Awesome](https://camo.githubusercontent.com/64f8905651212a80869afbecbf0a9c52a5d1e70beab750dea40a994fa9a9f3c6/68747470733a2f2f617765736f6d652e72652f62616467652e737667)](https://awesome.re)
==================================================================================================================================================================================================================

> Awesome React Hooks Resources

Documentation
-------------

*   [React Hooks Docs](https://reactjs.org/docs/hooks-intro.html)

Discussions
-----------

*   [React Hooks RFC](https://github.com/reactjs/rfcs/pull/68)

Tutorials
---------

*   ["Making Sense of React Hooks" by Dan Abramov](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
*   ["From React.Component to hooks" by Octave Raimbault](https://medium.com/@dispix/from-react-component-to-hooks-b50241334365)
*   ["React Hooks: What’s going to happen to my tests?" by Kent C. Dodds](https://blog.kentcdodds.com/react-hooks-whats-going-to-happen-to-my-tests-df4c2b4d67b7)
*   ["State Management with React Hooks - No Redux or Context API" by André Gardi](https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8)
*   ["How to Fetch Data with React Hooks?" by Robin Wieruch](https://www.robinwieruch.de/react-hooks-fetch-data/)
*   [Primer on React Hooks](https://testdriven.io/blog/react-hooks-primer/)
*   [React Hooks - A deeper dive featuring useContext and useReducer](https://testdriven.io/blog/react-hooks-advanced/)
*   ["Using Custom React Hooks to Simplify Forms" by James King](https://upmostly.com/tutorials/using-custom-react-hooks-simplify-forms)
*   [Testing of a Custom React Hook for Fetching Data with Axios](https://dev.to/doppelmutzi/testing-of-a-custom-react-hook-for-fetching-data-with-axios-4gf1)
*   [The Guide to Learning React Hooks (Examples & Tutorials) by Eric Bishard](https://www.telerik.com/kendo-react-ui/react-hooks-guide/)
*   ["Sanely Testing React Hooks" by Dave Cooper](https://dev.to/grug/sanely-testing-react-hooks-2l1j)
*   [React by Example: Hooks](https://reactbyexample.github.io/hooks)

Videos
------

*   [🎬 ReactConf 2018: React Today and Tomorrow by Sophie Alpert and Dan Abramov](https://youtu.be/V-QO-KO90iQ) Official announcement and first demo.
*   [🎬 ReactConf 2018: 90% Cleaner React by](https://youtu.be/wXLf18DsV-I)…

[View on GitHub](https://github.com/rehooks/awesome-react-hooks)

[](#awesome-nextjs)Awesome Next.js
----------------------------------

_⭐ Github stars: 7.5K+_

A selected assortment of books, videos, and articles about Next.js, the React server's rendering framework.

![GitHub logo](https://res.cloudinary.com/practicaldev/image/fetch/s--566lAguM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-5a155e1f9a670af7944dd5e12375bc76ed542ea80224905ecaf878b9157cdefc.svg) [unicodeveloper](https://github.com/unicodeveloper) / [awesome-nextjs](https://github.com/unicodeveloper/awesome-nextjs)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 📔 📚 A curated list of awesome resources : books, videos, articles about using Next.js (A minimalistic framework for universal server-rendered React applications)

Awesome Next.js [![Awesome](https://camo.githubusercontent.com/abb97269de2982c379cbc128bba93ba724d8822bfbe082737772bd4feb59cb54/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f617765736f6d652f643733303566333864323966656437386661383536353265336136336531353464643865383832392f6d656469612f62616467652e737667)](https://github.com/sindresorhus/awesome) [![](https://camo.githubusercontent.com/734582d357ac0fd914d293bf26684f2df45b85e317e71458042b885d693826dd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f756e69636f646576656c6f7065722d617070726f7665642d627269676874677265656e2e737667)](https://camo.githubusercontent.com/734582d357ac0fd914d293bf26684f2df45b85e317e71458042b885d693826dd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f756e69636f646576656c6f7065722d617070726f7665642d627269676874677265656e2e737667)
=====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

[![](https://camo.githubusercontent.com/affcb4d381c3f7305bd0598b9d426c17fdfc2bd7cd7f45352001834ab25f66bc/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f756e69636f646576656c6f7065722f696d6167652f75706c6f61642f76313532343737363736342f6e6578742d6a736c6f676f2e737667)](https://github.com/vercel/next.js)

> Curated list of resources: books, videos, articles about using Next.js.

[Next.js](https://github.com/vercel/next.js): The React Framework.

_List inspired by the [awesome](https://github.com/sindresorhus/awesome) list thing. You might also like [awesome-tdd](https://github.com/unicodeveloper/awesome-tdd)._

Contents
--------

*   [Awesome Next.js ![Awesome](https://res.cloudinary.com/practicaldev/image/fetch/s--b9leFlcO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/sindresorhus/awesome) ![](https://camo.githubusercontent.com/734582d357ac0fd914d293bf26684f2df45b85e317e71458042b885d693826dd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f756e69636f646576656c6f7065722d617070726f7665642d627269676874677265656e2e737667)](https://github.com/unicodeveloper/awesome-nextjs#awesome-nextjs-img-srchttpscdnrawgitcomsindresorhusawesomed7305f38d29fed78fa85652e3a63e154dd8e8829mediabadgesvg-altawesome-img-srchttpsimgshieldsiobadgeunicodeveloper-approved-brightgreensvg-alt)  
    *   [Contents](https://github.com/unicodeveloper/awesome-nextjs#contents)
    *   [Community](https://github.com/unicodeveloper/awesome-nextjs#community)
    *   [Essentials](https://github.com/unicodeveloper/awesome-nextjs#essentials)
    *   [Articles](https://github.com/unicodeveloper/awesome-nextjs#articles)
    *   [Boilerplates](https://github.com/unicodeveloper/awesome-nextjs#boilerplates)
    *   [Extensions](https://github.com/unicodeveloper/awesome-nextjs#extensions)
    *   [Apps](https://github.com/unicodeveloper/awesome-nextjs#apps)
    *   [Books](https://github.com/unicodeveloper/awesome-nextjs#books)
    *   [Videos](https://github.com/unicodeveloper/awesome-nextjs#videos)
    *   [Newsletters](https://github.com/unicodeveloper/awesome-nextjs#newsletters)
    *   [Contributing](https://github.com/unicodeveloper/awesome-nextjs#contributing)
    *   [License](https://github.com/unicodeveloper/awesome-nextjs#license)

Community
---------

*   [GitHub](https://github.com/vercel/next.js)
*   [GitHub discussions for Next.js](https://github.com/vercel/next.js/discussions)

Essentials
----------

*   [Blog](https://nextjs.org/blog)
*   [Learn](https://nextjs.org/learn)
*   [Vercel TV](https://vercel.com/tv)
*   [Bulletproof Next](https://getstarted.sh/bulletproof-next)

Articles
--------

*   [Using Next.js with FaunaDB: How to Query the Database from Your App](https://snipcart.com/blog/nextjs-faunadb)
*   [How to Build a Serverless Next.js Blog with ButterCMS](https://buttercms.com/blog/next-js-cms-tutorial)
*   [Build a Universal JavaScript App with Next.js](https://auth0.com/blog/building-universal-apps-with-nextjs)
*   [Getting Started with Next.js — Setting Up Your App](https://labs.redantler.com/getting-started-with-next-js-article-one-a1d9780ea9e0#.863nl4wnq)
*   [Getting Started with Next.js — Bringing Data In](https://labs.redantler.com/getting-started-with-next-js-bringing-data-in-bf40558698e2#.twjv5xk5w)
*   [How to build a Next.js React Universal App](https://medium.com/cosmicjs/how-to-build-a-next-js-react-universal-app-e610a0bc2124#.b8ayt9f39)
*   [Next on Next.js](https://web.archive.org/web/20170202170122if_/https://jsmantra.com/next-on-next-js-1a134505f346#.bhihzecyc)
*   [Accept payments on your site with nextjs, stripe, and micro](https://hackernoon.com/accept-payments-on-your-site-with-nextjs-stripe-and-micro-371de95b22d5?source=activity---post_recommended)
*   [Next.js on Cloud Functions for Firebase with Firebase Hosting](https://medium.com/@jthegedus/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2)
*   [Building a Blog With Next.js](https://timber.io/blog/building-a-blog-with-next-js)
*   [Using Google Analytics with Next.js](https://malloc.fi/using-google-analytics-with-next-js)
*   [Build a Universal JavaScript App with](https://habrahabr.ru/post/323588/)…

[View on GitHub](https://github.com/unicodeveloper/awesome-nextjs)

[

![Martin Adams](https://res.cloudinary.com/practicaldev/image/fetch/s--pOhFUIXs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/fit/c/96/96/1%2AaG1vIgjvCTAg6KzWHSI3WQ.jpeg)

](https://medium.com/@martinageradams/how-much-money-have-i-made-on-medium-8c60806a568f)[

How Much Money Have I Made on Medium? | by Martin Adams | Aug, 2022 | Medium
----------------------------------------------------------------------------

### Martin Adams ・ Aug 2, 2022 ・

![Medium Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--hnDHPsJs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/medium-f709f79cf29704f9f4c2a83f950b2964e95007a3e311b77f686915c71574fef2.svg) Medium





](https://medium.com/@martinageradams/how-much-money-have-i-made-on-medium-8c60806a568f)

[](#would-you-like-to-support-me)Would you like to support me?
--------------------------------------------------------------

**_Your tip will go to Martin through \*_[Stripe](https://buy.stripe.com/8wM7uW0s98YdeWscMM)** of his choice, letting him know you appreciate his story. _**[Give a tip](https://buy.stripe.com/8wM7uW0s98YdeWscMM)**_\*\*\*

**_I’m Martin Adams, the founder of [@RemoteCamp](https://twitter.com/RemoteCampHQ) and [@DailyContentWriting](https://twitter.com/DailyWritingHQ)_**.

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--O_DQRN45--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://s3.amazonaws.com/revue/profiles/images/000/493/881/thumb/aXKObjTX.jpg%3F1657691119)](https://www.getrevue.co/profile/remotecamp?via=dev.to)

[Weekly Jobs Newsletter of RemoteCamp | Revue](https://www.getrevue.co/profile/remotecamp?via=dev.to)
-----------------------------------------------------------------------------------------------------

Would you like to work remotely? Please, follow @Remote\_Camp and [@martinageradams](https://dev.to/martinageradams).

![favicon](https://res.cloudinary.com/practicaldev/image/fetch/s--e6R8-goK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://d3jbm9h03wxzi9.cloudfront.net/assets/favicon-4bca5727fc21fa6ee2a6ae554a6c236825acdd046c481ffce5748911f8b1f4a3.ico) getrevue.co

  

[

![Martin Adams](https://res.cloudinary.com/practicaldev/image/fetch/s--pOhFUIXs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/fit/c/96/96/1%2AaG1vIgjvCTAg6KzWHSI3WQ.jpeg)

](https://medium.com/remote-camp/get-a-blog-writer-job-on-linkedin-67185e5d97b7)[

Get a Blog Writer Job on LinkedIn | by Martin Adams | RemoteCamp | Aug, 2022 | Medium
-------------------------------------------------------------------------------------

### Martin Adams ・ Aug 6, 2022 ・

![Medium Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--hnDHPsJs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/medium-f709f79cf29704f9f4c2a83f950b2964e95007a3e311b77f686915c71574fef2.svg) Medium





](https://medium.com/remote-camp/get-a-blog-writer-job-on-linkedin-67185e5d97b7)

  

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--3vdI-fK2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://s3.amazonaws.com/revue/profiles/images/000/373/241/thumb/WechatIMG231.jpeg%3F1653637597)](https://www.getrevue.co/profile/martinageradams?via=dev.to)

[Weekly FrontEnd Newsletter of Martin | Revue](https://www.getrevue.co/profile/martinageradams?via=dev.to)
----------------------------------------------------------------------------------------------------------

Writing, Reading, Coding. #100DaysOfCode #vue #react #cesium #threejs #babylonjs #golang

![favicon](https://res.cloudinary.com/practicaldev/image/fetch/s--e6R8-goK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://d3jbm9h03wxzi9.cloudfront.net/assets/favicon-4bca5727fc21fa6ee2a6ae554a6c236825acdd046c481ffce5748911f8b1f4a3.ico) getrevue.co

  

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--GUwK5X5h--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://avatars.githubusercontent.com/u/51536312%3Fv%3D4%3Fs%3D400)](https://github.com/martinageradams)

[martinageradams (Martin Adams) · GitHub](https://github.com/martinageradams)
-----------------------------------------------------------------------------

Founder of @RemoteCampHQ, Technical Writer, Full-stack Developer, Freelancer Upwork, Front-end Developer, Content Creator, DM for collaborations - martinageradams

![favicon](https://res.cloudinary.com/practicaldev/image/fetch/s--uPIa4SpL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.githubassets.com/favicons/favicon.svg) github.com

**_Writing has always been my passion, and it gives me the pleasure of helping and inspiring people. If you have any questions, feel free to reach out!_**

Discussion (6)
--------------

Subscribe

    ![pic](https://res.cloudinary.com/practicaldev/image/fetch/s--RmY55OKL--/c_limit,f_auto,fl_progressive,q_auto,w_256/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png)

Personal Trusted User

![loading](https://dev.to/assets/loading-ellipsis-b714cf681fd66c853ff6f03dd161b77aa3c80e03cdc06f478b695f42770421e9.svg)

[Create template](/settings/response-templates)

Templates let you quickly answer FAQs or store snippets for re-use.

Submit Preview [Dismiss](/404.html)

Collapse Expand

[![everatwork profile image](https://res.cloudinary.com/practicaldev/image/fetch/s--bSb-dyOy--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/600917/83835854-68a3-48bd-82eb-0030f4364cff.png)](https://dev.to/everatwork)

[wladyslawko](https://dev.to/everatwork)

wladyslawko

 [![](https://res.cloudinary.com/practicaldev/image/fetch/s--tXJZyAC2--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/600917/83835854-68a3-48bd-82eb-0030f4364cff.png)wladyslawko](/everatwork)

Follow

*   Work
    
    FE Developer at SDG
    
*   Joined
    
    Mar 21, 2021
    

• [Aug 6](https://dev.to/everatwork/comment/20mgp)

Dropdown menu

*   [Copy link](https://dev.to/everatwork/comment/20mgp)

*   Hide

[](#good-job-well-appreciated)good job, well appreciated!
---------------------------------------------------------

Like comment: Like comment: 2 likes Like [Comment button Reply](#/martinageradams/20-github-repositories-to-become-a-react-master-opl/comments/new/20mgp)

Collapse Expand

[![martinageradams profile image](https://res.cloudinary.com/practicaldev/image/fetch/s--XkyDxpk6--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/334211/0056111b-38a1-4aed-bc3c-335c4e9e7f5e.jpeg)](https://dev.to/martinageradams)

[Martin Adams Author](https://dev.to/martinageradams)

Martin Adams

 [![](https://res.cloudinary.com/practicaldev/image/fetch/s--w2lNKttl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/334211/0056111b-38a1-4aed-bc3c-335c4e9e7f5e.jpeg)Martin Adams](/martinageradams)

Follow

• Founder @RemoteCamp • Technical Writer @Medium @DevTo • Freelancer @Upwork • Front-end Developer • Content Creator • YouTube As Hobbie • DM for collaborations

*   Email
    
    [martinageradams@gmail.com](mailto:martinageradams@gmail.com)
    
*   Location
    
    Chengdu, China
    
*   Work
    
    Upwork
    
*   Joined
    
    Feb 11, 2020
    

Author

• [Aug 7](https://dev.to/martinageradams/comment/20mj5)

Dropdown menu

*   [Copy link](https://dev.to/martinageradams/comment/20mj5)

*   Hide

Thanks.

Like comment: Like comment: 1 like Like [Comment button Reply](#/martinageradams/20-github-repositories-to-become-a-react-master-opl/comments/new/20mj5)

Collapse Expand

[![martinageradams profile image](https://res.cloudinary.com/practicaldev/image/fetch/s--XkyDxpk6--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/334211/0056111b-38a1-4aed-bc3c-335c4e9e7f5e.jpeg)](https://dev.to/martinageradams)

[Martin Adams Author](https://dev.to/martinageradams)

Martin Adams

 [![](https://res.cloudinary.com/practicaldev/image/fetch/s--w2lNKttl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/334211/0056111b-38a1-4aed-bc3c-335c4e9e7f5e.jpeg)Martin Adams](/martinageradams)

Follow

• Founder @RemoteCamp • Technical Writer @Medium @DevTo • Freelancer @Upwork • Front-end Developer • Content Creator • YouTube As Hobbie • DM for collaborations

*   Email
    
    [martinageradams@gmail.com](mailto:martinageradams@gmail.com)
    
*   Location
    
    Chengdu, China
    
*   Work
    
    Upwork
    
*   Joined
    
    Feb 11, 2020
    

Author

• [Aug 7](https://dev.to/martinageradams/comment/20mk4)

Dropdown menu

*   [Copy link](https://dev.to/martinageradams/comment/20mk4)

*   Hide

You're welcome.  
**Build 70+ React Projects to Master React for Free**  
[medium.com/gitconnected/build-70-r...](https://medium.com/gitconnected/build-70-react-projects-to-master-react-for-free-c612ce031982)

Like comment: Like comment: 1 like Like [Comment button Reply](#/martinageradams/20-github-repositories-to-become-a-react-master-opl/comments/new/20mk4)

Collapse Expand

[![jacksonkasi profile image](https://res.cloudinary.com/practicaldev/image/fetch/s--nYJ-fs3Q--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/547201/1f168bc8-328c-4ba5-b3f5-d87d1f2f77b2.jpeg)](https://dev.to/jacksonkasi)

[Jackson Kasi](https://dev.to/jacksonkasi)

Jackson Kasi

 [![](https://res.cloudinary.com/practicaldev/image/fetch/s--Tm6hk6AK--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/547201/1f168bc8-328c-4ba5-b3f5-d87d1f2f77b2.jpeg)Jackson Kasi](/jacksonkasi)

Follow

I am not only interested in developing applications, and also I am interested in Business, Marketing, Stocks, Art...

*   Email
    
    [nammalvar888@gmail.com](mailto:nammalvar888@gmail.com)
    
*   Location
    
    India
    
*   Education
    
    Completed School, no College but Learner until Death 😎
    
*   Work
    
    I am try to be an entrepreneur 🎯
    
*   Joined
    
    Dec 25, 2020
    

• [Aug 5](https://dev.to/jacksonkasi/comment/20lpa)

Dropdown menu

*   [Copy link](https://dev.to/jacksonkasi/comment/20lpa)

*   Hide

really thanks :)

Like comment: Like comment: 2 likes Like [Comment button Reply](#/martinageradams/20-github-repositories-to-become-a-react-master-opl/comments/new/20lpa)

Collapse Expand

[![martinageradams profile image](https://res.cloudinary.com/practicaldev/image/fetch/s--XkyDxpk6--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/334211/0056111b-38a1-4aed-bc3c-335c4e9e7f5e.jpeg)](https://dev.to/martinageradams)

[Martin Adams Author](https://dev.to/martinageradams)

Martin Adams

 [![](https://res.cloudinary.com/practicaldev/image/fetch/s--w2lNKttl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/334211/0056111b-38a1-4aed-bc3c-335c4e9e7f5e.jpeg)Martin Adams](/martinageradams)

Follow

• Founder @RemoteCamp • Technical Writer @Medium @DevTo • Freelancer @Upwork • Front-end Developer • Content Creator • YouTube As Hobbie • DM for collaborations

*   Email
    
    [martinageradams@gmail.com](mailto:martinageradams@gmail.com)
    
*   Location
    
    Chengdu, China
    
*   Work
    
    Upwork
    
*   Joined
    
    Feb 11, 2020
    

Author

• [Aug 6](https://dev.to/martinageradams/comment/20m73)

Dropdown menu

*   [Copy link](https://dev.to/martinageradams/comment/20m73)

*   Hide

You're welcome.  
**Build 70+ React Projects to Master React for Free**  
[medium.com/gitconnected/build-70-r...](https://medium.com/gitconnected/build-70-react-projects-to-master-react-for-free-c612ce031982)

Like comment: Like comment: 2 likes Like [Comment button Reply](#/martinageradams/20-github-repositories-to-become-a-react-master-opl/comments/new/20m73)

Collapse Expand

[![martinageradams profile image](https://res.cloudinary.com/practicaldev/image/fetch/s--XkyDxpk6--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/334211/0056111b-38a1-4aed-bc3c-335c4e9e7f5e.jpeg)](https://dev.to/martinageradams)

[Martin Adams Author](https://dev.to/martinageradams)

Martin Adams

 [![](https://res.cloudinary.com/practicaldev/image/fetch/s--w2lNKttl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/334211/0056111b-38a1-4aed-bc3c-335c4e9e7f5e.jpeg)Martin Adams](/martinageradams)

Follow

• Founder @RemoteCamp • Technical Writer @Medium @DevTo • Freelancer @Upwork • Front-end Developer • Content Creator • YouTube As Hobbie • DM for collaborations

*   Email
    
    [martinageradams@gmail.com](mailto:martinageradams@gmail.com)
    
*   Location
    
    Chengdu, China
    
*   Work
    
    Upwork
    
*   Joined
    
    Feb 11, 2020
    

Author

• [Aug 7](https://dev.to/martinageradams/comment/20mk3)

Dropdown menu

*   [Copy link](https://dev.to/martinageradams/comment/20mk3)

*   Hide

You're welcome.  
[medium.com/gitconnected/build-70-r...](https://medium.com/gitconnected/build-70-react-projects-to-master-react-for-free-c612ce031982)

Like comment: Like comment: 1 like Like [Comment button Reply](#/martinageradams/20-github-repositories-to-become-a-react-master-opl/comments/new/20mk3)

[Code of Conduct](/code-of-conduct) • [Report abuse](/report-abuse)

Are you sure you want to hide this comment? It will become hidden in your post, but will still be visible via the comment's [permalink](#).

Hide child comments as well

Confirm

For further actions, you may consider blocking this person and/or [reporting abuse](/report-abuse)

Read next
---------

[

![techsolutionstuff profile image](https://res.cloudinary.com/practicaldev/image/fetch/s--SoNVR1us--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/653570/24831d91-9306-43bd-b04b-58b642057be5.png)

### How To Get Current Date And Time In Node.js

Techsolutionstuff - Jul 29





](/techsolutionstuff/how-to-get-current-date-and-time-in-nodejs-4jm)[

![atiq profile image](https://res.cloudinary.com/practicaldev/image/fetch/s--uXlXD_Jj--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/873744/3f313760-a7f9-4f04-ac3b-d3bd59991fd4.jpg)

### Laravel vs Symfony

Atiq uz Zama - Jul 15





](/atiq/laravel-vs-symfony-7b5)[

![nevodavid profile image](https://res.cloudinary.com/practicaldev/image/fetch/s--ly3Km8J_--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/820341/e194b487-83e7-47d8-b388-eeb4645aaad0.png)

### How to build a real-time Auction System with Socket.io and React.js 🤯

Nevo David - Aug 1





](/novu/how-to-build-a-real-time-auction-system-with-socketio-and-reactjs-3ble)[

![yk_at_daiquiri_team profile image](https://res.cloudinary.com/practicaldev/image/fetch/s--KCd-LvpX--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/863656/29fa203a-c474-4d1a-999b-9cbfcd4213ea.jpeg)

### Alerting system and product metrics tracking: benefits for the product owner

Yevgeniy Kosmak - Jul 15





](/daiquiri_team/alerting-system-and-product-metrics-tracking-benefits-for-the-product-owner-ag9)

 [![](https://res.cloudinary.com/practicaldev/image/fetch/s--w2lNKttl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/334211/0056111b-38a1-4aed-bc3c-335c4e9e7f5e.jpeg)Martin Adams](/martinageradams)

Follow

• Founder @RemoteCamp • Technical Writer @Medium @DevTo • Freelancer @Upwork • Front-end Developer • Content Creator • YouTube As Hobbie • DM for collaborations

*   Location
    
    Chengdu, China
    
*   Work
    
    Upwork
    
*   Joined
    
    Feb 11, 2020
    

### More from [Martin Adams](/martinageradams)

[Free Project for React Beginners

#react #javascript #codenewbie #beginners

](/martinageradams/free-projects-for-react-beginners-11l9)[Do you really understand Webpack?

#webpack #javascript #vue #react

](/martinageradams/do-you-really-understand-webpack-25ao)

Once suspended, martinageradams will not be able to comment or publish posts until their suspension is removed.

Note:

Submit & Suspend

Once unsuspended, martinageradams will be able to comment and publish posts again.

Note:

Submit & Unsuspend

Once unpublished, all posts by martinageradams will become hidden and only accessible to themselves.

If martinageradams is not suspended, they can still re-publish their posts from their dashboard.

Unpublish all posts

Once unpublished, this post will become invisible to the public and only accessible to Martin Adams.

They can still re-publish the post if they are not suspended.

Unpublish post

Thanks for keeping DEV Community safe. Here is what you can do to flag martinageradams:

 Make all posts by martinageradams less visible

martinageradams consistently posts content that violates DEV Community's code of conduct because it is harassing, offensive or spammy.

[Report other inappropriate conduct](javascript:void(0);)

Confirm Flag

Unflagging martinageradams will restore default visibility to their posts.

Confirm Unflag

var waitingOnPodcast = setInterval(function() { if (typeof initializePodcastPlayback !== 'undefined') { initializePodcastPlayback(); clearInterval(waitingOnPodcast); } }, 1); if (document.head.querySelector('meta\[name="user-signed-in"\]\[content="true"\]')) { function displayPollResults(json) { var totalVotes = json.voting\_data.votes\_count; json.voting\_data.votes\_distribution.forEach(function(point) { var pollOptionItem = document.getElementById('poll\_option\_list\_item\_'+point\[0\]); var optionText = document.getElementById('poll\_option\_label\_'+point\[0\]).textContent; if (json.user\_vote\_poll\_option\_id === point\[0\]) { var votedClass = 'optionvotedfor' } else { var votedClass = 'optionnotvotedfor' } if (totalVotes === 0) { var percent = 0; } else { var percent = (point\[1\]/totalVotes)\*100; } var roundedPercent = Math.round( percent \* 10 ) / 10 var percentFromRight = (100-roundedPercent) var html = '<span><span class="ltag-votepercent ltag-'+votedClass+'" style="right:'+percentFromRight+'%"></span> <span class="ltag-votepercenttext">'+optionText+' — '+roundedPercent+'%</span></span>'; pollOptionItem.innerHTML = html; pollOptionItem.classList.add('already-voted') document.getElementById('showmethemoney-'+json.poll\_id).innerHTML = '<span class="ltag-voting-results-count">'+totalVotes+' total votes</span>'; }) } var polls = document.getElementsByClassName('ltag-poll'); for (var i = 0; i < polls.length; i += 1) { var poll = polls\[i\] var pollId = poll.dataset.pollId window.fetch('/poll\_votes/'+pollId) .then(function(response){ response.json().then( function(json) { if (json.voted) { displayPollResults(json) } else { var els = document.getElementById('poll\_'+json.poll\_id).getElementsByClassName('ltag-polloption'); for (i = 0; i < els.length; i += 1) { els\[i\].addEventListener('click', function(e) { var tokenMeta = document.querySelector("meta\[name='csrf-token'\]") if (!tokenMeta) { alert('Whoops. There was an error. Your vote was not counted. Try refreshing the page.') return } var csrfToken = tokenMeta.getAttribute('content') var optionId = e.target.dataset.optionId window.fetch('/poll\_votes', { method: 'POST', headers: { 'X-CSRF-Token': csrfToken, 'Content-Type': 'application/json', }, body: JSON.stringify({poll\_vote: { poll\_option\_id: optionId } }), credentials: 'same-origin', }).then(function(response){ response.json().then(function(j){displayPollResults(j)}) }) }); } document.getElementById('showmethemoney-'+json.poll\_id).addEventListener('click', function() { pollId = this.dataset.pollId window.fetch('/poll\_skips', { method: 'POST', headers: { 'X-CSRF-Token': csrfToken, 'Content-Type': 'application/json', }, body: JSON.stringify({poll\_skip: {poll\_id: pollId }}), credentials: 'same-origin', }).then(function(response){ response.json().then(function(j){displayPollResults(j)}) }) }); } } ) }) } } else { var els = document.getElementsByClassName('ltag-poll') for (i = 0; i < els.length; i += 1) { els\[i\].onclick = function(e) { if (typeof showLoginModal !== "undefined") { showLoginModal(); } } } } function activateRunkitTags() { if (!areAnyRunkitTagsPresent()) return var checkRunkit = setInterval(function() { try { dynamicallyLoadRunkitLibrary() if (typeof(RunKit) === 'undefined') { return } replaceTagContentsWithRunkitWidget() clearInterval(checkRunkit); } catch(e) { console.error(e); clearInterval(checkRunkit); } }, 200); } function isRunkitTagAlreadyActive(runkitTag) { return runkitTag.querySelector("iframe") !== null; }; function areAnyRunkitTagsPresent() { var presentRunkitTags = document.getElementsByClassName("runkit-element"); return presentRunkitTags.length > 0 } function replaceTagContentsWithRunkitWidget() { var targets = document.getElementsByClassName("runkit-element"); for (var i = 0; i < targets.length; i++) { if (isRunkitTagAlreadyActive(targets\[i\])) { continue; } var wrapperContent = targets\[i\].textContent; if (/^(<iframe src)/.test(wrapperContent) === false) { if (targets\[i\].children.length > 0) { var preamble = targets\[i\].children\[0\].textContent; var content = targets\[i\].children\[1\].textContent; targets\[i\].innerHTML = ""; var notebook = RunKit.createNotebook({ element: targets\[i\], source: content, preamble: preamble }); } } } }; function dynamicallyLoadRunkitLibrary() { if (typeof(dynamicallyLoadScript) === "undefined") return dynamicallyLoadScript("//embed.runkit.com") } activateRunkitTags(); var videoPreviews = document.getElementsByClassName("ltag\_\_twitter-tweet\_\_media\_\_video-wrapper"); \[\].forEach.call(videoPreviews, function(el) { el.onclick = function(e) { var divHeight = el.offsetHeight; el.style.maxHeight = divHeight + "px"; el.getElementsByClassName("ltag\_\_twitter-tweet\_\_media--video-preview")\[0\].style.display = "none"; el.getElementsByClassName("ltag\_\_twitter-tweet\_\_video")\[0\].style.display = "block"; el.getElementsByTagName("video")\[0\].play(); } }); var tweets = document.getElementsByClassName("ltag\_\_twitter-tweet\_\_main"); \[\].forEach.call(tweets, function(tweet){ tweet.onclick = function(e) { if (e.target.nodeName == "A" || e.target.parentElement.nodeName == "A") { return; } window.open(tweet.dataset.url,"\_blank"); } });

[DEV Community](/) — A constructive and inclusive social network for software developers. With you every step of your journey.

Built on [Forem](https://www.forem.com) — the [open source](https://dev.to/t/opensource) software that powers [DEV](https://dev.to) and other inclusive communities.

Made with love and [Ruby on Rails](https://dev.to/t/rails). DEV Community © 2016 - 2022.

[Forem logo](https://www.forem.com)