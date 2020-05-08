import React, { useState, useEffect } from 'react';


export default function Header() {
    return (
        <div>
            <header class="fullscreen-menu">
                <div id="header-container">
                    <div id="logo" class="hide-ball">
                        <a class="ajax-link" data-type="page-transition" href="/">
                            <h1> GM </h1>
                        </a>
                    </div>
                    <nav>
                        <div class="nav-height">
                            <div class="outer">
                                <div class="inner">
                                    <ul data-breakpoint="10025" class="flexnav">
                                        <li class="link menu-timeline"><a href="#"><div class="before-span"><span data-hover="Portfolio">Portfolio</span></div></a>
                                            <ul>
                                                <li><a class="ajax-link" href="/main.html" data-type="page-transition">Main</a></li>
                                                <li><a class="ajax-link" href="index-showcase.html" data-type="page-transition">Fullscreen Slider</a></li>
                                                <li><a class="ajax-link" href="index-portfolio-grid.html" data-type="page-transition">Portfolio Grid</a></li>
                                            </ul>
                                        </li>
                                        <li class="link menu-timeline"><a class="ajax-link" data-type="page-transition" href="about.html"><div class="before-span"><span data-hover="About">About</span></div></a></li>
                                        <li class="link menu-timeline"><a class="ajax-link" data-type="page-transition" href="contact.html"><div class="before-span"><span data-hover="Contact">Contact</span></div></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div class="button-wrap right  menu">
                        <div class="icon-wrap parallax-wrap">
                            <div class="button-icon parallax-element">
                                <div id="burger-wrapper">
                                    <div id="menu-burger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="button-text sticky right"><span data-hover="Menu">Menu</span></div>
                    </div>
                </div>
            </header>
        </div>
    );
}