import React from 'react';

function Modal({onShowResults}){
    return(
      <div className="modal">
        <div className="modal-box">
          <h3 className="modal-caption">Победа!</h3>
          <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
          <button onClick={onShowResults} className="button modal-button" type="button">Показать результаты</button>
        </div>
      </div>
    );
  }
export default Modal;