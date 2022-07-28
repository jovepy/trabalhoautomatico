import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
import Head from 'next/head';

const myLoader = ({ src, width, quality }) => {
  return `./${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (
    <div>
      <div>
          <Head>        
          
            <title >Automação de Processos Operacionais com Python</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
              <meta charset="utf-8"></meta> 
              <meta name="robots" content="index,follow"></meta>
              <meta name="googlebot" content="index,follow"></meta>
          
          </Head>
      </div>
      <body>
      <div className='text-left p-2'>
      
      <nav>
        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Início</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Orçamento</button>
          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contato</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">        
        <div className='row'><br></br></div> 
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
            <div className='row'><br></br></div>
            <div className='row'><br></br></div>
            <Image className="img-fluid rounded-start" loader={myLoader} src='./atencaocliente2.gif' alt="Criamos a sua solulçao" width={480} height={270} />  
            </div>
            <div className="col-md-8">
              <div className="card-body align-middle ">
                <h5 className="card-title text-start p-4">Automação de processos operacionais com Python</h5>
                <p className="fw-light card-text text-start align-middle">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Extração de dados de documentos PDF, Imagens e sites;</li>
                  <li className="list-group-item">Insira dados de papéis em sistemas automaticamente;</li>
                  <li className="list-group-item">Transforme métodos operacionais em processos automáticos;</li>
                  <li className="list-group-item">Otimize processos complexos;</li>
                </ul>
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tableIndex="0">
        <div className='row'><br></br></div>
        <div className="row">            
          <div className='container-fluid p-4'>
        
          <div className="row">
  <div className="col-sm-4 text-center text-truncate">
    <div className="list-group" id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action active p-2" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Solicitação</a>
      <a className="list-group-item list-group-item-action p-2" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile p-2">Retorno</a>
      <a className="list-group-item list-group-item-action p-2" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Garantias</a>
      <a className="list-group-item list-group-item-action p-2" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Contrato</a>
    </div>
  </div>
  <div className="col-sm-7 text-start align-middle">
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
      <div className='row'><br></br></div>
      <p> A solcitação do orçamento de uma automação personalizada pode ser feita via <b type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Whatsapp</b> ou pelo preenchimento deste formulário.</p>

      </div>
      <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
      <div className='row'><br></br></div>
      <p>Perante a individualidade de cada processo, uma análise sobre a viabilidade da automação é realizada e o retorno ao cliente será executado em até 5 dias úteis. Nesse retorno constará um planejamento prévio do projeto, acentuando-se as possíveis dificuldades, bem como as possíveis soluções e o preço global do projeto.</p>

      </div>
      <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
      <div className='row'><br></br></div>
      <p>Conforme estabelecido em nosso contrato, na seção x, item y, explicita-se as garantias</p>

      </div>
      <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
      <div className='row'><br></br></div>
      <p type="button" onClick={() => Router.push('https://drive.google.com/file/d/1AjsH_WpHDTAfC8Gi2x2qvUKv3Amr-GJP/view?usp=sharingy')}> <b>Clique aqui</b> para visualizar nosso contrato padrão.</p>
              
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tableIndex="0">
          
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          
          <div className='position-relative top-50 start-50 translate-middle text-center'>
          <button className="btn btn-outline-primary" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
          </div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          

        </div>


      </div>


      <footer className='text-center'>
      <style jsx>{`
                        svg {
                          color: white;
                        } 
                      `}</style>
      <div className="card bg-primary">
        <div className="card-body">
          
        <div className='row'><br></br></div>
              <div className="container text-center">
                <div className='row'>
                  <div className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg"  width="60" height="60" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://www.linkedin.com/in/rodrigojove/')}>
                    
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </div>
                  <div className='col'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                  </div>
                  <div className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://github.com/jovepy')} >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>   
                    <div className='row'><br></br></div>               
                    </div>
                    </div>
                    
        </div>
      </div>     
      </div>
      </footer>
    </div>
    <p className="card-text text-center"><small className="text-muted">Criado por Jove.py</small></p>
    </body>
    </div>
    
  )
}
