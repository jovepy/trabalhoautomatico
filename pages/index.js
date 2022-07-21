import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Image from 'next/image';
import Router from 'next/router';

const myLoader = ({ src, width, quality }) => {
  return `./${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (
    <div className='bg-white'>
    <div className='contairner-fluid'>
      
          <ul className="nav nav-pills nav-fill" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Price</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
              <br></br>
              <div className='row'>
                <p className='text-center'>
              <Image loader={myLoader} src='./atencaocliente1.gif' alt="Rosto de Jovepy" width={480} height={270} className="profile"/>
              </p>
              </div>
              <div className='row'>
                <p className='text-center'>
              <Image loader={myLoader} src='./atencaocliente2.gif' alt="Rosto de Jovepy" width={480} height={270} className="profile"/>
                </p>
              </div>
              

          </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
              comeca aqui
              
              <div className="row">
                <div className="col-4">
                  <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                    <nav className="nav nav-pills flex-column">
                      <a className="nav-link" href="#item-1">Item 1</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                        <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                      </nav>
                      <a className="nav-link" href="#item-2">Item 2</a>
                      <a className="nav-link" href="#item-3">Item 3</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                        <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                      </nav>
                    </nav>
                  </nav>
                </div>

                <div className="col-8">
                  <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex="0">
                    <div id="item-1">
                      <h4>Item 1</h4>
                      <p>...</p>
                    </div>
                    <div id="item-1-1">
                      <h5>Item 1-1</h5>
                      <p>...</p>
                    </div>
                    <div id="item-1-2">
                      <h5>Item 1-2</h5>
                      <p>...</p>
                    </div>
                    <div id="item-2">
                      <h4>Item 2</h4>
                      <p>...</p>
                    </div>
                    <div id="item-3">
                      <h4>Item 3</h4>
                      <p>...</p>
                    </div>
                    <div id="item-3-1">
                      <h5>Item 3-1</h5>
                      <p>...</p>
                    </div>
                    <div id="item-3-2">
                      <h5>Item 3-2</h5>
                      <p>...</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
            <div className = 'position-absolute top-50 start-50 translate-middle'>
            <div className='row'></div>
              <div className='row'>
              <button className="btn btn-outline-primary" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>

              </div>
              <div className='row'></div>
            </div>

            </div>
          </div>
          </div>
          <footer>
            <div> aaaa</div>
          </footer>
    </div>
  )
}
