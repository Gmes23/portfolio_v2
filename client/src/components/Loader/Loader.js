import React, { useState, useEffect } from 'react';


export default function Loader() {
    return (
        <div class="preloader-wrap" data-firstline="Stay" data-secondline="Relaxed">

        <div class="outer">
              <div class="inner">
                  <div class="preloader-marquee-mask">
                      <div class="preloader-marquee-wrapper">
                          <div class="preloader-marquee" data-text="Loading Gerardo M. Portfolio Loading Gerardo M. Portfolio Loading Gerardo M. Portfolio Website">Loading Gerardo M. Portfolio Loading Gerardo M. Portfolio Website Loading Gerardo M. Portfolio Website</div>
                      </div>
                  </div>
                  
                  <div class="preloader-marquee-wrapper stroked">
                      <div class="preloader-marquee" data-text="Loading Gerardo M. Portfolio Loading Gerardo M. Portfolio Loading Gerardo M. Portfolio">Loading Gerardo M. Portfolio Loading Gerardo M. Portfolio Loading Gerardo M. Portfolio</div>
                  </div>
                  
                  <div class="percentage-wrapper"><div class="percentage" id="precent"></div></div>
                  <div class="trackbar">
                      <div class="loadbar"></div>
                  </div>                     
              </div>
             </div>
        </div>
    );
  }