import React, { useState, useEffect } from 'react';


export default function MagicCursor() {
    return (
        <div>
            <div class="cd-cover-layer"></div>
            <div id="magic-cursor">
                <div id="ball">
                    <div id="ball-drag"></div>
                    <div id="ball-loader"></div>
                </div>
            </div>
            <div id="clone-image"></div>
            <div id="rotate-device"></div>
        </div>
    )
}