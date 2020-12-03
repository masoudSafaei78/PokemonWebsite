import React from 'react'

import '../Styles/test2.scss';

function Test2() {
    return (
        <div class="artboard">
        <div class="card">
       
         <div class="card__side card__side--back">
          <div class="card__cover">
           <h4 class="card__heading">
            <span class="card__heading-span">Skills</span>
           </h4>
          </div>
          <div class="card__details">
           <ul>
            <li>Advanced JS and CSS</li>
            <li>JS/CSS Preprocessors</li>
            <li>JS Frameworks</li>
            <li>Advanced Animations</li>
            <li>Deployment Pipelines</li>
            <li>Large Apps Architectures</li>
            <li>Naming Conventions</li>
           </ul>
          </div>
         </div>
       
         <div class="card__side card__side--front">
          <div class="card__theme">
           <div class="card__theme-box">
            <p class="card__subject">Web Developer</p>
            <p class="card__title">Hello World!</p>
           </div>
          </div>
         </div>
       
        </div>
       </div>
    )
}

export default Test2
