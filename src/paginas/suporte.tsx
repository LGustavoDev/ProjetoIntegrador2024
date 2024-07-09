import React from "react"
import '../estilo/estilo2.css'


function Suporte() {
  return (
    <div>
      <div className="Sup"> <h2>Suporte</h2></div>
      <div className="Faq">
        <h2>FAQ</h2>
    </div>
 
      <div className='Vito3'>
 
        <div className="Quadro1">
          <div className="Barra1">Como fazer seu cadastro?  </div>
          <div className="Barra1">Como cadastrar meu currículo? </div>
          <div className="Barra1">Posso fazer alterações em meu currículo após o cadastro? </div>
          <div className="Barra1">Onde e como vou receber o retorno/feedback das empresas? </div>  
        </div>
 
        <div className='f7'>

        </div>
       
        <div className='Quadro2'>
          <div className="Barra1">Como cadastro uma ou mais vagas? </div>
          <div className="Barra1">Como insiro informações sobre minha empresa na plataforma? </div>
          <div className="Barra1">Como altero ou retiro uma oferta de vaga do meu perfil empresarial?  </div>
          <div className="Barra1">Terei algum custo adicional ao usar o Trampo Facil para Empresas? </div>
        </div>

      </div>
     
      <div className='rodape'>
          <h4>Ainda tem dúvidas?<br />
          Preencha nosso formulário do Google aqui ou <br />
         
          nos mande um e-mail em suporte@trampofacil.com</h4> <br />
         

      </div>
 
    </div>
  );
}
 
export default Suporte;