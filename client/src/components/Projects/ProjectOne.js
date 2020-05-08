import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader'
import Header from '../Header/Header'

export default function ProjectOne() {

    useEffect(() => {
        console.log("component mounted")
    });

    return (
        <div class="hidden hidden-ball">
            <main>
                <div class="preloader-wrap" data-firstline="Stay" data-secondline="Relaxed">
                    <Loader />
                </div>
                <div class="cd-index cd-main-content" id="test">
                    <div id="page-content" class="light-content layered-hero" data-bgcolor="#141414">
                        <Header />

                        <div id="content-scroll">
                            <div id="main">
                                <div id="hero" class="has-image autoscroll">
                                    <div id="hero-styles">
                                        <div id="hero-caption" class="reverse-parallax-onscroll">
                                            <div class="inner">
                                                <div class="hero-title"><span>Lorem Ipsum .</span></div>
                                                <div class="hero-subtitle">Lorem Ipsum is simply .</div>
                                            </div>
                                        </div>
                                        <div id="hero-footer">
                                            <div class="hero-footer-left">
                                                <div class="button-wrap left disable-drag scroll-down">
                                                    <div class="icon-wrap parallax-wrap">
                                                        <div class="button-icon parallax-element">
                                                            <i class="fa fa-angle-down"></i>
                                                        </div>
                                                    </div>
                                                    <div class="button-text sticky left"><span data-hover="Scroll or drag to navigate">Scroll or drag to navigate</span></div>
                                                </div>
                                            </div>
                                            <div class="hero-footer-right">
                                                <div id="share" class="page-action-content disable-drag" data-text="Share:"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="hero-image-wrapper">
                                    <div id="hero-background-layer" class="parallax-scroll-effect">
                                        <div id="hero-bg-image" style={{ backgroundImage: "url(images/01hero.jpg)" }}></div>
                                    </div>
                                </div>

                                <div id="main-content">
                                    <div id="main-page-content">

                                        <div class="vc_row row_padding_top row_padding_bottom">

                                            <div class="two_third">
                                                <h4 class="has-mask" data-delay="0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.e</h4>
                                                <p class="has-animation" data-delay="400">BLorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                                            </div>

                                            <div class="one_third last text-align-right">
                                                <hr />
                                                <div class="button-wrap right disable-drag has-animation" data-delay="350">
                                                    <div class="icon-wrap parallax-wrap">
                                                        <div class="button-icon parallax-element">
                                                            <i class="fa fa-angle-right"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="vc_row large">

                                            <div class="row-half-color first half-dark-section" data-bgcolor="#141414"></div>
                                            <div class="row-half-color second half-white-section change-header-color" data-bgcolor="#fff"></div>

                                            <div class="swiper-container content-slider disable-drag has-animation has-scale-vertical autocenter" data-delay="0">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide"><div class="slide-img"><img src="images/projects/placeholder.png" alt="Image Title" /></div></div>
                                                    <div class="swiper-slide"><div class="slide-img"><img src="images/projects/placeholder.png" alt="Image Title" /></div></div>
                                                    <div class="swiper-slide"><div class="slide-img"><img src="images/projects/placeholder.png" alt="Image Title" /></div></div>
                                                </div>
                                                <div class="slider-button-next"></div>
                                                <div class="slider-button-prev"></div>
                                            </div>

                                        </div>


                                        <div class="vc_row white-section change-header-color" data-bgcolor="#fff">

                                            <hr /><hr /><hr />

                                            <div class="one_half"></div>

                                            <div class="one_half last">
                                                <h4 class="has-mask" data-delay="0">Showcase Options</h4>
                                                <p class="has-animation" data-delay="400">Placeholder</p>
                                            </div>

                                            <hr /><hr />

                                        </div>


                                        <div class="vc_row white-section change-header-color large" data-bgcolor="#fff">

                                            <figure class="has-animation has-scale-vertical" data-delay="0">
                                                <img src="images/projects/placeholder.png" alt="Placeholder" />
                                            </figure>

                                        </div>

                                        <div class="vc_row white-section change-header-color" data-bgcolor="#fff">

                                            <hr /><hr /><hr />

                                            <div class="one_half">
                                                <h4 class="has-mask" data-delay="0">Showcase Options</h4>
                                                <p class="has-animation" data-delay="400">Placeholder</p>
                                            </div>

                                            <div class="one_half last"></div>

                                            <hr /><hr />

                                        </div>

                                        <div class="vc_row large">

                                            <div class="row-half-color first half-white-section change-header-color" data-bgcolor="#fff"></div>
                                            <div class="row-half-color second half-dark-section" data-bgcolor="#202020"></div>

                                            <figure class="has-animation has-scale-vertical" data-delay="0">
                                                <img src="images/projects/placeholder.png" alt="Placeholder" />
                                            </figure>

                                        </div>

                                        <div class="vc_row row_padding_top dark-section" data-bgcolor="#202020">

                                            <div class="one_half">
                                                <p class="has-animation" data-delay="0">Fully Responsive design</p>
                                                <h3 class="has-mask" data-delay="0">Placeholder.</h3>
                                            </div>

                                            <div class="one_half last"></div>

                                            <hr /><hr /><hr />

                                        </div>

                                        <div class="vc_row dark-section" data-bgcolor="#202020">

                                            <div class="swiper-container content-carousel disable-drag">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide"><img src="images/projects/placeholder.png" alt="Image Title" /></div>
                                                    <div class="swiper-slide"><img src="images/projects/placeholder.png" alt="Image Title" /></div>
                                                    <div class="swiper-slide"><img src="images/projects/placeholder.png" alt="Image Title" /></div>
                                                    <div class="swiper-slide"><img src="images/projects/placeholder.png" alt="Image Title" /></div>
                                                    <div class="swiper-slide"><img src="images/projects/placeholder.png" alt="Image Title" /></div>
                                                </div>
                                            </div>

                                        </div>


                                        <div class="vc_row row_padding_bottom dark-section" data-bgcolor="#202020">

                                            <hr /><hr /><hr /><hr /><hr class="white-line has-animation" /><hr /><hr /><hr /><hr />

                                            <div class="three_fourth">
                                                <h1 class="has-mask">Placeholder.</h1>
                                            </div>

                                            <div class="one_fourth last"></div>

                                            <div class="one_half"></div>

                                            <div class="one_half last">
                                                <p class="has-animation" data-delay="100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                            </div>

                                        </div>


                                        <div class="vc_row large row_padding_top row_padding_bottom white-section change-header-color" data-bgcolor="#fff">

                                            <hr />
                                            <figure class="has-animation has-scale-vertical" data-delay="0">
                                                <img src="images/projects/placeholder.png" alt="Placeholder" />
                                            </figure>
                                            <hr />

                                        </div>


                                        <div class="vc_row row_padding_top row_padding_bottom dark-section" data-bgcolor="#202020">

                                            <div class="one_half">
                                                <div class="three_fourth">
                                                    <figure class="has-animation" data-delay="200">
                                                        <img src="images/projects/placeholder.png" alt="Placeholder" />
                                                    </figure>
                                                </div>
                                            </div>

                                            <div class="one_half last">

                                                <hr /><hr /><hr /><hr />
                                                <h4 class="has-mask" data-delay="0">Portfolio Layouts</h4>
                                                <p class="has-animation" data-delay="300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                <hr /><hr />
                                                <figure class="has-animation has-scale" data-delay="200">
                                                    <img src="images/projects/placeholder.png.jpg" alt="Placeholder" />
                                                </figure>
                                            </div>

                                        </div>


                                        <div class="vc_row full">

                                            <figure class="has-animation has-parallax has-scale" data-delay="100">
                                                <img src="images/projects/placeholder.png" alt="Image Title" />
                                            </figure>

                                        </div>


                                        <div class="vc_row row_padding_top row_padding_bottom dark-section" data-bgcolor="#202020">

                                            <div class="one_half">
                                                <p class="has-animation" data-delay="50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                <h3 class="has-mask">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                                            </div>

                                            <hr /><hr class="white-line has-animation" /><hr /><hr /><hr />

                                            <div class="one_third has-animation" data-delay="100">
                                                <h5>GLorem Ipsum is simply dummy text of the printing and typesetting industry. r</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>

                                            <div class="one_third has-animation" data-delay="150">
                                                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                            </div>

                                            <div class="one_third last has-animation" data-delay="200">
                                                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                                                <p>PLorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                            </div>

                                            <hr /><hr />

                                            <div class="one_third has-animation" data-delay="250">
                                                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                                                <p>FLorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                            </div>

                                            <div class="one_third  has-animation" data-delay="300">
                                                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. s</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>

                                            <div class="one_third last has-animation" data-delay="350">
                                                <h5>Fast Loading</h5>
                                                <p>TLorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                            </div>

                                            <hr /><hr />

                                            <div class="one_third has-animation" data-delay="400">
                                                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>

                                            <div class="one_third has-animation" data-delay="450">
                                                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                            </div>

                                            <div class="one_third last has-animation" data-delay="500">
                                                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                                                <p>FLorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>

                                        </div>


                                    </div>



                                    <div id="project-nav" class="app-canvas">
                                        <div class="next-project-wrap">
                                            <div class="next-project-title">
                                                <div class="inner">
                                                    <div id="itemsWrapperLinks">
                                                        <div id="itemsWrapper">
                                                            <div class="item disable-drag active">
                                                                <div class="item-appear">
                                                                    <div class="item-content">
                                                                        <a class="item-wrap ajax-link-project" data-type="page-transition" href="project02.html"></a>
                                                                        <div class="item-wrap-image"><img src="images/02hero.jpg" class="item-image grid__item-img" data-firstline="Next" data-secondline="Project" alt="" /></div>
                                                                        <img class="grid__item-img grid__item-img--large" src="images/02hero.jpg" />
                                                                    </div>
                                                                    <div class="item-caption">
                                                                        <h2 class="item-title">Iceland</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="marquee-wrapper">
                                                        <div class="next-title-marquee" data-text="Iceland Iceland Iceland Iceland Iceland Iceland Iceland">Iceland Iceland Iceland Iceland Iceland Iceland Iceland</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>


                            <footer class="hidden">
                                <div id="footer-container">

                                    <div id="backtotop" class="button-wrap left">
                                        <div class="icon-wrap parallax-wrap">
                                            <div class="button-icon parallax-element">
                                                <i class="fa fa-angle-up"></i>
                                            </div>
                                        </div>
                                        <div class="button-text sticky left"><span data-hover="Back Top">Back Top</span></div>
                                    </div>

                                    <div class="footer-middle">
                                        <div class="copyright">2020 © <a class="link" target="_blank" href="https://www.gerardomestanza.com/">GerardoM.</a> All rights reserved.</div>
                                    </div>

                                    <div class="socials-wrap">
                                        <div class="socials-icon"><i class="fa fa-share-alt" aria-hidden="true"></i></div>
                                        <div class="socials-text">Contact Me</div>
                                        <ul class="socials">
                                            <li><span class="parallax-wrap"><a class="parallax-element" href="https://github.com/Gmes23" target="_blank">Git</a></span></li>
                                            <li><span class="parallax-wrap"><a class="parallax-element" href="https://stackoverflow.com/users/7221832/g-mestanza" target="_blank">SO</a></span></li>
                                            <li><span class="parallax-wrap"><a class="parallax-element" href="https://www.linkedin.com/in/gerardomestanza/" target="_blank">LNKD</a></span></li>
                                        </ul>
                                    </div>

                                </div>
                            </footer>


                        </div>

                        <div id="app"></div>



                    </div>

                </div>
            </main>



        </div>
    )
}
