import React, { Component } from 'react'

//  Components
import Loader from './Loader/Loader'
import Header from './Header/Header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Home extends Component {

  render() {

    return (
      <div>
        <div class="cd-index cd-main-content">
          <div id="page-content" class="light-content" data-bgcolor="#141414">
            <Header />
            <div id="content-scroll">
              <div id="main">
                <div id="main-content">
                  <div id="showcase-carousel-holder" class="disable-drag">
                    <div id="itemsWrapperLinks">

                      <div id="showcase-slider" class="swiper-container">
                        <div id="itemsWrapper" class="swiper-wrapper">
                          <div class="swiper-slide" data-slide="01">
                            <div class="img-mask">
                              <div class="section-image"><img src="images/01hero.jpg" class="item-image grid__item-img" alt="" /></div>
                              <img class="grid__item-img grid__item-img--large" src="images/01hero.jpg" />
                            </div>
                            <div class="move-caption">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title" data-swiper-parallax-x="-200%"><span>Rockfeller</span></div>
                                  <a data-type="page-transition" href="/project01.html"></a>
                                </div>
                              </div>
                            </div>
                            <div class="move-caption stroked">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title thumb-link" data-swiper-parallax-x="-200%" data-firstline="View" data-secondline="Project"><span>Rockfeller</span></div>
                                  <div class="subtitle" data-swiper-parallax-x="-60%"><span>Web App</span></div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div class="swiper-slide" data-slide="02">
                            <div class="img-mask">
                              <div class="section-image"><img class="item-image grid__item-img" src="images/02hero.jpg" alt="" /></div>
                              <img class="grid__item-img grid__item-img--large" src="images/02hero.jpg" />
                            </div>
                            <div class="move-caption">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title" data-swiper-parallax-x="-200%"><span>Photography</span></div>
                                  <a data-type="page-transition" href="/project02.html"></a>
                                </div>
                              </div>
                            </div>
                            <div class="move-caption stroked">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title thumb-link" data-swiper-parallax-x="-200%" data-firstline="View" data-secondline="Project"><span>Photography</span></div>
                                  <div class="subtitle" data-swiper-parallax-x="-60%"><span>Photography</span></div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div class="swiper-slide" data-slide="03">
                            <div class="img-mask">
                              <div class="section-image"><img class="item-image grid__item-img" src="images/03hero.jpg" alt="" /></div>
                              <img class="grid__item-img grid__item-img--large" src="images/03hero.jpg" />
                            </div>
                            <div class="move-caption">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title" data-swiper-parallax-x="-200%"><span>Tag Watch</span></div>
                                  <a data-type="page-transition" href="/project03.html"></a>
                                </div>
                              </div>
                            </div>
                            <div class="move-caption stroked">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title thumb-link" data-swiper-parallax-x="-200%" data-firstline="View" data-secondline="Project"><span>Tag Watch</span></div>
                                  <div class="subtitle" data-swiper-parallax-x="-60%"><span>Product Design</span></div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div class="swiper-slide" data-slide="04">
                            <div class="img-mask">
                              <div class="section-image">
                                <img class="item-image grid__item-img" src="images/04hero.jpg" alt="" />
                                <div class="hero-video-wrapper">
                                  <video loop muted class="bgvid">
                                    <source src="/" type="video/mp4" />
                                    <source src="/" />
                                  </video>
                                </div>
                              </div>
                              <img class="grid__item-img grid__item-img--large" src="images/04hero.jpg" />
                            </div>
                            <div class="move-caption">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title" data-swiper-parallax-x="-200%"><span>Dance Room</span></div>
                                  <a data-type="page-transition" href="project04.html"></a>
                                </div>
                              </div>
                            </div>
                            <div class="move-caption stroked">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title thumb-link" data-swiper-parallax-x="-200%" data-firstline="View" data-secondline="Project"><span>Dance Room</span></div>
                                  <div class="subtitle" data-swiper-parallax-x="-60%"><span>Video</span></div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div class="swiper-slide" data-slide="05">
                            <div class="img-mask">
                              <div class="section-image"><img class="item-image grid__item-img" src="images/05hero.jpg" alt="" /></div>
                              <img class="grid__item-img grid__item-img--large" src="images/05hero.jpg" />
                            </div>
                            <div class="move-caption">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title" data-swiper-parallax-x="-200%"><span>Opulence</span></div>
                                  <a data-type="page-transition" href="project05.html"></a>
                                </div>
                              </div>
                            </div>
                            <div class="move-caption stroked">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title thumb-link" data-swiper-parallax-x="-200%" data-firstline="View" data-secondline="Project"><span>Opulence</span></div>
                                  <div class="subtitle" data-swiper-parallax-x="-60%"><span>Branding</span></div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div class="swiper-slide" data-slide="06">
                            <div class="img-mask">
                              <div class="section-image"><img class="item-image grid__item-img" src="images/06hero.jpg" alt="" /></div>
                              <img class="grid__item-img grid__item-img--large" src="images/06hero.jpg" />
                            </div>
                            <div class="move-caption">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title" data-swiper-parallax-x="-200%"><span>Cairs Root</span></div>
                                  <a data-type="page-transition" href="project06.html"></a>
                                </div>
                              </div>
                            </div>
                            <div class="move-caption stroked">
                              <div class="outer">
                                <div class="inner">
                                  <div class="move-title thumb-link" data-swiper-parallax-x="-200%" data-firstline="View" data-secondline="Project"><span>Cairs Root</span></div>
                                  <div class="subtitle" data-swiper-parallax-x="-60%"><span>Product Design</span></div>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>


                    </div>
                  </div>


                </div>

              </div>

              <footer class="hidden">
                <div id="footer-container">

                  <div class="button-wrap left disable-drag swiper-prev">
                    <div class="icon-wrap parallax-wrap">
                      <div class="button-icon parallax-element">
                        <i class="fa fa-angle-left"></i>
                      </div>
                    </div>
                    <div class="button-text sticky left"><span data-hover="Prev Slide">Prev Slide</span></div>
                  </div>

                  <div class="swiper-pagination disable-drag"></div>

                  <div class="button-wrap right disable-drag swiper-next">
                    <div class="icon-wrap parallax-wrap">
                      <div class="button-icon parallax-element">
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                    <div class="button-text sticky right"><span data-hover="Next Slide">Next Slide</span></div>
                  </div>

                </div>
              </footer>

            </div>
            <div id="app"></div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home
