import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
//import profilePic from '../public/atencaocliente1.gif'
//import profilePic2 from '../public/atencaocliente2.gif'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `./${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (
    <div class='contairner-fluid'>
      <div class='row'>
          <div class='col'></div>
          <div class='col-6'>
          <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Price</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
              <div class='row'>
              <Image loader={myLoader} src='./atencaocliente1.gif' alt="Rosto de Jovepy" width={150} height={150} class="profile"/>
              <div class='row'>envie o seu processo operacional</div>
              </div>
              <div class='row'>
              <Image loader={myLoader} src='./atencaocliente2.gif' alt="Rosto de Jovepy" width={150} height={150} class="profile"/>
              <div class='row'>criamos a solução</div>
              </div>
              
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">Price</div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">contact</div>
          </div>
          </div>
        <div class='col'></div>
    </div>
    
</div>
  )
}
