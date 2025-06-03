import React from 'react'
import ImgDeletar from "../../assets/img/Lixo.png"

const Modal = (props) => {
  return (
    <>

    <div className="model-overlay" onClick={props.fecharModal}> </div>

      <div className="model">
        <h1>{props.titulo}</h1>
      </div>
    <div className="model_conteudo">
        {props.tipoModel === "descricaoEvento" ? (
          <p>{props.descricao}</p>
        ) : (
          <>
            {comentarios.map((item) => (
              <div key={item.feedbackID}>
                <strong>
                  {item.usuario.nome}
                </strong>
                <img src={ImgDeletar} alt="delete" />
                <p>{item.descricao}</p>
                <hr />
              </div>
            ))}
            <div>
              <input type="text" placeholder='Escreva seu comentário...'/>
              <button>
                Cadastrar
              </button>
            </div>
          </>
        )}
    </div>

    </>
    
  )
}

export default Modal;
